# Episode 04: Working in the agent workspace

Paths: U A

In this episode Sam Ortiz works Priya's incident in the workspace and resolves it, and you see who can read what he writes. An incident has two places to write: work notes for the team and comments for the caller. At Arcwell, Sam used to answer from the shared mailbox, where a note to a colleague looked just like the reply to Priya.

New terms: role, impersonation, Service Operations Workspace, work notes, comments, state, resolution code, resolution notes.

## Before you start

- You finished [episode 03](../03-users-groups-roles). Sam Ortiz is in Arcwell Service Desk, which has the itil role, and Priya's incident INC0010009 (your number may differ) is assigned to that group.
- Sign in as `admin`. You will impersonate Sam, which needs no password.

## Steps

1. Open the All menu, type `User Administration`, choose Users and search for Sam Ortiz. Open his record. The Roles tab shows 46 roles, all with Inherited true. The first is `agent_workspace_user`, which points to the agent workspace.
2. Open the menu under your avatar and choose Impersonate user. Pick Sam Ortiz and click Impersonate user.
3. ServiceNow opens Service Operations Workspace and says Hello Sam. The widget Incidents assigned to you has no data. Unassigned incidents shows 1, with priority 3 - Moderate.
4. Click the Unassigned incidents widget. The list shows Priya's incident: caller Priya Nair, state New, assignment group Arcwell Service Desk, Assigned to empty. Click the number to open it.
5. Click Assign to me. Assigned to shows Sam Ortiz, and the state moves to In Progress by itself. Activity lists both changes. The group owns the incident and one person works it.
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

Result: the incident is Resolved, with the resolution notes, and the work note and the comment sit side by side in Activity.

## Your turn

1. Impersonate Priya Nair, open her incident, and read what you can see there. Then end the impersonation.
2. Create an invented practice incident for Priya with Arcwell Service Desk as the assignment group. Impersonate Sam and resolve it with a different resolution code.
3. End the impersonation, open the practice incident again, and delete only it.

## Clean up

End any impersonation. Delete the practice incident by its number. Priya's Wi-Fi incident stays Resolved.

## Previous and next

Previous: [Episode 03: Users, groups and roles](../03-users-groups-roles)

Next: [Episode 05: Update sets](../05-update-sets)
