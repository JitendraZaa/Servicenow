# Episode 12: Reports and dashboards

Paths: U A D

In this episode you answer a question from Dana Lee, the IT manager: how many active incidents are assigned to each team? You build a chart, put it on a dashboard, and make sure Dana can open it. Today someone counts rows and sends a number in a chat, and by the time it arrives it has changed. A chart counts the records for you, and a dashboard is a page that holds data visualizations, such as that chart. If you know Salesforce, a dashboard there is also a page of charts, each chart fed by a report.

New terms: data visualization, data source, group by, dashboard, Platform Analytics, sharing, viewer.

## Before you start

- You finished [episode 11](../11-notifications). Dana Lee exists and has the role approver_user from episode 09.
- Sign in as `admin`.
- The counts depend on your instance's sample data. The video shows 45 active incidents.

## Steps

1. Open the All menu, click its filter box and type `Incident`. As you type, the menu narrows to the matching entries. Under Incident, click Open. The filter at the top of the Incidents list says Active equals true. These are the active incidents (45 in the video). Some are Arcwell's and some are sample data that came with the instance. The chart will count these rows.
2. Open the All menu, type `Platform Analytics` in the filter, and under Platform Analytics click Dashboards. Click Create dashboard. The dialog offers the In-line editor; keep it. Name the dashboard `Arcwell service desk`, type a short Description (the video types `Open incidents for the service desk manager`), and click Create dashboard. It opens empty, because it is only the page.
3. Click Add new element, choose Data visualization, then New Visualization. In the configuration panel the Visualization type is Single score. Open that list, type `bar` in its search box and choose Vertical bar.
4. Click Add data source. Click the search box and type `incident`; the matches take a moment to load. Under Tables, pick Incident.
5. Click Add custom conditions. Open the Field list, type `Active` in its search box and choose Active. The operator is already `is`; leave it. Click the value box, open the value list (true and false) and choose `true`. If the preview below still shows rows from an earlier try, click Run: the preview shows the same number of records as the list (45). Click Add this source.
6. ServiceNow adds a metric, COUNT of Incident, so the chart counts incidents. The chart shows one bar, because every record has the same Active value. Under Group by, click the pencil beside Active. A small Group by window opens: open its Field list, type `Assig`, pick Assignment group, leave Max number of groups and Show others as they are, and click Apply. The chart now has a bar for each Assignment group value, including Arcwell Service Desk. You can drag the tile by its top bar to another place and drop it; the chart stays the same.
7. Expand Header and border and type the chart title `Open incidents by assignment group`. Here, open means Active equals true, which includes the 2 Arcwell incidents that are already Resolved. Click Save; the chart loads again. Click Exit editing mode to see the dashboard the way a reader sees it. If the tile is small, go back into editing, drag its lower right corner to make the tile larger and exit editing mode again.
8. The tallest bar is labelled `(empty)` (25 incidents in the video): these incidents have no Assignment group. Click the bar for Arcwell Service Desk. The Incidents list opens with the filter Active equals true and Assignment group equals Arcwell Service Desk. It lists 2 incidents in the video, INC0010010 and INC0010009, both with State Resolved, so on this instance the Active filter still counts them.
9. Next, Dana. Open the All menu, type `User Administration` in the filter and under it click Users. The list of every user opens. Click the search box, type the full name `Dana Lee`, press Enter, and open her user. The Roles list shows approver_user. In this walkthrough you also give her the itil role, the base role for people who work incidents: click Edit, which opens a page with two lists (the Collection list holds the roles to choose from, the Roles List holds Dana's roles). Click the Collection search box and type `itil`; the list narrows to itil and itil_admin. Select itil, click the right arrow to move it to her roles, and click Save. ServiceNow also adds the roles included with itil.
10. Share the dashboard. Open the All menu, type `Platform Analytics`, move down to Dashboards and click it. Type `Arcwell` in the search box and open the dashboard. From the More actions menu choose Share. In the Share Dashboard dialog click the user box and type `Dana`; the list offers Dana Lee, pick her, and click Add as viewer. Under Manage Access, Dana Lee shows Can view. Click Confirm.
11. Impersonate Dana Lee: open the profile menu, click Impersonate user, click the search box, type `Dana`, choose Dana Lee, and click the Impersonate user button. Open the All menu, type `Platform Analytics`, click Dashboards under it and wait for the page to load. Open Arcwell service desk: Dana sees the same chart with the counts. Point at a bar to see its count.
12. Open the profile menu and click End Impersonation. The page takes a moment to load and you are back as the administrator.

Result: the dashboard Arcwell service desk with the bar chart Open incidents by assignment group, opened as Dana with counts showing.

## Your turn

1. Add a second tile with a pie chart of active incidents by priority, name it `PRACTICE`, and decide which question each chart answers better.
2. Share the dashboard with Sam Ortiz and open it as Sam.
3. End Sam's impersonation to return to the administrator. Then delete the PRACTICE tile and remove Sam from the sharing list.

## Clean up

End any impersonation first, then delete the PRACTICE tile and remove Sam from the sharing list. Keep the dashboard, its chart, Dana's viewer access and her itil role.

## Previous and next

Previous: [Episode 11: Notifications](../11-notifications)

Next: [Episode 13: CMDB basics](../13-cmdb-basics)
