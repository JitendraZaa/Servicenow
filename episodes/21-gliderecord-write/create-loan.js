/**
 * @author Jitendra Zaa
 * Episode 21: insert a loan for Priya Nair. Dry run by default.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 */

var DRY_RUN = true;                  // true: only log. false: write the record.
var RIG_TAG = 'ARC-RIG-004';         // the asset tag of the rig to lend
var LOAN_DAYS = 14;

(function () {
    // Find the rig by its asset tag. get(field, value) returns false if none.
    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!rig.get('asset_tag', RIG_TAG)) {
        gs.info('Rig ' + RIG_TAG + ' not found. Nothing is changed.');
        return;
    }

    // Find the borrower by login name.
    var user = new GlideRecord('sys_user');
    if (!user.get('user_name', 'priya.nair')) {
        gs.info('Borrower not found. Nothing is changed.');
        return;
    }

    // Dates: start today, due LOAN_DAYS later. Date fields take yyyy-MM-dd.
    var start = new GlideDateTime();
    var due = new GlideDateTime();
    due.addDaysUTC(LOAN_DAYS);

    if (DRY_RUN) {
        gs.info('Dry run: would create a loan for ' + user.getValue('name') +
            ' on ' + RIG_TAG + ' due ' + due.getDate().getValue());
        return;
    }

    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.initialize();               // a blank, unsaved record
    loan.setValue('rig', rig.getUniqueValue());
    loan.setValue('borrower', user.getUniqueValue());
    loan.setValue('start_date', start.getDate().getValue());
    loan.setValue('due_date', due.getDate().getValue());
    loan.setValue('state', 'active');

    var newId = loan.insert();       // returns the sys_id, or null if refused
    if (newId) {
        gs.info('Created loan ' + newId);   // keep this id for return-loan.js
    } else {
        gs.info('The loan was not created. Nothing is changed.');
    }
})();
