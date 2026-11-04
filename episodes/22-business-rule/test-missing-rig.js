/**
 * @author Jitendra Zaa
 * Episode 22: server-side test of the missing-rig branch.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 * The form's mandatory check comes first, so this inserts without a rig.
 */
var loan = new GlideRecord('x_arcwl_loans_loan');
loan.initialize();
loan.setValue('state', 'active');            // no rig on purpose
var id = loan.insert();                      // null when the rule refused it
gs.info(id ? 'Loan was created: ' + id : 'Insert refused by the rule. Nothing is saved.');
