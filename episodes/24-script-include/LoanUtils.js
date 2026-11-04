/**
 * @author Jitendra Zaa
 * Episode 24: script include LoanUtils (scope x_arcwl_loans).
 * Accessible from: This application scope only | Client callable: off
 */
var LoanUtils = Class.create();
LoanUtils.prototype = {

    initialize: function () {
    },

    /**
     * True when the rig exists and its state is Available.
     * @param {string} rigId sys_id of a record on x_arcwl_loans_rig
     * @returns {boolean}
     */
    isRigFree: function (rigId) {
        if (!rigId) {
            return false;                     // no id: nothing is free
        }
        var rig = new GlideRecord('x_arcwl_loans_rig');
        if (!rig.get(rigId)) {
            return false;                     // no such rig
        }
        return rig.getValue('state') === 'available';
    },

    type: 'LoanUtils'
};
