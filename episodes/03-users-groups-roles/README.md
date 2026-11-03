# Episode 03: Users, groups and roles

Paths: A D

In this episode you create the rest of Arcwell's people, put them in groups, give one group a role, and assign Priya's incident to that group. It matters because a group can own work and a person in it takes it, and giving a role to a group is easier than giving it to each person one at a time. With the old shared mailbox every message reached everyone and people assumed someone else would answer.

New terms: user, manager, group, role, itil, inherited role, form layout, record history.

## Before you start

- You finished [episode 02](../02-tables-and-records). Priya Nair exists and her incident INC0010009 (yours may have another number) is saved with the caller Priya.
- Sign in as `admin`.

## Steps

1. Open the All menu, type `User Administration` in the filter and choose Users. Click New.
2. The new-user form has no Manager field. Open the form header menu, choose Configure, then Form Layout. If ServiceNow offers Form Builder, choose Not now. Move Manager from Available fields to Selected fields with the arrow and click Save.
3. Create Dana Lee, the IT manager:

   | Field | Value |
   |---|---|
   | User ID | dana.lee |
   | First name | Dana |
   | Last name | Lee |
   | Title | IT Manager |
   | Email | dana.lee@example.com |

   Do not set a password. Click Submit.
4. Click New and create Sam Ortiz:

   | Field | Value |
   |---|---|
   | User ID | sam.ortiz |
   | First name | Sam |
   | Last name | Ortiz |
   | Title | Service Desk Agent |
   | Email | sam.ortiz@example.com |
   | Manager | Dana Lee (type Dana and choose the match) |

   Click Submit.
5. Search the Users list for Priya Nair and open her record. Set Manager to Dana Lee and click Update.
6. Under User Administration, open Groups and click New. Name `Arcwell Service Desk`, Manager Dana Lee. Click Submit, then open the group.
7. On the Group Members tab click Edit. Search for Sam Ortiz, add him with the arrow and click Save. A message says a job has been queued and the list stays empty for a moment because a background job makes the change. Soon the tab shows Group Members (1).
8. On the Roles tab click Edit. Filter for `itil`, move it to the right list and click Save. The same queued message appears. Then the tab shows one role, itil, with Inherits true: members of the group get the role through the group, so anyone you add later gets itil at once.
9. Open Groups again and click New. Name `Arcwell Lab Team`, Manager Dana Lee. Click Submit and open the group. Its Roles tab is empty because this group has no roles. On Group Members click Edit, add Sam Ortiz and Dana Lee, and click Save. Later episodes use this group.
10. Go to Users, find Sam Ortiz and open his record. The Roles list is long, so filter it for `itil`. It is there with Inherited true: Sam has the role through Arcwell Service Desk, not because it was given to him directly.
11. Open the All menu, type `Incident` and choose Open. Open Priya's laptop incident. Assignment group is empty. Type `Arcwell` and choose Arcwell Service Desk from the two matches. Save the form from its header menu.
12. The Activity area still shows only the first entry. Open the form header menu, choose History, then List. The Assignment group row shows the new value, Arcwell Service Desk, and who changed it.

Result: Dana manages Priya and Sam. Arcwell Service Desk has Sam and the itil role. Arcwell Lab Team has Sam and Dana. Priya's incident belongs to Arcwell Service Desk.

## Your turn

1. Create an invented practice user such as `practice.ravi` and add him to Arcwell Service Desk. Check his Roles list for itil. Then remove him from the group and delete the user.
2. Open Arcwell Lab Team, look at its Roles list, and write down why Sam still has itil.
3. Remove Sam from Arcwell Service Desk and check his Roles list again. Then add him back and check that itil returns.
4. Change the assignment group of a practice incident and find the change in its history list.

## Clean up

- Exercise 1: remove `practice.ravi` from the group, then delete the user.
- Exercise 3: make sure Sam is back in Arcwell Service Desk.
- Exercise 4: delete the practice incident by its number.

Keep Dana, Sam, both groups and the assignment of Priya's incident. The next episodes use them.

## Previous and next

Previous: [Episode 02: Tables and records](../02-tables-and-records)

Next: [Episode 04: Working in the agent workspace](../04-agent-workspace)
