/**
 * @author Jitendra Zaa
 * Episode 26: UI action "Return rig".
 * Table: Loan | Show insert: off | Show update: on | Form button | Client: unchecked
 * Condition: current.getValue('state') == 'active' && gs.hasRole('x_arcwl_loans.user')
 */
(function () {
    action.setRedirectURL(current);              // reopen this loan afterwards

    // The condition hides the button; these checks stop any other route to the script.
    if (current.isNewRecord() ||
            !gs.hasRole('x_arcwl_loans.user') ||
            !current.canWrite() ||
            !current.state.canWrite() ||
            !current.returned_date.canWrite() ||
            current.getValue('state') !== 'active') {
        return;
    }

    current.setValue('returned_date', new GlideDate().getValue());
    current.setValue('state', 'returned');
    if (current.update()) {
        gs.addInfoMessage('Loan returned.');
    } else {
        gs.addErrorMessage('The return was not saved.');
    }
})();
