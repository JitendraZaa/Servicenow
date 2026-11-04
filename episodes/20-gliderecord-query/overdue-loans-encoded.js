/**
 * @author Jitendra Zaa
 * Episode 20: the same search, from an encoded query copied from a list filter.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 */

var gr = new GlideRecord('x_arcwl_loans_loan');
// Copy query from the list filter gives one string for both conditions.
gr.addEncodedQuery('state=active^due_date<javascript:gs.beginningOfToday()');
gr.orderBy('due_date');
gr.query();

var count = 0;
while (gr.next()) {
    count++;
    gs.info(
        gr.rig.asset_tag +
        ' | ' + gr.borrower.getDisplayValue() +
        ' | due ' + gr.getValue('due_date')
    );
}
gs.info('Overdue loans: ' + count);
