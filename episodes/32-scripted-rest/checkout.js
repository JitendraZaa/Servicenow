/**
 * Scripted REST resource: POST /api/x_arcwl_loans/arcwell_loans/checkout
 * Body: { "rig_asset_tag": "...", "borrower_user_name": "...", "days": 14 }
 * @author Jitendra Zaa
 */
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    var body = request.body.data;
    var problem = 'Send rig_asset_tag, borrower_user_name and days (a whole number from 1 to 60).';

    if (!body) {
        return new sn_ws_err.BadRequestError(problem);
    }
    var days = body.days;
    if (typeof body.rig_asset_tag !== 'string' ||
            !body.rig_asset_tag.trim() ||
            typeof body.borrower_user_name !== 'string' ||
            !body.borrower_user_name.trim() ||
            typeof days !== 'number' ||
            !isFinite(days) || Math.floor(days) !== days ||
            days < 1 || days > 60) {
        return new sn_ws_err.BadRequestError(problem);
    }

    var rig = new GlideRecord('x_arcwl_loans_rig');
    if (!rig.get('asset_tag', body.rig_asset_tag.trim())) {
        return new sn_ws_err.NotFoundError('No rig has the asset tag ' + body.rig_asset_tag + '.');
    }

    var borrower = new GlideRecord('sys_user');
    if (!borrower.get('user_name', body.borrower_user_name.trim())) {
        return new sn_ws_err.NotFoundError('No user has the user name ' + body.borrower_user_name + '.');
    }

    if (!new LoanUtils().isRigFree(rig.getUniqueValue())) {
        return new sn_ws_err.ConflictError('Rig is unavailable.');
    }

    var due = new GlideDateTime();
    var startDate = due.getDate().getValue();
    due.addDaysUTC(days);
    var dueDate = due.getDate().getValue();

    var loan = new GlideRecordSecure('x_arcwl_loans_loan');
    loan.initialize();
    if (!loan.canCreate()) {
        var denied = new sn_ws_err.ServiceError();
        denied.setStatus(403);
        denied.setMessage('Loan creation is not permitted.');
        response.setError(denied);
        return;
    }
    loan.setValue('rig', rig.getUniqueValue());
    loan.setValue('borrower', borrower.getUniqueValue());
    loan.setValue('start_date', startDate);
    loan.setValue('due_date', dueDate);
    loan.setValue('state', 'active');
    var loanId = loan.insert();

    if (!loanId) {
        // the rig may have been taken since the check: that is a 409; anything else is unexpected
        if (!new LoanUtils().isRigFree(rig.getUniqueValue())) {
            return new sn_ws_err.ConflictError('Rig is unavailable.');
        }
        var failed = new sn_ws_err.ServiceError();
        failed.setStatus(500);
        failed.setMessage('The loan could not be saved.');
        response.setError(failed);
        return;
    }

    // check that the saved loan holds what was sent
    var saved = new GlideRecord('x_arcwl_loans_loan');
    if (!saved.get(loanId) || saved.getValue('rig') !== rig.getUniqueValue() ||
            saved.getValue('borrower') !== borrower.getUniqueValue()) {
        var odd = new sn_ws_err.ServiceError();
        odd.setStatus(500);
        odd.setMessage('The loan was saved with unexpected values.');
        response.setError(odd);
        return;
    }

    response.setStatus(201);
    return {
        loan: loanId,
        rig: rig.getDisplayValue(),
        due_date: dueDate,
        state: 'active'
    };
})(request, response);
