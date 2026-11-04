<!-- draft until recorded: written from the storyline on 2 Nov 2026; menu names and values marked "confirm" are checked against the recording, then this note is removed -->
# Episode 14: A scoped app, Equipment Loans and the Rig table

Paths: A D

In this episode you start the test lab's own application, Equipment Loans, and build the table that lists its rigs. The lab lends oscilloscopes and thermal chambers on sticky notes, so nobody knows who has which rig. An application keeps this work in one named box, apart from everything else on the instance. This is the first episode of Season 2.

New terms: application, scope (Global versus scoped), ServiceNow Studio, table, field type, choice label and value, display field, application menu and module.

## Before you start

- You finished [episode 13](../13-cmdb-basics). Season 1 built everything in Global, the shared area of the instance; this episode is the first one in a scoped application.
- Sign in as `admin` on your own developer instance.
- Scope prefix: the video uses `x_arcwl_loans`. Your instance may give another prefix (shown beside the name when you create the application). If it does, replace `x_arcwl_loans` with yours in every table, role and script name from here on.

## Steps

1. Open the All menu, filter for `Studio` and open ServiceNow Studio (confirm). Studio is the one place for building an application.
2. Click Create application (confirm). Name `Equipment Loans`; Scope `x_arcwl_loans`. The scope is a prefix on every name the application owns. Click Create. The file tree is empty because nothing exists yet.
3. Create application file, then Data model, then Table (confirm). Label `Rig`; Name `x_arcwl_loans_rig`; extends nothing, because a rig is not a task. Leave the options that create access controls and a menu entry ticked.
4. Add the columns:

   | Column | Type | Notes |
   |---|---|---|
   | asset_tag | String | Mandatory, Unique, Display |
   | name | String | |
   | type | Choice | choices below |
   | location | String | |
   | state | Choice | default `available` |

   The display field names a rig wherever it appears as a link.
5. State choices (label, value): Available `available`; On loan `on_loan`; In repair `in_repair`. Later steps match the stored value, not the label.
6. Type choices: Oscilloscope `oscilloscope`; Thermal chamber `thermal_chamber`; Test laptop `test_laptop`; Power supply `power_supply`; Signal generator `signal_generator`.
7. Click Create. The table appears in the file tree. Open the generated Roles: `x_arcwl_loans.user` and `x_arcwl_loans.admin` (confirm). Episode 17 sets the access rules.
8. Check the application menu Equipment Loans with the module Rigs (confirm).
9. Open the All menu, Equipment Loans, Rigs. The list is empty. Click New.
10. Fill the first rig:

   | Field | Value |
   |---|---|
   | Asset tag | ARC-RIG-001 |
   | Name | Oscilloscope 1 |
   | Type | Oscilloscope |
   | Location | Lab A |
   | State | Available |

   Click Submit. The list shows one row.

Result: Studio's file tree lists the Rig table, and Equipment Loans, Rigs shows ARC-RIG-001.

## Your turn

1. Add a rig `PRACTICE rig` with asset tag `PRACTICE-001` and type Signal generator. Then delete it.
2. Add a field Calibration due (Date) to the table and place it on the form. Then delete the field and take it off the form.
3. In Studio open the table's columns and say which ones ServiceNow added itself.

## Clean up

Delete `PRACTICE rig` and the Calibration due field. Keep ARC-RIG-001 only.

## Previous and next

Previous: [Episode 13: CMDB basics](../13-cmdb-basics)

Next: [Episode 15: The Loan table](../15-loan-table), where you add the table that points at a rig and a borrower.
