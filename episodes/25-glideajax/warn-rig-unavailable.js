/**
 * @author Jitendra Zaa
 * Episode 25: client script "Warn if rig is not available".
 * Table: Loan | UI Type: Desktop | Type: onChange | Field: Rig
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (isLoading) {
        return;
    }

    g_form.hideFieldMsg('rig', true);        // remove an older warning
    if (newValue === '') {
        return;
    }

    var ga = new GlideAjax('x_arcwl_loans.LoanAjax');   // scope + script include
    ga.addParam('sysparm_name', 'isRigFree');           // which function
    ga.addParam('sysparm_rig_id', newValue);            // the chosen rig's sys_id

    // The form keeps working. This function runs when the answer arrives.
    ga.getXMLAnswer(function (answer) {
        if (g_form.getValue('rig') !== newValue) {
            return;                          // ignore an answer for an earlier choice
        }
        if (answer === 'false') {
            g_form.showFieldMsg('rig', 'This rig is not available.', 'error');
        }
    });
}
