# Episode 13: CMDB basics

Paths: A D

In this episode you record Priya's laptop and the Wi-Fi controller as configuration items, connect them, and link Priya's incident to the laptop. An incident says that the Wi-Fi is down, but not on which laptop, and IT does not know which controller that laptop connects to because nothing records the connection. The CMDB keeps the things IT looks after and how they connect. If you know Salesforce, an asset is a record of an item a customer has purchased. Here, our configuration items record these IT devices and how they connect. This is the last episode of Season 1.

New terms: configuration item (CI), CMDB, class, relationship, Relationship Editor, parent and child, Affected CIs.

## Before you start

- You finished [episode 12](../12-reports-dashboards). Priya's Wi-Fi incident is saved, and Priya Nair exists.
- Sign in as `admin`.

## Steps

1. Open the All menu and type `Computers` in its filter. Under Configuration, click Computers (the instance can be slow, so wait for the list). Each row is a configuration item (CI), one thing that IT looks after. Together they live in the CMDB, the configuration management database. Computer is one class of CI, one kind of CI; you will see that another kind has a different form. These are sample computers that came with the instance. Click New.
2. Create Priya's laptop. Click in the Name field and type the values:

   | Field | Value |
   |---|---|
   | Name | ARC-LT-0142 |
   | Serial number | SN-ARC-0142 |
   | Assigned to | Priya Nair (type `Priya`, then pick her from the list) |

   The other fields can stay empty for now. Click Submit. The list now counts one more computer (856 in the video).
3. The controller is not a computer, so it needs a different class. A class is a kind of configuration item: Computer is one class, and Network Gear is another. Open the All menu, type `Network Gear` in its filter and under Configuration click Network Gear. The Class column shows that this list holds other classes too, such as IP Router and IP Switch. Click New.
4. Type `ARC-WLC-01` in Name, the Wi-Fi controller. This form has other fields, such as Device type, Ports, Channels and Firmware, which the Computer form did not have. Click Submit. It is first in the list of network gear.
5. Open the All menu, type `Computers` and click Computers again. Type `ARC-LT` in the Name search box under the column names. The list narrows to ARC-LT-0142; open it. Related Items, near the middle of the form, is where this CI shows its connections.
6. A relationship is a named link between two CIs, and the Relationship Editor creates it. Click the plus in Related Items. At the top the editor suggests relationship types, and the first one, `Depends on::Used by (Parent)`, is already selected. The word Parent in brackets means the CI you opened, the laptop, is the parent. For this example the laptop depends on the controller, and the reverse description is that the controller is used by the laptop. Change the class filter from Computer to Network Gear and click Run filter. Tick ARC-WLC-01 and click the plus above the relationships. The new row reads Depends on::Used by, parent ARC-LT-0142, child ARC-WLC-01.
7. Click Save and Exit. ServiceNow shows "Save Confirmation: This will change data in the CMDB, do you want to continue?" Click OK.
8. Back on the laptop, Related Items shows the link: Depends on::Used by (parent), Network Gear, ARC-WLC-01. Click the icon next to the plus: a map opens in a new browser tab with ARC-LT-0142 joined by a line to ARC-WLC-01. Close the map tab to return to the laptop.
9. Open the All menu, type `Incident` in its filter and under Incident click All. Find Priya's Wi-Fi incident (INC0010009 in the video) and open it. The Configuration item field holds one CI for the incident. Type `ARC-LT-0142`, choose the laptop from the list, and save the incident.
10. Click the small information icon next to the field. The preview card shows the laptop's name, its serial number and Priya as the person it is assigned to. An agent reaches the laptop from the incident in one click.
11. Scroll down to Related Links and click the Affected CIs tab. One CI is listed: ARC-LT-0142, the same laptop as in the Configuration item field.
12. Add the controller here too. Click Add. In the dialog, clear the Configuration Class field, type `Network Gear` and click the entry the list offers; the dialog reloads with Network Gear records. ARC-WLC-01 is first in the list: tick its box and click Add Selected. The tab now lists 2 CIs.
13. Scroll up to the Configuration item field. It still holds only the laptop, because that field takes 1 CI and the Affected CIs tab takes many.
14. Scroll down again, tick only the ARC-WLC-01 row in the Affected CIs tab, open Actions on selected rows and choose Delete. ServiceNow asks "Delete the selected record(s)?"; click Delete. This removes only that row. The incident's Activity shows that Network Gear ARC-WLC-01 was removed.
15. Open the All menu, type `Network Gear` and click Network Gear under Configuration. ARC-WLC-01 is still in the list: the controller itself is untouched. The incident reaches the controller only through the laptop.

Result: the laptop is assigned to Priya, related to the controller, and linked from her incident. The controller was added to the incident's Affected CIs and removed again, so the incident ends as it started.

## Your turn

1. Open the laptop ARC-LT-0142, click the map icon next to the plus in Related Items, and count the nodes on the map (2 in the video). Then close the map tab.
2. Open Priya's incident. In the Affected CIs tab, add ARC-WLC-01, compare the tab with the Configuration item field, and remove only that row.

## Clean up

Exercise 1 creates nothing. Exercise 2 adds ARC-WLC-01 to the incident's Affected CIs; remove only that row at the end (tick it, Actions on selected rows, Delete), so the Affected CIs tab lists the laptop only. Keep ARC-LT-0142, ARC-WLC-01, their relationship and the incident's Configuration item.

## Previous and next

Previous: [Episode 12: Reports and dashboards](../12-reports-dashboards)

Next: Episode 14, A scoped app, the first episode of Season 2, where you build the Equipment Loans application. Its folder is added when that episode is published.
