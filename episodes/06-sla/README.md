# Episode 06: Service level agreements

Paths: A D

In this episode you promise a time to fix the most urgent problems and watch ServiceNow count it. Dana Lee, the IT manager at Arcwell, was told that urgent things get fixed fast, but nobody defined fast. When a critical fault in the test lab waited 2 days, a design deadline slipped. A service level agreement (SLA) is the stated promise, and ServiceNow measures it on each record, so nobody has to remember it. You build an SLA definition for Priority 1 incidents, then try it on a new incident and watch the clock start, pause, resume and stop.

New terms: SLA definition, task SLA, start condition, pause condition, stop condition, breach, schedule, stage.

## Before you start

- You finished [episode 05](../05-update-sets). Arcwell Service Desk exists and Priya Nair is a user.
- Sign in as `admin`.

## Steps

1. Open the All menu, type `Update Sets` and choose Local Update Sets. An SLA definition is configuration, so an update set should capture it. An update set is close to a Salesforce change set, which carries customizations from one org to another. Click New, name it `Arcwell ep06`, and click Submit and Make Current. ServiceNow confirms the current update set.
2. Open the All menu, type `Service Level Management` and choose SLA Definitions under SLA. The list already holds ready-made definitions, such as Priority 1 resolution, 1 hour. Click New.
3. Fill in the definition:

   | Field | Value |
   |---|---|
   | Name | Arcwell P1 resolution |
   | Type | SLA |
   | Target | Resolution |
   | Table | Incident |
   | Duration | 0 days, 4 hours |
   | Schedule source | No schedule |

   Leave the flow as it is. The Type offers SLA, OLA and Underpinning contract (keep SLA), and the Target offers None, Response and Resolution. The banner shows when an SLA started now would breach, and with No schedule it says the SLA runs 24x7 (around the clock).
4. Click the Start condition tab. On this form each condition is built from 3 boxes: a field, an operator and a value. In the first box open the list of fields, type `Priority` to find it and choose it. The operator is already `is`. For the value open the list and choose `1 - Critical`. Only the most urgent incidents get a clock. Then click AND to add a second row, joined to the first: Incident state, is not one of, and select Resolved, Closed and Canceled (click Resolved, then hold Shift and press the down arrow twice). AND means both rows must match, so a finished incident never starts a clock. The definition saved in the video has this second row, so add it.
5. Click the Pause condition tab. Choose the field Incident state (type it to find it), the operator `is`, and the value On Hold, because waiting for the caller should not count against the team. Below it, open When to resume: the list offers `Pause conditions are not met` and `Resume conditions are met`. Choose `Pause conditions are not met`, and you will watch the clock follow the incident on its own record. (Leaving the default, `Resume conditions are met`, left the clock paused in the rehearsal; for a practice definition that never pauses the default is fine.)
6. Click the Stop condition tab. Choose the field Incident state, open the list of operators and choose `is one of`. The value box becomes a list: click Resolved, then hold Shift and press the down arrow to add Closed. Click Submit. The definition appears at the top of the list.
7. Open the All menu, type `Incident` and choose Create New. Fill in:

   | Field | Value |
   |---|---|
   | Caller | Priya Nair |
   | Short description | Lab printer offline |
   | Impact | 1 - High |
   | Urgency | 1 - High |
   | Assignment group | Arcwell Service Desk |

   Priority becomes 1 - Critical. Click Submit. The video's incident is INC0010010; yours may differ.
8. Open the incident and scroll to the Task SLAs list. A task SLA is the record of an SLA attached to 1 task, so it works as that incident's clock; its row is named after its definition. The video shows 3 rows: 2 from ready-made definitions and `Arcwell P1 resolution`. It can take a moment to appear.
9. Open the Arcwell P1 resolution row. Stage is In progress and Has breached is not ticked. Start time is when the clock began, and the breach time is 4 hours later.
10. Go back to the incident and set State to On Hold. A field On hold reason appears; choose Awaiting Caller. In this instance an On Hold incident needs a comment the caller can see, so type a comment to Priya asking her to confirm that the printer is switched on and connected, then click Update.
11. Open the incident again. The Task SLAs row shows Stage Paused.
12. Set State to In Progress and save from the form menu. The Task SLAs list refreshes and the stage is In progress again. The clock continues from where it stopped.
13. Open the Resolution Information tab. Set Resolution code to Solution provided and write resolution notes that say the printer was restarted and the queue cleared. Click Resolve.
14. Open the incident again. The Task SLAs row now shows Stage Completed with a stop time, so the stop condition worked.

Result: the definition holds the rule, the task SLA is the clock, and the three conditions decided when it ran.

## Your turn

1. Create a definition named `PRACTICE P2 resolution` with the start condition Priority is 2 - High, a duration of 8 hours, schedule source No schedule, and a second start row, Incident state is not one of Resolved, Closed and Canceled, joined with AND. Pause: Incident state is On Hold (When to resume may stay on its default, `Resume conditions are met`, because the practice incident is never paused); Stop: Incident state is one of Resolved and Closed. The list then shows 15 definitions and yours reads 8 Hours.
2. Create a practice incident whose Priority shows 2 - High: caller Priya Nair, Short description `PRACTICE printer slow`, **Impact 1 - High with Urgency 2 - Medium** gives Priority 2 - High (Impact 1 - High with Urgency 3 - Low gives 3 - Moderate). Write down its number (the video's was INC0010016), submit it, search it by number and open it. In its Task SLAs list two rows attach: the ready-made `Priority 2 resolution (8 hour)` and yours. Click the small information icon beside the `PRACTICE P2 resolution` row to open its preview: the breach time is exactly 8 hours after the start time.
3. Open the SLA Definitions list and look at the ready-made ones. Change nothing.

## Clean up

Open the practice incident by its number and click Delete, then confirm: ServiceNow warns that its 2 Task SLAs are deleted with it. Open All, type `SLA`, choose SLA Definitions under SLA, open `PRACTICE P2 resolution`, untick Active and click Update at the top of the form, so it stays in the list but is inactive (or use Delete on its form). Check that `Arcwell P1 resolution` is unchanged, then open All, Incident, All, search the Number `INC0010010` (your own number may differ): `Lab printer offline`, caller Priya Nair, State Resolved, is unchanged.

## Previous and next

Previous: [Episode 05: Update sets](../05-update-sets)

Next: [Episode 07: A catalog item](../07-catalog-item)
