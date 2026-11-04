/**
 * @author Jitendra Zaa
 * Episode 22: business rule "Reject loan for unavailable rig".
 * Table: Loan | When: before | Insert | Condition: State is Active
 */
(function executeRule(current, previous /*null when async*/) {

    // A checkout needs a rig that exists.
    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!current.getValue('rig') ||
            !rig.get(current.getValue('rig'))) {
        gs.addErrorMessage('Choose an existing rig.');
        current.setAbortAction(true);
        return;
    }

    // Only an available rig can be lent.
    if (rig.getValue('state') !== 'available') {
        gs.addErrorMessage('This rig is not available (' +
            rig.getDisplayValue('state') + ').');
        current.setAbortAction(true);            // stop the save
    }

})(current, previous);
