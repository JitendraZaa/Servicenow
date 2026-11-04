/**
 * Scheduled Script Execution: queue the overdue event for each overdue loan not yet reported.
 * A loan is skipped when reminder_sent is already true.
 * @author Jitendra Zaa
 */
(function () {
    var count = 0;
    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.addQuery('state', 'active');
    loan.addQuery('reminder_sent', false);
    loan.addEncodedQuery('due_date<javascript:gs.beginningOfToday()');
    loan.query();

    while (loan.next()) {
        gs.eventQueue(
            'x_arcwl_loans.loan.overdue',
            loan,
            loan.getValue('borrower'),
            loan.getDisplayValue('rig')
        );
        loan.setValue('reminder_sent', true);
        if (loan.update()) {
            count++;
        }
    }
    gs.info('Loans: overdue reminders queued: ' + count);
})();
