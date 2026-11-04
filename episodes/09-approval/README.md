# Episode 09: Approvals

Paths: U A D

In this episode you make the laptop flow wait for Dana Lee's decision and act on both answers. Today every laptop order becomes a task, even when a manager would say no, so Sam prepares a laptop that nobody approved. An approval is a record that asks a person to decide about another record; you will see its State change from Requested to Approved or Rejected. If you know Salesforce, this is close to an approval request there.

New terms: approval, approver, role approver_user, Ask For Approval, data pill picker, If and Else If, My Approvals, Closed Incomplete.

## Before you start

- You finished [episode 08](../08-first-flow). The flow `Arcwell laptop order` is active and creates a task for each order.
- Sign in as `admin`.

## Steps

1. Create an update set. Open the All menu, filter for `Update Sets`, and open Local Update Sets. Click New, type the name `Arcwell ep09`, add a short description, keep Global as the application, and click Submit and Make Current. Make it current before editing the flow, to keep its configuration changes together.
2. For this walkthrough, add the role `approver_user` to Dana. ServiceNow describes approver users as users who can modify requests for approval routed to them. Open the All menu, filter for `User Administration`, and click Users. Filter the list by name, find Dana Lee and open her user record. Her Roles list is empty: click Edit, search for `approver_user` in the Collection box, select it, move it across to the Roles list and click Save. The Roles list now shows approver_user, the role you added; a second row is inherited and appeared with the role.
3. Open the All menu, type `Workflow Studio`, and click it; it opens in a new tab. Click Flows and open the flow `Arcwell laptop order`. The approval has to come first, so click the plus below Get Catalog Variables and click Action. Search for `Ask For Approval` and pick it.
4. Set the Record: open the data pill picker next to Record and choose Requested Item Record, under the trigger. The Table fills in as Requested Item, the Approval field is Approval and the Journal field is Approval history, where the history and comments of the approval request are stored.
5. Set the rules. For the first rule, open the list of approval rules and choose Anyone approves, which means one approval is enough. Click the user icon, which opens a Pick a user box, open its list, and choose Dana Lee. Click Add another OR rule set; for the second rule choose Reject in the first list, then Anyone rejects, and pick Dana Lee the same way with the user icon and its list. With no due date set, the flow waits for her decision. Click Done.
6. Click the plus below the approval, choose Flow Logic and choose If. Type the Condition Label `Approved`. For Condition 1 open the data pill picker, choose Approval State from the Ask For Approval step, choose is, then choose Approved, and click Done.
7. Under then, click the plus and choose Action, search for `Create Catalog Task` and pick it. Choose the Requested Item with the data pill picker (Requested Item Record, under the trigger), type the Short description `Prepare replacement laptop`, add the field Assignment group and choose `Arcwell Service Desk`; the rest is as in episode 08. Then delete the earlier Create Catalog Task that sits outside the If, so the task is created once, and only after approval.
8. Click the plus below the If step, choose Flow Logic and pick Else If. Label it `Rejected`. For the condition open the data pill picker, choose Approval State, choose is and pick Rejected. Inside it add the action Update Record: Record is the requested item from the trigger (choose it in the data pill picker), Table is Requested Item, and search the field list for State and choose it.
9. Open the State list, read the choices, and choose Closed Incomplete, the ending you want for a rejected order. Click Done to save the action, then click Activate (the blue button at the top right). A dialog asks whether to activate the flow: click Activate in the dialog, wait for "Saving Arcwell laptop order" to finish, and the flow shows Active with a Published message.
10. Open the user menu, choose Impersonate User, type `Priya Nair` and pick her; you now act as her. In the portal open the All menu, filter for `Catalog`, click Service Catalog, search for `Replacement`, and open Replacement laptop. The Laptop model is Standard 14 inch and the Reason is End of life. Click Order Now. The request is REQ0010006 in the video.
11. Open the user menu and click End Impersonation. Open the All menu, type `Requested` and choose Requested Items under Self-Service. The list opens filtered to your own requests: click All in the list breadcrumb to remove the Requested for filter. Open RITM0010006. Its Approval is Requested: the flow is waiting for Dana's decision.
12. Dana finds her work in My Approvals. Open the user menu, choose Impersonate User, type `Dana Lee` and pick her, then open My Approvals from the All menu. Open the line for RITM0010006 (state Requested) and click Approve. The line now shows Approved.
13. End the impersonation, open Requested Items and open RITM0010006 again. Its Approval is Approved and the delivery plan shows the task Prepare replacement laptop.
14. Now the other answer. As Priya, order the same laptop again with Order Now (REQ0010007 in the video). End the impersonation and impersonate Dana Lee. In My Approvals open the approval, type the comment `Not this quarter`, post it and click Reject.
15. End the impersonation, open Requested Items and open RITM0010007: its Approval is Rejected. The Self Service view of a requested item shows the Approval field but not State, Activity or its related lists, so to see them open an older rejected item (RITM0010005 in the video) in the standard view: its State is Closed Incomplete, Activity shows that the System changed the state, and its Catalog Tasks list is empty. No task was created.

Result: the flow asks Dana, waits, and then either creates the task or closes the item.

## Your turn

1. Order a laptop as Priya, approve it as Dana in My Approvals, and look at the task.
2. Order another, reject it as Dana with your own comment, and check that its Approval is Rejected.
3. Delete your practice requests by their numbers, and leave the flow as it is.

## Clean up

Reject or approve any approval you left open. Delete every practice request by its number: click the global Search box at the top of the page, type the request number (REQ...), choose Exact Match, open the request, click Delete and confirm. The confirmation says deleting the request also deletes its requested item. Searching for the number again shows 0 results. The flow is unchanged by the exercises, so there is nothing to reactivate.

## Previous and next

Previous: [Episode 08: Your first flow](../08-first-flow)

Next: [Episode 10: Knowledge articles](../10-knowledge)
