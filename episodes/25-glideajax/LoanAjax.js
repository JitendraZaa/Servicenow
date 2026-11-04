/**
 * @author Jitendra Zaa
 * Episode 25: client callable script include LoanAjax (scope x_arcwl_loans).
 * Client callable: on | Accessible from: This application scope only
 */
var LoanAjax = Class.create();
LoanAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

    // Called from the browser with sysparm_name = 'isRigFree'.
    isRigFree: function () {
        var rigId = this.getParameter('sysparm_rig_id');

        // The browser can be reached by anyone signed in, so the server checks.
        if (!gs.hasRole('x_arcwl_loans.user')) {
            return 'false';
        }
        var rig = new GlideRecordSecure('x_arcwl_loans_rig');
        if (!rig.get(rigId) || !rig.canRead()) {
            return 'false';
        }

        var utils = new LoanUtils();
        return utils.isRigFree(rigId) ? 'true' : 'false';   // the answer is text
    },

    type: 'LoanAjax'
});
