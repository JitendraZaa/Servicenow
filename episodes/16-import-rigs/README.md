<!-- draft until recorded: written from the storyline on 2 Nov 2026; menu names and values marked "confirm" are checked against the recording, then this note is removed -->
# Episode 16: Import 20 rigs from a spreadsheet with an import set

Paths: A

In this episode you load twenty rigs from a CSV file with an import set and a transform map, then load the file again to show that it does not create copies. Typing twenty rigs by hand takes an hour and adds mistakes, and the spreadsheet changes later.

New terms: data source, import set, staging table, transform map, field map, coalesce.

## Files in this folder

- [rigs.csv](rigs.csv): twenty invented rigs (ARC-RIG-001 on loan, ARC-RIG-019 in repair, the rest available). The type and state columns hold stored values.
- [rigs-reload.csv](rigs-reload.csv): the same rows with ARC-RIG-004 moved to Lab C.

## Before you start

- You finished [episode 15](../15-loan-table): ARC-RIG-001 exists and is On loan.
- Sign in as `admin`. Use your scope prefix in place of `x_arcwl_loans` if yours differs.

## Steps

1. Open `rigs.csv` in VS Code and read the header: asset_tag, name, type, state, location. Look at the data before loading it.
2. Open the All menu, System Import Sets, Load Data (confirm). The wizard creates a staging table, the plain holding table where rows land first.
3. Import set table: Create table, label `Rig import`. Source: File. Format: CSV. Choose `rigs.csv` and click Submit. The twenty rows are loaded, but not in Rig yet.
4. Create a transform map named `Rig import to Rig` with target table Rig (`x_arcwl_loans_rig`).
5. In Field Maps click Auto Map Matching Fields (confirm). Open each of the five maps and read source and target.
6. Open the asset_tag map and tick Coalesce. The tag never repeats, so it is the rule for "same record".
7. Open the type and state maps and read the choice setting; do not change it.
8. Run the transform. The history shows the counts. The video expects 19 inserted and 1 updated because ARC-RIG-001 already exists; read your own counts.
9. Open Equipment Loans, Rigs: twenty rows. ARC-RIG-001 is still On loan.
10. Open `rigs-reload.csv` and find ARC-RIG-004 in Lab C. Load it into Rig import with Load Data and run the same transform. Nothing new is inserted; the rows are updated. The Rigs list still holds twenty rows and ARC-RIG-004 shows Lab C.

Result: exactly twenty rigs, and a second run creates no copies.

## Your turn

1. Copy the transform map as `PRACTICE map` without coalesce and load `rigs.csv`. Asset tag is unique, so rows for existing tags are not accepted; read the history. Then delete `PRACTICE map` and check there are still twenty rigs with ARC-RIG-004 in Lab C. Do not load `rigs.csv` again.
2. Add a row ARC-RIG-021 `PRACTICE rig` to a copy of `rigs-reload.csv` and load it with the real map. Then delete ARC-RIG-021 and load `rigs-reload.csv` once more.
3. Open the staging table and compare a row with the rig it made.

## Clean up

Keep twenty rigs, ARC-RIG-004 in Lab C and the loan unchanged. Import history rows stay.

## Previous and next

Previous: [Episode 15: The Loan table](../15-loan-table)

Next: [Episode 17: Roles and ACLs](../17-roles-and-acls).
