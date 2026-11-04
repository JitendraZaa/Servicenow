/**
 * @author Jitendra Zaa
 * Episode 20: off-recording reset of the fixture loans' due dates.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 */

// asset tag -> days from today (negative = in the past)
var OFFSETS = {
    'ARC-RIG-002': -10,
    'ARC-RIG-003': -3,
    'ARC-RIG-005': -1,
    'ARC-RIG-007': 30
};

Object.keys(OFFSETS).forEach(function (tag) {
    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!rig.get('asset_tag', tag)) {
        gs.info('Rig ' + tag + ' not found. Nothing is changed.');
        return;
    }

    var due = new GlideDateTime();
    due.addDaysUTC(OFFSETS[tag]);
    var dueDay = due.getDate().getValue();       // yyyy-MM-dd

    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.addQuery('rig', rig.getUniqueValue());
    loan.addQuery('state', 'active');
    loan.query();
    while (loan.next()) {
        loan.setValue('due_date', dueDay);
        if (loan.update()) {
            gs.info(tag + ' due ' + dueDay);
        } else {
            gs.error(tag + ' was not updated.');
        }
    }
});
