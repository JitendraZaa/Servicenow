/**
 * @author Jitendra Zaa
 * Episode 21: mark one exact loan as returned.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 */

var LOAN_ID = 'paste the sys_id printed by create-loan.js here';

(function () {
    var loan = new GlideRecord('x_arcwl_loans_loan');
    if (!loan.get(LOAN_ID)) {
        gs.info('Loan not found. Nothing is changed.');
        return;
    }
    if (loan.getValue('state') !== 'active') {
        gs.info('Loan is not active. Nothing is changed.');
        return;
    }

    loan.setValue('returned_date', new GlideDate().getValue());
    loan.setValue('state', 'returned');

    if (loan.update()) {                  // returns the sys_id when saved
        gs.info('Returned loan ' + loan.getUniqueValue());
    } else {
        gs.error('Loan return was not saved.');
    }
})();
