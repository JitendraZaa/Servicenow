# Episode 13: CMDB basics

Paths: A D

In this episode you record Priya's laptop and the Wi-Fi controller as configuration items, connect them, and link Priya's incident to the laptop. An incident says that the Wi-Fi is down, but not on which laptop, and IT does not know which controller that laptop connects to because nothing records the connection. The CMDB keeps the things IT looks after and how they connect. This is the last episode of Season 1.

New terms: configuration item (CI), CMDB, class, relationship, Relationship Editor, dependency view, Affected CIs.

## Before you start

- You finished [episode 12](../12-reports-dashboards). Priya's Wi-Fi incident is saved, and Priya Nair exists.
- Sign in as `admin`.

## Steps

1. Open the All menu, choose Configuration, then Computers. Each row is a configuration item (CI), one thing that IT looks after. Together they live in the CMDB, the configuration management database. Computer is one class of CI, a kind of CI with its own fields. These are sample computers that came with the instance. Click New.
2. Create Priya's laptop:

   | Field | Value |
   |---|---|
   | Name | ARC-LT-0142 |
   | Serial number | SN-ARC-0142 |
   | Assigned to | Priya Nair |

   Click Submit. The list now counts one more computer (856 in the video).
3. The controller is not a computer, so it needs a different class. Open the All menu, type `Network Gear` and under Configuration choose Network Gear. Click New. This form has other fields, such as Device type, Ports, Channels and Firmware, because the class decides which fields a CI has.
4. Set Name to `ARC-WLC-01`, the Wi-Fi controller, and click Submit. It is first in the list of network gear.
5. Open the All menu, choose Computers again, and type `ARC-LT` in the Name search box. Open ARC-LT-0142. Related Items, near the middle of the form, is where this CI shows its connections.
6. A relationship is a named link between two CIs. Click the plus in Related Items to open the Relationship Editor. The first suggested type, `Depends on::Used by`, is already selected. Change the class filter from Computer to Network Gear and click Run filter. Tick ARC-WLC-01 and click the plus above the relationships. The new row reads Depends on, Used by, parent ARC-LT-0142, child ARC-WLC-01.
7. Click Save and Exit. ServiceNow asks you to confirm because this changes data in the CMDB. Click OK.
8. Back on the laptop, Related Items shows the link: Depends on, Used by, Network Gear, ARC-WLC-01. Click the dependency view icon next to the plus. The map shows ARC-LT-0142 joined by a line to ARC-WLC-01.
9. Open the All menu, filter for `Incident`, open the list and open Priya's Wi-Fi incident (INC0010009 in the video). Type `ARC-LT-0142` in Configuration item and choose the laptop. Save the incident.
10. Click the small information icon next to Configuration item. The preview card shows the laptop's name, its serial number and Priya as the person it is assigned to. An agent reaches the laptop from the incident in one click.
11. Open the laptop from the card. The Computer form has no list of incidents, so go back to the incident and open its Affected CIs tab, under Related Links. One CI is listed: ARC-LT-0142. The controller is not on the incident. It is linked to the laptop, and the laptop is linked to the incident, so the link to the controller is indirect.

Result: two CIs, the relationship between them, and the incident pointing at the laptop. Priya, her laptop and the controller are now records that point at each other.

## Your turn

1. Create a practice CI named `PRACTICE laptop 2`, connect it to ARC-WLC-01, and count the nodes on the map. Then delete the practice CI.
2. On Priya's incident, add ARC-WLC-01 in the Affected CIs tab, compare it with the Configuration item field, and then remove it again.

## Clean up

Delete `PRACTICE laptop 2` and its relationship. Remove ARC-WLC-01 from the Affected CIs tab. Keep ARC-LT-0142, ARC-WLC-01, their relationship and the incident's Configuration item.

## Previous and next

Previous: [Episode 12: Reports and dashboards](../12-reports-dashboards)

Next: Episode 14, A scoped app, the first episode of Season 2, where you build the Equipment Loans application. Its folder is added when that episode is published.
