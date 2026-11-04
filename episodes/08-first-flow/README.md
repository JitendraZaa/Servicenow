# Episode 08: Your first flow

Paths: A D

In this episode you build a flow so that every laptop order creates a task for the service desk without anyone doing it by hand. On a busy Monday at Arcwell, 3 laptop orders arrive. Each is a requested item and Sam has to notice it and make a task for it by hand. Last Monday, 3 orders were never picked up. If you know Salesforce, building a flow here plays the role Flow Builder plays there: no-code automation that can start from a record trigger. A flow is a list of steps that ServiceNow runs by itself, the moment the order arrives.

New terms: flow, Workflow Studio, trigger, action, data pill, Get Catalog Variables, Create Catalog Task, catalog task (SCTASK), activate.

## Before you start

- You finished [episode 07](../07-catalog-item). The Replacement laptop item exists, and Arcwell Service Desk exists.
- Sign in as `admin`.
- Priya's first order (REQ0010001) was placed before this flow existed; later orders are the ones to watch.

## Steps

1. Create an update set (like a Salesforce change set: both carry configuration, not records, from one place to another): All menu, `System Update Sets`, Local Update Sets, New. Name `Arcwell ep08`, add a short description, leave Application as Global, and click Submit and Make Current.
2. Open the All menu, type `Workflow Studio` and open it (under Process Automation). It opens in a tab of its own. Its home page has the tabs Playbooks, Flows, Subflows, Triggers, Actions and Decision tables.
3. Click New and choose Flow. Fill in the dialog: Flow name `Arcwell laptop order`, Application Global, Description `Create a catalog task for each Replacement laptop order.` Click Build flow.
4. Click Add a trigger. The list offers Record, Scheduled and Application. Choose Application, then Service Catalog, and click Done. The data panel now lists the trigger's pill Requested Item Record.
5. Under Actions click the plus and add the action Get Catalog Variables. For Submitted Request, drag in the pill Requested Item Record from the trigger. For the template catalog item choose Replacement laptop. Its variables `laptop_model`, `needed_by` and `reason` are listed; move them one at a time to Selected with the arrow (in the video: `needed_by`, then `laptop_model`, then `reason`). Click Done.
6. Add the action Create Catalog Task. For Requested Item use the same pill, Requested Item Record, because the task belongs to the item that started the flow.
7. Fill in the task:

   | Field | Value |
   |---|---|
   | Short description | Prepare replacement laptop |
   | Assignment group | Arcwell Service Desk |
   | Description | `Reason: ` followed by the reason pill, then `Needed by: ` followed by the needed_by pill |

8. Wait is a true or false input of Create Catalog Task and it is already ticked (true). When it is true, the flow pauses until the task record is no longer active, so it waits until someone closes the task. Leave it and click Done.
9. Click Activate and confirm. The button now says Deactivate, which means the flow is on.
10. Tell the item which flow to use. Open the All menu, then Service Catalog, Catalog Definitions, Maintain Items, and open Replacement laptop. On the Process Engine tab choose `Arcwell laptop order` in the Flow field and click Update.
11. Impersonate Priya Nair. From her home page open the All menu, type `Service Catalog` in the filter and choose Service Catalog under Self-Service. On the Service Catalog home page click Hardware, then click Replacement laptop (it is in the Hardware list; no Show More is needed on this view). Choose Laptop model Standard 14 inch, Reason End of life, Needed by 2026-11-16. Click Order Now, check that the request is for Priya Nair, and click Checkout. The request is REQ0010002 in the video.
12. End the impersonation and go back to Workflow Studio. Open the Operations tab and Today's executions. The newest run is Arcwell laptop order with state Waiting. Open it. The trigger is Catalog Item Requested, Get Catalog Variables has run, and Create Catalog Task shows Waiting because Wait is on: the flow pauses until the task is no longer active. A yellow banner says runtime details are not recorded on this instance; the created task (next step) is the proof.
13. In the instance, filter for Requested Items and open the newest, RITM0010002. Its delivery plan shows the task Prepare replacement laptop. Open the catalog task list (All menu, type `Tasks`, then Service Catalog > Open Records > Tasks): the new task, SCTASK0010003 in the video, is assigned to Arcwell Service Desk. Its description reads `Reason: end_of_life Needed by: 2026-11-16`, filled in by the pills.

Result: the flow has a trigger and two actions, and each laptop order now creates a task for the service desk.

## Your turn

1. Open the flow, change the Short description of Create Catalog Task (for example to `Prepare and check replacement laptop`) and activate the changed flow. Order a laptop as Priya, write down the record numbers, and open the new task: its Short description is the new text.
2. Deactivate the flow, order once more, write down that order's numbers too, and look at the requested item: it has no task.
3. Change the Short description back to `Prepare replacement laptop`, activate the flow again, and delete or cancel only your numbered test tasks, requested items and requests.

## Clean up

Check that the Short description is `Prepare replacement laptop` again and that the flow status is Active. Delete or cancel every test task, requested item and request from your own exercise orders, by the numbers you wrote down. Keep REQ0010002, RITM0010002 and SCTASK0010003: they are the episode's reference records and later episodes order new laptops. End any impersonation before you change or clean up anything.

The task route used in the video: on the requested item the delivery plan row is not a link, so open the All menu, type `Tasks`, and under Service Catalog and Open Records choose Tasks (Catalog Tasks). Read the Assignment group on that list.

## Previous and next

Previous: [Episode 07: A catalog item](../07-catalog-item)

Next: [Episode 09: Approvals](../09-approval)
