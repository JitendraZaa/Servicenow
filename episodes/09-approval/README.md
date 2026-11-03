# Episode 09: Approvals

Paths: U A D

In this episode you make the laptop flow wait for Dana Lee's decision and act on both answers. Today every laptop order becomes a task, even when a manager would say no, so Sam prepares a laptop that nobody approved. An approval is a record that asks a person to decide about another record, and it keeps a trail of who decided and when.

New terms: approval, approver, role approver_user, Ask For Approval, If and Else If, My Approvals, Closed Incomplete.

## Before you start

- You finished [episode 08](../08-first-flow). The flow `Arcwell laptop order` is active and creates a task for each order.
- Sign in as `admin`.

## Steps

1. Create an update set: `Arcwell ep09`, Global, Submit and Make Current.
2. Give Dana permission to decide. Open Users, open Dana Lee, and on the Roles list click Edit. Search for `approver_user`, add it and click Save. The Roles list now shows approver_user.
3. Open Workflow Studio and the flow `Arcwell laptop order`. Add the action Ask For Approval below Get Catalog Variables, so the approval comes before the task.
4. Set the Record to the pill Requested Item from the trigger, the Table to Requested Item, and the Approver to Dana Lee.
5. Set the rules: Approve when Dana Lee approves, and Reject when Dana Lee rejects. With both rules set, the flow always gets an answer. Click Done.
6. Add flow logic If. Label it `Approved`. The condition is the pill Approval State from the Ask For Approval step, is Approved.
7. Under then, add the action Create Catalog Task with the same values as in episode 08: Requested Item is the trigger's item, Short description `Prepare replacement laptop`, Assignment group `Arcwell Service Desk`, and a Description made of `Reason: ` plus the reason pill and `Needed by: ` plus the needed_by pill. Delete the old Create Catalog Task below so the task is created once, and only after approval.
8. Add Else If. Label it `Rejected`. The condition is Approval State is Rejected. Inside it add the action Update Record: Record is the requested item from the trigger, Table is Requested Item, and set the field State to Closed Incomplete. A rejected order should not stay open.
9. Click Save, then Activate. The old version keeps running until the new one is active.
10. Impersonate Priya Nair. In the portal browse Hardware to Replacement laptop and order it: Laptop model Standard 14 inch, Reason End of life, Needed by 2026-11-16. Order Now, check the request is for Priya Nair, Checkout. The request is REQ0010003 in the video.
11. End the impersonation. Open Requested Items and open RITM0010003. Its Catalog Tasks list is empty, and Approvers shows Dana Lee with State Requested. The flow is waiting for her.
12. Email is off on this instance, so approvals are found in My Approvals. Impersonate Dana Lee, open My Approvals from the All menu, and open the line for RITM0010003 (state Requested). Click Approve. The line now shows Approved.
13. End the impersonation and open RITM0010003 again. The approval is Approved and the delivery plan shows the task Prepare replacement laptop.
14. Now the other answer. Impersonate Priya and order the same laptop with the same choices. Checkout. End the impersonation and impersonate Dana Lee. In My Approvals open the approval, type the comment `Not this quarter`, and click Reject.
15. End the impersonation and open the new requested item (RITM0010005 in the video). Its State is Closed Incomplete, and Activity shows that the System changed the state. No task was created. Its request, REQ0010005, shows Approval Approved and Request state Approved while its only item is Closed Incomplete. Read this as the instance shows it; do not draw a rule from it.

Result: the flow asks Dana, waits, and then either creates the task or closes the item.

## Your turn

1. Change the approver to a pill for the requester's manager, order once, then restore Dana Lee and delete that request.
2. Add a Log action in the Rejected branch with the message `PRACTICE rejected`, and test it.
3. Order a laptop and leave it unapproved, and look at its Approvers list.
4. Open the approval records list and find who decided and when.

## Clean up

Set the approver back to Dana Lee and remove any Log action, then activate the flow again. Reject any approval you left open. Delete or cancel every practice request and requested item by its number.

## Previous and next

Previous: [Episode 08: Your first flow](../08-first-flow)

Next: [Episode 10: Knowledge articles](../10-knowledge)
