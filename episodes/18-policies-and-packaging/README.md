<!-- draft until recorded: written from the storyline on 2 Nov 2026; menu names and values marked "confirm" are checked against the recording, then this note is removed -->
# Episode 18: UI policy, data policy, and what moves an app

Paths: A D

In this episode you make Returned date required when a loan is returned, first on the form and then in the data layer, and you look at what the application is made of and what carries it. A loan marked Returned with no return date does not say when the rig came back.

New terms: UI policy, data policy, update set (for an application), application repository, source control.

## Before you start

- You finished [episode 17](../17-roles-and-acls): both tables, twenty rigs, one active loan, roles and the permission matrix.
- Use your scope prefix in place of `x_arcwl_loans` if yours differs.

## Steps

1. In Studio choose Create application file, Forms and UI, UI Policy (confirm). Table Loan; Short description `Returned date required when returned`; Conditions State is Returned.
2. Save, then in UI Policy Actions add a new action: field Returned date, Mandatory true.
3. Check that Reverse if false is on, so Returned date is not forced when the state goes back to Active.
4. Open Equipment Loans, Loans and open the loan. Set State to Returned and leave Returned date empty. The field shows the mandatory star and the form will not save. Do not save: reload the form so the loan stays Active.
5. In Studio add a data policy (System Policy, Data Policies; confirm) on the Loan table with the same condition, and a rule making returned_date mandatory. This version belongs to the table, not the form.
6. Open the data policy options (names to confirm, such as applying to import sets and web services). Which entry paths a data policy covers is a setting.
7. Look at Studio's file list: tables, roles, ACLs, UI policy, data policy and menu. The application is exactly these files.
8. Open System Update Sets, Local Update Sets, find the set that holds the application's changes and read its Customer Updates tab.
9. Export the update set to XML and save it in this folder as `arcwell-ep18.xml` (added after the recording).

An update set carries the captured configuration changes, not table records. The application repository stores published versions that other instances install. Source control keeps the application's files in Git. The rigs and loans are records and travel separately. Read the ServiceNow documentation to choose among the three. This series stays on one developer instance and does not move the application.

Result: both policies exist and the Loan form requires Returned date when State is Returned.

## Your turn

1. Add a UI policy `PRACTICE due date required` making Due date mandatory and test it on a new loan form without saving. Then delete the policy.
2. Import a one-row Loan CSV with state `returned` and no returned date into its own staging table with its own transform map, and read the import history. Then delete the staging table, the map, the import set and any loan created.
3. Open `arcwell-ep18.xml` in VS Code and read which kinds of record it holds.

## Clean up

Delete every PRACTICE item. Keep the loan Active with no returned date.

## Previous and next

Previous: [Episode 17: Roles and ACLs](../17-roles-and-acls)

Next: [Episode 19: Where code runs](../19-where-code-runs), where you write your first server-side script.
