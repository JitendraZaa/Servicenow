<!-- draft until recorded: written from the storyline on 2 Nov 2026; menu names and values marked "confirm" are checked against the recording, then this note is removed -->
# Episode 17: Roles and ACLs, who may create, read and delete

Paths: A D

In this episode you decide who may lend a rig and who may delete one, test it as Priya, and read the rule that decided. Without rules anyone with a login could open the rig list and delete a row. Engineers need to borrow a rig; only the lab admin should change the rig list.

New terms: role, access control (ACL), operation, elevated privilege, Debug Security Rules, impersonation.

## Before you start

- You finished [episode 16](../16-import-rigs): twenty rigs, one active loan, roles `x_arcwl_loans.user` and `x_arcwl_loans.admin` from episode 14.
- Sign in as `admin`. Use your scope prefix in place of `x_arcwl_loans` if yours differs.

## Steps

1. In Studio open Roles and check that `x_arcwl_loans.admin` contains `x_arcwl_loans.user`.
2. From the user menu choose Elevate role and tick `security_admin` (confirm). ACLs can only be edited in an elevated session.
3. Open the All menu, System Security, Access Control (ACL). Filter the name to start with `x_arcwl_loans`.
4. Make the rules match the permission matrix below.
5. Open Priya Nair's user record, Roles tab, and add `x_arcwl_loans.user` directly to her (one grant, no group).
6. Switch on Debug Security Rules from the user menu (confirm).
7. Impersonate Priya. Open Equipment Loans, Loans, New and save a loan for ARC-RIG-018 with Priya as borrower.
8. As Priya, open Equipment Loans, Rigs, ARC-RIG-001. The form has no Delete option.
9. Open the debug panel and reload the form. It lists the rules checked. Find the delete rule for the Rig table and the role it requires.
10. End impersonation. As admin the same rig form offers Delete (do not click it). Delete the practice loan by its LOAN number. Switch the debugger off and drop the elevation.

## Permission matrix

| Table | read | create | write | delete |
|---|---|---|---|---|
| Rig (`x_arcwl_loans_rig`) and its fields | user | admin | admin | admin |
| Loan (`x_arcwl_loans_loan`) and its fields | user | user | user | admin |

`x_arcwl_loans.admin` contains `x_arcwl_loans.user`. Rule names from the instance are added after the recording.

Result: Priya saved a loan, her rig form has no Delete, the debug panel names the rule and its role.

## Your turn

1. Create a user `PRACTICE visitor` with no role, impersonate, and say what the Loan list shows. Then delete that user.
2. Add a field rule so only `x_arcwl_loans.admin` may write the Rig field state, test it as Priya with Debug Security Rules, then delete the rule.
3. Give Sam Ortiz the user role directly on his user record, open the debug panel as Sam and read why a create passes. Then remove exactly that grant. The group Arcwell Lab Team stays unchanged.

## Clean up

Delete the practice loan (by LOAN number), the practice user and any practice rule. Priya keeps `x_arcwl_loans.user`. Debug off, elevation dropped.

## Previous and next

Previous: [Episode 16: Import 20 rigs from a spreadsheet](../16-import-rigs)

Next: [Episode 18: UI policy, data policy, and what moves an app](../18-policies-and-packaging).
