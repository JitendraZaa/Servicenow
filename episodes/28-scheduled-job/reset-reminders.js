/**
 * Background script for practice: set reminder_sent back to false on active overdue loans.
 * @author Jitendra Zaa
 */
(function () {
    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.addQuery('state', 'active');
    loan.addEncodedQuery('due_date<javascript:gs.beginningOfToday()');
    loan.query();
    var count = 0;
    while (loan.next()) {
        loan.setValue('reminder_sent', false);
        if (loan.update()) {
            count++;
        }
    }
    gs.info('Loans: reminders reset on ' + count + ' loans');
})();
