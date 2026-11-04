/**
 * @author Jitendra Zaa
 * Episode 26: business rule "Release rig on return".
 * Table: Loan | When: after | Update | Condition: State changes to Returned
 */
(function executeRule(current, previous /*null when async*/) {

    // Another active loan on the same rig keeps it On loan.
    var other = new GlideRecord('x_arcwl_loans_loan');
    other.addQuery('rig', current.getValue('rig'));
    other.addQuery('state', 'active');
    other.addQuery('sys_id', '!=', current.getUniqueValue());
    other.setLimit(1);
    other.query();
    if (other.next()) {
        return;
    }

    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!rig.get(current.getValue('rig')) ||
            rig.getValue('state') !== 'on_loan') {
        return;                                  // only an On loan rig is freed
    }
    rig.setValue('state', 'available');
    if (!rig.update()) {
        gs.error('Rig ' + rig.getValue('asset_tag') + ' was not set Available.');
    }

})(current, previous);
