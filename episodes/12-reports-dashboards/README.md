# Episode 12: Reports and dashboards

Paths: U A D

In this episode you answer a question from Dana Lee, the IT manager: how many open incidents does each team have? You build a chart, put it on a dashboard, and make sure Dana can read it. Today someone counts rows and sends a number in a chat, and by the time it arrives it has changed. A report reads the live records and draws them as a chart. A dashboard puts reports on one page for the people who are allowed to open it.

New terms: report, visualization, data source, group by, dashboard, Platform Analytics, sharing, viewer.

## Before you start

- You finished [episode 11](../11-notifications). Dana Lee exists and has the role approver_user from episode 09.
- Sign in as `admin`.
- The counts depend on your instance's sample data. The video shows 45 open incidents.

## Steps

1. Open the All menu, filter for `Incident` and choose Open under Incident. The filter at the top says Active equals true, which means incidents that are still open (45 in the video). Some are Arcwell's and some are sample data that came with the instance. The chart will count these rows.
2. Open the All menu, filter for `Platform Analytics` and choose Dashboards. Click Create dashboard. The dialog offers the In-line editor; keep it. Name the dashboard `Arcwell service desk` and click Create dashboard. It opens empty, because it is only the page.
3. Click Add new element and choose New Visualization. In the configuration panel set the Visualization type to Vertical bar.
4. Click Add data source. Search for `Incident` and pick Incident from the Tables list.
5. Add a condition: the field Active, the operator is, the value true. Click Run. The preview shows the same number of records as the list (45). Click Add this source.
6. The chart shows one bar, because every record has the same Active value. Open Group by, change it from Active to Assignment group and click Apply. The chart now has a bar for each group that has open incidents, including Arcwell Service Desk.
7. Type the chart title `Open incidents by assignment group`. Click Save, then Exit editing mode to see the dashboard as a reader sees it. If the tile is small, go back into editing, make the tile larger and exit again.
8. Click the bar for Arcwell Service Desk. The Incidents list opens with the filter Active equals true and Assignment group equals Arcwell Service Desk. It lists 2 incidents in the video, INC0010010 and INC0010009.
9. Open the All menu, filter for `User Administration` and choose Users. Open Dana Lee. Her Roles list shows approver_user. Click Edit, search for `itil`, move it to her roles and click Save. The banners list roles that came with it, such as `en_incident_write`. This role stays on Dana from now on.
10. Share the dashboard. Open Platform Analytics, Dashboards, type `Arcwell` in the search box and open the dashboard. From the More actions menu choose Share. In the Share Dashboard dialog type `Dana`, pick Dana Lee and click Add as viewer. Under Manage Access, Dana Lee shows Can view. Click Confirm.
11. Impersonate Dana Lee from the profile menu. Open Platform Analytics and Dashboards. The list shows Arcwell service desk. Open it: Dana sees the same chart with the counts. Point at a bar to see its count.
12. End the impersonation from the profile menu.

Result: the dashboard Arcwell service desk with the bar chart Open incidents by assignment group, opened as Dana with counts showing.

## Your turn

1. Add a second tile with a pie chart of open incidents by priority, name it `PRACTICE`, and decide which question each chart answers better.
2. Share the dashboard with Sam Ortiz and open it as Sam.
3. Delete the PRACTICE tile and remove Sam from the sharing list.

## Clean up

Delete the PRACTICE tile, remove Sam from the sharing list and end any impersonation. Keep the dashboard, its chart, Dana's viewer access and her itil role.

## Previous and next

Previous: [Episode 11: Notifications](../11-notifications)

Next: [Episode 13: CMDB basics](../13-cmdb-basics)
