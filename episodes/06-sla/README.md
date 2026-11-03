# Episode 06: Service level agreements

Paths: A D

In this episode you promise a time to fix the most urgent problems and watch ServiceNow count it. Dana Lee, the IT manager at Arcwell, was told that urgent things get fixed fast, but nobody defined fast. When a critical fault in the test lab waited 2 days, a design deadline slipped. A service level agreement (SLA) is the stated promise, and ServiceNow measures it on each record, so nobody has to remember it. You build an SLA definition for Priority 1 incidents, then try it on a new incident and watch the clock start, pause, resume and stop.

New terms: SLA definition, task SLA, start condition, pause condition, stop condition, breach, schedule, stage.

## Before you start

- You finished [episode 05](../05-update-sets). Arcwell Service Desk exists and Priya Nair is a user.
- Sign in as `admin`.

## Steps

1. Open the All menu, type `Update Sets` and choose Local Update Sets. An SLA definition is configuration, so an update set should capture it. Click New, name it `Arcwell ep06`, and click Submit and Make Current. ServiceNow confirms the current update set.
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

   Leave the flow as it is. The banner shows when an SLA started now would breach, and with No schedule it says the clock runs 24x7 (around the clock).
4. Start condition: Priority is 1 - Critical, and Incident state is not one of Resolved, Closed, Canceled. Only open Priority 1 incidents get a clock.
5. Pause condition: Incident state is On Hold. Waiting for the caller should not count against the team. On the Pause tab, set When to resume to `Pause conditions are not met`, so the clock resumes when the incident leaves On Hold.
6. Stop condition: Incident state is one of Resolved and Closed. Click Submit. The definition appears at the top of the list.
7. Open the All menu, type `Incident` and choose Create New. Fill in:

   | Field | Value |
   |---|---|
   | Caller | Priya Nair |
   | Short description | Lab printer offline |
   | Impact | 1 - High |
   | Urgency | 1 - High |
   | Assignment group | Arcwell Service Desk |

   Priority becomes 1 - Critical. Click Submit. The video's incident is INC0010010; yours may differ.
8. Open the incident and scroll to the Task SLAs list. A task SLA is the clock for one record, made from a definition. The video shows 3 rows: 2 from ready-made definitions and `Arcwell P1 resolution`. It can take a moment to appear.
9. Open the Arcwell P1 resolution row. Stage is In progress and Has breached is not ticked. Start time is when the clock began, and the breach time is 4 hours later.
10. Go back to the incident and set State to On Hold. A field On hold reason appears; choose Awaiting Caller. In this instance an On Hold incident needs a comment the caller can see, so type a comment to Priya asking her to confirm that the printer is switched on and connected, then click Update.
11. Open the incident again. The Task SLAs row shows Stage Paused.
12. Set State to In Progress and save from the form menu. The Task SLAs list refreshes and the stage is In progress again. The clock continues from where it stopped.
13. Open the Resolution Information tab. Set Resolution code to Solution provided and write resolution notes that say the printer was restarted and the queue cleared. Click Resolve.
14. Open the incident again. The Task SLAs row now shows Stage Completed with a stop time, so the stop condition worked.

Result: the definition holds the rule, the task SLA is the clock, and the three conditions decided when it ran.

## Your turn

1. Create a definition named `PRACTICE P2 resolution` for Priority 2 with 8 hours. Create a practice incident at Priority 2, note its number, and see which definitions attached.
2. Open the SLA Definitions list and look at the ready-made ones. Change nothing.
3. Give the practice definition a duration of 1 minute, create another practice incident, wait, and watch Has breached change.

## Clean up

Delete your practice incidents by their numbers (their task SLAs go with them). Set `PRACTICE P2 resolution` to inactive or delete it. Keep `Arcwell P1 resolution` and the Lab printer offline incident.

## Previous and next

Previous: [Episode 05: Update sets](../05-update-sets)

Next: [Episode 07: A catalog item](../07-catalog-item)
