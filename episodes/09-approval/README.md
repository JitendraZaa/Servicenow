# Episode 09: Approvals

Paths: U A D

In this episode you make the laptop flow wait for Dana Lee's decision and act on both answers. Today every laptop order becomes a task, even when a manager would say no, so Sam prepares a laptop that nobody approved. An approval is a record that asks a person to decide about another record; you will see its State change from Requested to Approved or Rejected. If you know Salesforce, this is close to an approval request there.

New terms: approval, approver, role approver_user, Ask For Approval, If and Else If, My Approvals, Closed Incomplete.

## Before you start

- You finished [episode 08](../08-first-flow). The flow `Arcwell laptop order` is active and creates a task for each order.
- Sign in as `admin`.

## Steps

1. Create an update set: `Arcwell ep09`, Global, Submit and Make Current. Make it current before editing the flow, to keep its configuration changes together.
2. For this walkthrough, add the role `approver_user` to Dana. ServiceNow describes approver users as users who can modify requests for approval routed to them. Open Users, search for and open Dana Lee. Her Roles list is empty: click Edit, search for `approver_user`, add it and click Save. The Roles list now shows approver_user, the role you added; a second row is inherited and appeared with the role.
3. Open Workflow Studio and the flow `Arcwell laptop order`. Click the plus below Get Catalog Variables, click Action, type `Ask For Approval` in the search box and pick it, so the approval comes before the task.
4. Set the Record: from the Data panel, drag Requested Item Record, under the trigger, into the Record box. The Table fills in as Requested Item, the Approval field is Approval and the Journal field is Approval history, where the history and comments of the approval request are stored.
5. Set the rules. For the first rule, open the list of approval rules and choose Anyone approves, click the user icon, pick a user, type `Dana` and choose Dana Lee: Approve, when Dana Lee approves. Click Add another OR rule set; for the second rule choose Reject in the first list, then Anyone rejects, and pick Dana Lee the same way. These rules handle Dana's approval and rejection. With no due date set, the flow waits for her decision. Click Done.
6. Click the plus below the approval, choose Flow Logic and choose If. The If step shows a condition, and the steps under it belong to that condition. Type the Condition Label `Approved`, drag Approval State from the Ask For Approval step (Data panel) into Condition 1, choose is, then choose Approved, and click Done.
7. Under then, add the action Create Catalog Task with the same values as in episode 08: Requested Item is the trigger's item, Short description `Prepare replacement laptop`, Assignment group `Arcwell Service Desk`, and a Description made of 2 pills, Reason and Needed by. Delete the old Create Catalog Task below so the task is created once, and only after approval.
8. Add Else If. Label it `Rejected`. The condition is Approval State is Rejected. Inside it add the action Update Record: Record is the requested item from the trigger, Table is Requested Item, and set the field State to Closed Incomplete, one of the choices in the State list and the ending you want for a rejected order.
9. Click Activate (the blue button at the top right). A dialog asks whether to activate the flow: click Activate in the dialog, wait for "Saving Arcwell laptop order" to finish, and the flow shows Active.
10. Impersonate Priya Nair, which means you act as her. In the portal browse Hardware to Replacement laptop and order it: Laptop model Standard 14 inch, Reason End of life, Needed by 2026-11-16. Order Now, check the request is for Priya Nair, Checkout. The request is REQ0010003 in the video.
11. End the impersonation. Open Requested Items and open RITM0010003. Its Catalog Tasks list is empty, and Approvers shows Dana Lee with State Requested. The flow is waiting for her.
12. Dana finds her work in My Approvals. Impersonate Dana Lee, open My Approvals from the All menu, and open the line for RITM0010003 (state Requested). Click Approve. The line now shows Approved.
13. End the impersonation and open RITM0010003 again. The approval is Approved and the delivery plan shows the task Prepare replacement laptop.
14. Now the other answer. Impersonate Priya and order the same laptop with the same choices. Checkout. End the impersonation and impersonate Dana Lee. In My Approvals open the approval, type the comment `Not this quarter`, and click Reject.
15. End the impersonation and open the new requested item (RITM0010005 in the video). Its State is Closed Incomplete, and Activity shows that the System changed the state.

Result: the flow asks Dana, waits, and then either creates the task or closes the item.

## Your turn

1. Order a laptop as Priya, approve it as Dana in My Approvals, and look at the task.
2. Order another, reject it as Dana with your own comment, and read the requested item's State.
3. Delete your practice requests by their numbers, and leave the flow as it is.

## Clean up

Reject or approve any approval you left open. Delete every practice request and requested item by its number. The flow is unchanged by the exercises, so there is nothing to reactivate.

## Previous and next

Previous: [Episode 08: Your first flow](../08-first-flow)

Next: [Episode 10: Knowledge articles](../10-knowledge)
