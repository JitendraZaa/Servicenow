/**
 * ATF "Run Server Side Script" step: a second loan for a rig already on loan must be rejected.
 * Steps 1 and 2 of the test (Record Insert) create the test rig and its first loan;
 * ATF rolls those back. Use the wrapper the instance generates. [verify: wrapper text]
 * @author Jitendra Zaa
 */
(function (outputs, steps, stepResult, assertEqual) {
    // sys_id of the Record Insert step that created the rig (change it per test) [verify]
    var RIG_STEP_ID = 'REPLACE_WITH_RIG_STEP_SYS_ID';
    var rigId = steps(RIG_STEP_ID).record_id;
    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!rigId || !rig.get(rigId)) {
        throw new Error('ATF rig was not created.');
    }

    var start = new GlideDateTime();
    var startDate = start.getDate().getValue();
    start.addDaysUTC(14);
    var dueDate = start.getDate().getValue();

    var second = new GlideRecord('x_arcwl_loans_loan');
    second.initialize();
    second.setValue('rig', rig.getUniqueValue());
    second.setValue('borrower', gs.getUserID());
    second.setValue('start_date', startDate);
    second.setValue('due_date', dueDate);
    second.setValue('state', 'active');
    var secondId = second.insert(); // the before rule should stop this one

    assertEqual({
        name: 'Second loan was not saved',
        shouldbe: true,
        value: !secondId
    });
    stepResult.setOutputMessage(secondId ? 'Second loan was saved' : 'Second loan was rejected');

    if (secondId && second.get(secondId)) {
        second.deleteRecord(); // only a record this step made by mistake
    }
})(outputs, steps, stepResult, assertEqual);
