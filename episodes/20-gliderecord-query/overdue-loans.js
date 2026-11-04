/**
 * @author Jitendra Zaa
 * Episode 20: list active loans that are past their due date.
 * Run in Scripts - Background with the scope set to Equipment Loans.
 * Date fields hold a whole day as yyyy-MM-dd, so "today" is built the same way.
 */

var today = new GlideDate().getValue();          // for example 2026-11-02

var gr = new GlideRecord('x_arcwl_loans_loan');  // the Loan table
gr.addQuery('state', 'active');                  // only loans still out
gr.addQuery('due_date', '<', today);             // due before today
gr.orderBy('due_date');                          // oldest first
gr.query();                                      // run the search

var count = 0;                                   // a counter starts at zero
while (gr.next()) {                              // repeat for each match
    count++;                                     // add one
    gs.info(
        gr.rig.asset_tag +                       // dot-walk to the rig's tag
        ' | ' + gr.borrower.getDisplayValue() +  // the name, not the sys_id
        ' | due ' + gr.getValue('due_date')
    );
}
gs.info('Overdue loans: ' + count);
