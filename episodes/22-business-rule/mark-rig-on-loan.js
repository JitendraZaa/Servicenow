/**
 * @author Jitendra Zaa
 * Episode 22: business rule "Mark rig on loan".
 * Table: Loan | When: after | Insert | Condition: State is Active
 */
(function executeRule(current, previous /*null when async*/) {

    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!rig.get(current.getValue('rig'))) {
        return;
    }

    rig.setValue('state', 'on_loan');
    if (!rig.update()) {                         // null when the save did not happen
        gs.error('Rig ' + rig.getValue('asset_tag') + ' was not marked On loan.');
    }

})(current, previous);
