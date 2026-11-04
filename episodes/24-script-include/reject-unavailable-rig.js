/**
 * @author Jitendra Zaa
 * Episode 24: business rule "Reject loan for unavailable rig", now using LoanUtils.
 * Table: Loan | When: before | Insert | Condition: State is Active
 */
(function executeRule(current, previous /*null when async*/) {

    var utils = new LoanUtils();
    if (!current.getValue('rig') ||
            !utils.isRigFree(current.getValue('rig'))) {
        gs.addErrorMessage('This rig is not available.');
        current.setAbortAction(true);
    }

})(current, previous);
