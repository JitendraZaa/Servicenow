# Episode 04: Working in the agent workspace

Paths: U A

In this episode Sam Ortiz works Priya's incident in the workspace and resolves it, and you see what Priya sees of it. An incident has two places to write: work notes (the steps taken) and comments (seen by everyone who can open the incident). At Arcwell, Sam used to answer from the shared mailbox, where a note to a colleague looked just like the reply to Priya.

New terms: role, impersonation, Service Operations Workspace, work notes, comments, state, resolution code, resolution notes.

## Before you start

- You finished [episode 03](../03-users-groups-roles). Sam Ortiz is in Arcwell Service Desk, which has the itil role, and Priya's incident INC0010009 (your number may differ) is assigned to that group.
- Sign in as `admin`. You will impersonate Sam, which needs no password.

## Steps

1. In the last episode Sam got access through Arcwell Service Desk. Open the All menu, type `User Administration`, choose Users and search for Sam Ortiz. Open his record, which you only need to find him.
2. Open the menu under your avatar and choose Impersonate user (impersonation means acting as another user). Pick Sam Ortiz and click Impersonate user.
3. ServiceNow opens Service Operations Workspace and says Hello Sam. The widget Incidents assigned to you has no data. Unassigned incidents shows 1, with priority 3 - Moderate.
4. Click the Unassigned incidents widget. The list shows Priya's incident: caller Priya Nair, state New, assignment group Arcwell Service Desk, Assigned to empty. Click the number to open it.
5. Click Assign to me. Assigned to shows Sam Ortiz, and the state now shows In Progress. Activity lists both changes with their time and user. The group will work the incident, a bit like a Salesforce queue, and Assigned to names the user who works on it.
6. In the Compose area, open the Work notes tab. The text under the box says only internal users can see work notes. Type:

   `Checked the access point in the design studio. Other devices connect, so the laptop's Wi-Fi profile is the next thing to check.`

   Click the send icon. The note appears in Activity with a lock.
7. Open the Comments tab. The text under the box says everyone can see this comment. Type:

   `Hello Priya, we are checking your laptop's Wi-Fi profile. Please keep the laptop switched on.`

   Send it. It appears in Activity next to the work note.
8. Click Resolve. The dialog needs a Resolution code and Resolution notes. The codes are Duplicate, Known error, No resolution provided, Resolved by caller, Resolved by change, Resolved by problem, Resolved by request and Solution provided. Choose Solution provided and type:

   `Removed and re-added the Arcwell Wi-Fi profile`

   Click Resolve. The state is now Resolved, the button becomes Reopen, and Activity lists the state change, the code and the notes.
9. In the avatar menu choose End impersonation to go back to your own view.

10. What Priya sees. Open the avatar menu, choose Impersonate user, type `Priya`, pick Priya Nair and click Impersonate user. She lands on the platform home page. Open the All menu, type `Incident`, and under Self-Service click Incidents. The list shows her 4 incidents. Open INC0010009. The form is in the Self Service view: Caller Priya Nair, State Resolved. Activities shows Sam's comment (`Hello Priya, we are checking your laptop's Wi-Fi profile. Please keep the laptop switched on.`) and no work note. End the impersonation from the avatar menu.
11. Clean up a practice incident (this is exercise 3, shown on a practice incident `PRACTICE printer jam` made as in exercise 2, here INC0010015; yours has a different number). As admin open the All menu, type `Incident` and under Incident click All. In the Number search type the number and press Return: the list shows only that incident, state Resolved. Open it and click Delete. The confirmation says deleting also deletes related records, here 2 Task SLAs. Click the red Delete. The list says No records to display. Search the Number `INC0010009`: it is still there, still Resolved, with the resolution notes `Removed and re-added the Arcwell Wi-Fi profile`.

Result: the incident is Resolved, with the resolution notes; the work note and the comment sit side by side in Activity for the team, and Priya sees the comment and no work note.

## Your turn

1. Impersonate Priya Nair, open her incident INC0010009 (All, Incident, under Self-Service click Incidents), and read what you can see there. Then end the impersonation.
2. As admin, create an incident with the Short description `PRACTICE printer jam` for Priya, with Arcwell Service Desk as the assignment group, and write down its INC number. Then impersonate Sam, open it (All, Incident, Open - Unassigned, or search the number), and resolve it with the Resolution code `Resolved by caller` and any Resolution notes, for example `Practice ticket, closed by the caller.`
3. End the impersonation. As admin open All, Incident, All, search that INC number, open the incident and delete only it. Check that INC0010009 is unchanged: still Resolved, with its resolution notes.

## Clean up

End any impersonation. Delete the practice incident by its number (a resolved incident can be deleted; the confirmation lists 2 Task SLAs). Priya's Wi-Fi incident INC0010009 stays Resolved. The numbers of deleted incidents are not reused, so your next incident will have a higher number.

## Previous and next

Previous: [Episode 03: Users, groups and roles](../03-users-groups-roles)

Next: [Episode 05: Update sets](../05-update-sets)
