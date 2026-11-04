/**
 * Queue the overdue event for every active loan whose due date has passed.
 * @author Jitendra Zaa
 */
(function () {
    var count = 0;
    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.addQuery('state', 'active');
    loan.addEncodedQuery('due_date<javascript:gs.beginningOfToday()');
    loan.query();
    while (loan.next()) {
        gs.eventQueue(
            'x_arcwl_loans.loan.overdue',
            loan,
            loan.getValue('borrower'),
            loan.getDisplayValue('rig')
        );
        count++;
    }
    gs.info('Loans: queued overdue events: ' + count);
})();
