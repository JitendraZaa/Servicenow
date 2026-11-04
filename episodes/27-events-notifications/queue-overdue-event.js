/**
 * Queue the overdue event for one active loan whose due date has passed.
 * Run in Scripts - Background with the Equipment Loans scope selected.
 * @author Jitendra Zaa
 */
(function () {
    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.addQuery('state', 'active');
    loan.addEncodedQuery('due_date<javascript:gs.beginningOfToday()');
    loan.setLimit(1);
    loan.query();

    if (!loan.next()) {
        gs.info('Loans: no overdue loan found');
        return;
    }

    // name, record, parm1 (who to tell), parm2 (rig name)
    gs.eventQueue(
        'x_arcwl_loans.loan.overdue',
        loan,
        loan.getValue('borrower'),
        loan.getDisplayValue('rig')
    );
    gs.info('Loans: queued overdue event for ' + loan.getDisplayValue('rig') +
        ', borrower ' + loan.getDisplayValue('borrower'));
})();
