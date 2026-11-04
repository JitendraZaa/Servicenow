# Episode 05: Update sets

Paths: A D

In this episode you add a field called Arcwell Site to the incident form and keep a record of that change in an update set. Arcwell has an office in Pune and 1 in Leeds, and Wi-Fi problems differ by site, but the incident form has no field for it. We want this lesson's changes grouped together, so they are easy to find and to move. An update set is a named group of configuration changes that can be moved from one instance to another. If you know Salesforce, an update set is close to a change set there: both move customizations from one place to another. Configuration is how the platform is set up, such as a field or a form. Data is a value in a record, such as the word Pune in an incident. Step 11 shows which of the two this instance's update set recorded.

New terms: update set, current update set, update set picker, Global, configuration versus data, form layout, list layout, Customer Updates.

## Before you start

- You finished [episode 04](../04-agent-workspace). Priya's incident INC0010009 (your number may differ) is Resolved and assigned to Sam Ortiz.
- Sign in as `admin`.

## Steps

1. Open the All menu, type `Update Sets`, and under System Update Sets choose Local Update Sets. The list shows only Default, in progress, in Global. Click New.
2. The Name box holds a suggested name, selected; type `Arcwell ep05` over it. Click the Description box and type `Adds Arcwell Site to Incident`. The Application field shows the scope, which is the application that owns the change, and for this change you leave it at Global. Changes in an update set apply only to that scope; in episode 14 you work in a scoped application.
3. Click Submit and Make Current. A message confirms that the current update set is now Arcwell ep05 in Global. From now on, configuration changes are recorded in it.
4. Open the update set picker (the icon at the top right). It should show Application scope Global and Update set Arcwell ep05. Check this before you change anything: if it said Default, the change would be recorded in Default.
5. Open the All menu and type `Incident`. The menu shows more than 1 Incident entry; under Incident, click All. Open Priya's incident INC0010009 (State Resolved, Assigned to Sam Ortiz).
6. Open the form header menu (not a right-click), choose Configure, then Form Layout. If you know Salesforce, this is close to editing a page layout: you choose which fields show. If ServiceNow offers Form Builder, choose Not Now.
7. In Create new field, set Name to `Arcwell Site` and Type to String (already selected in that box; String is the type for text, such as Pune). Click Add. The field joins the Selected list.
8. Use the up arrow to move Arcwell Site up until it sits right under Category. The Selected list holds the fields placed in this form section. Click Save, wait for the save to reach 100 percent, then click Close.
9. Back on the incident, type `Pune` in Arcwell Site. Open the form header menu and click Save. If you know Salesforce, adding this field is close to creating a custom field: you pick a type and add it. The field is configuration and the word Pune is data, so step 11 checks which of the two this instance's update set recorded.
10. Go to the incident list. Open the menu on a column heading, choose Configure, then List Layout. Move Arcwell Site from Available to Selected and click Save. The list now has an Arcwell Site column, and Priya's incident shows Pune.
11. Open the All menu, type `Update Sets` and choose Local Update Sets. Open Arcwell ep05 and its Customer Updates tab. It lists what this instance recorded: 4 updates. There is a Dictionary entry (the field's definition) and a Field Label (the name the form shows) for Incident.Arcwell Site, so 1 new field made 2 entries, then a List Layout and a Form Layout for the Incident table. Priya, her incident and the word Pune are not in this list, so on this instance the field and its layouts were recorded, and the data was not.
12. Set State to Complete and click Update. Complete means the set is finished and ready to move to another instance; this episode does not move it. ServiceNow switches the current update set back to Default and says so. The picker shows Default again.

Result: Arcwell ep05 is Complete with 4 customer updates, the form and the list show Arcwell Site, and Default is current again.

## Your turn

1. Create an update set called `PRACTICE ep05` in Global, and make it current.
2. Temporarily remove Arcwell Site from the incident form (Form Layout, select it in Selected and click the left arrow, Save, Close), and look in the Customer Updates of `PRACTICE ep05` for the new rows. Write down what you see.
3. Put Arcwell Site back right under Category (Form Layout, add it, move it up with the arrow, Save), and check that the form shows it again.
4. Mark `PRACTICE ep05` Complete, and check that Default is current again.

What we saw on our instance (4 Nov 2026), so you can compare: in step 2, `PRACTICE ep05` showed 1 Customer Update, a Form Layout row for the Incident table (INSERT_OR_UPDATE), and no Dictionary or Field Label row, because only the layout changed. After step 3 it still showed 1 row, the form showed Arcwell Site under Category again with Pune kept, and after step 4 the picker showed Default again. Your rows may differ, so note what you see. If the Form Layout menu closes when you move the pointer, hover Configure and move sideways into its submenu before moving down to Form Layout.

## Clean up

`PRACTICE ep05` only records the layout changes of exercises 2 and 3, and Arcwell Site ends where it started, so nothing else needs deleting. Make sure Arcwell Site is back on the form under Category, mark `PRACTICE ep05` Complete, and check that Default is current. Leave Arcwell ep05 Complete and do not reopen it. If you must change it later, set its State back to In progress first, then make it current.

## Previous and next

Previous: [Episode 04: Working in the agent workspace](../04-agent-workspace)

Next: [Episode 06: Service level agreements](../06-sla)
