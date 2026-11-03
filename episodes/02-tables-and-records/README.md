# Episode 02: Tables, records and fields

Paths: A D

In this episode you look behind Priya's incident to see what it is stored in: the Incident table, its fields, its parent table Task, the Caller reference, the labels and values of a choice field, and the dictionary entry of one field. You change nothing. It matters because a field that points to a user record can be counted and reported on, while a name typed as free text cannot. Arcwell's old spreadsheet had a "who" column typed four ways (Priya, P. Nair, priya n, Nair), so a report found 3 problems for Priya instead of 12.

New terms: table, field (column), record, extends (parent table), Task, reference field, choice label and value, dictionary entry, dictionary override.

## Before you start

- You finished [episode 01](../01-first-incident): Priya exists as a user and her Wi-Fi incident is saved.
- Sign in as `admin`.

## Steps

Nothing is changed in this episode. If you edit a value by mistake, close the form without saving.

1. Open the All menu and type `System Definition` in the filter. Choose Tables. On this instance the menu opens Tables with a condition already set, Update name is not empty, so the list shows 6,466 entries in the video (your count may differ). Click All in the breadcrumb to remove the condition: the list then shows 6,806 entries. Each row is a table, with its label, name and the table it extends. The video continues from the first view, the one the menu gives you.
2. Choose Name in the search box above the list and type `incident`. The list jumps to names that start there. Open the row Incident.
3. On the table definition, note Label `Incident`, Name `incident` and Extends table `Task`. Incident takes some of its fields from Task.
4. Open the Columns tab. It lists the fields Incident defines itself (92 in the video), each with a Type (Integer, String, Reference and so on) and a Reference column that names another table when the type is Reference.
5. Open the row Caller. Its type is Reference and its reference is User. The dictionary entry shows Table Incident, Type Reference, Column label Caller, Column name `caller_id` and Reference User. The label is what people see and the column name is what code uses.
6. Open the All menu again, type `Incident` and choose Incidents under Service Desk. Open Priya's incident.
7. Right-click the label Short description and choose Configure Dictionary. The table is Task, not Incident. The type is String and the maximum length is 160. Do not change anything: Short description is inherited from Task.
8. Back on the form, right-click the label State and choose Show Choice List. The list holds the choices of many tables, so type `incident` in the search box above the list, with Table chosen. The Incident choices are:

   | Label | Value |
   |---|---|
   | New | 1 |
   | In Progress | 2 |
   | On Hold | 3 |
   | Resolved | 6 |
   | Closed | 7 |
   | Canceled | 8 |

   People read the labels. Scripts and reports can use the values.
   To go back, press Command and the left bracket (`Cmd+[`), the browser's Back: the unfiltered Choices list returns. Press it once more and the incident form returns.
9. On the form, click the small information icon next to Caller. A preview card shows the user: User ID priya.nair, first and last name, title Design Engineer and email. A reference is a live link to another record, not a copy of its text.
10. Open the All menu, type `System Definition` and choose Tables again. Choose Name in the search box and type `task`. Task is the first row, and its Extends table is empty, so Task has no parent.
11. In the Extends table column, filter for `task`. The list shows the tables that extend Task (50 in the video; this step is being re-recorded, so the video and these steps may differ slightly), among them Change Request, Incident and Problem. One parent serves many kinds of record, which is why they share fields such as Short description.

Result: you have seen the Task parent, the Caller dictionary entry, the Caller preview card and the State choices.

## Your turn

1. Open the dictionary entry of Short description and note its Type and Max length.
2. Find 3 other tables that extend Task.
3. Open the preview card of the caller on your own incident.

## Clean up

Nothing was changed, so nothing needs restoring.

## Previous and next

Previous: [Episode 01: First incident](../01-first-incident)

Next: [Episode 03: Users, groups and roles](../03-users-groups-roles)
