/**
 * @author Jitendra Zaa
 * Episode 23: client script "Set due date from start date".
 * Table: Loan | UI Type: Desktop | Type: onChange | Field: Start date
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    // Do nothing while the form is opening, or when the field was cleared.
    if (isLoading || newValue === '') {
        return;
    }

    var LOAN_DAYS = 14;

    // The Date field's value on this form is the text yyyy-MM-dd.
    var raw = g_form.getValue('start_date');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
        g_form.showFieldMsg('start_date', 'Enter a valid date.', 'error');
        return;
    }
    g_form.hideFieldMsg('start_date', true);

    // Add the days with UTC arithmetic so a time zone cannot move the day.
    var due = new Date(raw + 'T00:00:00Z');
    due.setUTCDate(due.getUTCDate() + LOAN_DAYS);
    g_form.setValue('due_date', due.toISOString().slice(0, 10));
}
