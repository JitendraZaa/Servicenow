/**
 * Send the details of the loan for ARC-RIG-011 to the REST Message "Arcwell Echo" (method send_loan).
 * Run in Scripts - Background with the Equipment Loans scope selected. The send is manual.
 * @author Jitendra Zaa
 */
(function () {
    var loan = new GlideRecord('x_arcwl_loans_loan');
    loan.addQuery('rig.asset_tag', 'ARC-RIG-011');
    loan.orderByDesc('sys_created_on');
    loan.setLimit(1);
    loan.query();
    if (!loan.next()) {
        gs.info('Loans: no loan to send');
        return;
    }

    var payload = {
        rig: loan.getDisplayValue('rig'),
        borrower: loan.getDisplayValue('borrower'),
        start_date: loan.getValue('start_date'),
        due_date: loan.getValue('due_date'),
        state: loan.getValue('state')
    };

    try {
        var message = new sn_ws.RESTMessageV2('Arcwell Echo', 'send_loan');
        message.setRequestBody(JSON.stringify(payload));
        message.setHttpTimeout(10000);

        var response = message.execute();
        var status = response.getStatusCode();
        if (status < 200 || status >= 300) {
            gs.error('Loans: endpoint returned HTTP ' + status);
            return;
        }
        gs.info('Loans: sent loan, HTTP status ' + status);
        // The echo service returns what it received under the name "json".
        var echoed = JSON.parse(response.getBody()).json;
        gs.info('Loans: echoed back ' + JSON.stringify(echoed));
    } catch (e) {
        gs.error('Loans: outbound call stopped: ' + e.message);
    }
})();
