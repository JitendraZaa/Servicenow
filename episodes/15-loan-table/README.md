<!-- draft until recorded: written from the storyline on 2 Nov 2026; menu names and values marked "confirm" are checked against the recording, then this note is removed -->
# Episode 15: The Loan table, a reference to Rig and a form people can use

Paths: A D

In this episode you add the Loan table, which points at a rig and a borrower, tidy its form and list, and enter the first loan. A rig has a state, but nothing says who has it. A loan is its own thing: a rig, a person, a start date, a due date and a return date. Choosing the rig from a list avoids spelling differences.

New terms: reference field, display value, form layout, list layout, default value, dot-walking.

## Before you start

- You finished [episode 14](../14-scoped-app): the Equipment Loans application, the Rig table and ARC-RIG-001 exist.
- Priya Nair exists from [episode 01](../01-first-incident).
- Use your scope prefix in place of `x_arcwl_loans` if yours differs.

## Steps

1. In Studio open Equipment Loans, then Create application file, Data model, Table. Label `Loan`; Name `x_arcwl_loans_loan`. Add an auto-numbered Number column with prefix `LOAN` (confirm).
2. Add the columns:

   | Column | Type | Notes |
   |---|---|---|
   | rig | Reference to Rig | Mandatory |
   | borrower | Reference to User [sys_user] | Mandatory |
   | start_date | Date | |
   | due_date | Date | |
   | returned_date | Date | |
   | state | Choice | Active `active`, Returned `returned`; default `active` |
   | reminder_sent | True/false | default false; used in a later episode |

3. Click Create. Make sure the menu Equipment Loans has the module Loans.
4. Open Equipment Loans, Loans, New. The fields show in the order they were added. From the form's header menu choose Configure, Form Layout (if ServiceNow offers Form Builder, choose Not now). Order the fields: Number, Rig, Borrower, Start date, Due date, Returned date, State, Reminder sent. Save.
5. On the Loans list open the header menu, Configure, List Layout. Choose Number, Rig, Borrower, Due date, State. Save.
6. Dot-walking reaches a field of the linked record. In List Layout expand Rig and add Location. The list can now show the rig's location.
7. Click New and create the first loan: Rig ARC-RIG-001; Borrower Priya Nair; Start date today; Due date 60 days from today (so it never turns overdue during the series); State Active. Click Submit.
8. Open Equipment Loans, Rigs, ARC-RIG-001, set State to On loan and save. No rule does this yet; a later episode automates it.

Result: one loan row for ARC-RIG-001 and Priya, Active, and the rig list shows ARC-RIG-001 On loan.

## Your turn

1. Add Rig > Name as a second dot-walked column in the Loan list, then remove it.
2. Move Reminder sent above State on the form, check it, then move it back.
3. After [episode 16](../16-import-rigs) loads ARC-RIG-018: create a practice loan for ARC-RIG-018 to Sam Ortiz, read the number it gets, then delete that loan by its number.

## Clean up

Keep the layouts as built and only the first loan. Delete any practice loan by its number. ARC-RIG-018 stays Available.

## Previous and next

Previous: [Episode 14: A scoped app](../14-scoped-app)

Next: [Episode 16: Import 20 rigs from a spreadsheet](../16-import-rigs), where you load the lab's whole rig list at once.
