/**
 * @author Jitendra Zaa
 * Episode 24: test LoanUtils.isRigFree in Scripts - Background (scope Equipment Loans).
 */
var utils = new LoanUtils();

function idOf(tag) {
    var rig = new GlideRecord('x_arcwl_loans_rig');
    return rig.get('asset_tag', tag) ? rig.getUniqueValue() : '';
}

gs.info('ARC-RIG-009 free? ' + utils.isRigFree(idOf('ARC-RIG-009')));  // available
gs.info('ARC-RIG-008 free? ' + utils.isRigFree(idOf('ARC-RIG-008')));  // on loan
gs.info('ARC-RIG-019 free? ' + utils.isRigFree(idOf('ARC-RIG-019')));  // in repair
gs.info('Unknown id free? ' + utils.isRigFree('not-a-real-id'));
