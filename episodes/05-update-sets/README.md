# Episode 05: Update sets

Paths: A D

In this episode you add a field called Arcwell Site to the incident form and keep a record of that change in an update set. Arcwell has an office in Pune and one in Leeds, and Wi-Fi problems differ by site, but the incident form has no field for it. Changing the live instance without a record means nobody knows who changed what. An update set is a named bundle that records configuration changes so they can be reviewed and moved to another instance. Configuration is how the platform is set up, such as a field or a form. Data, such as incidents and users, is not carried by an update set.

New terms: update set, current update set, update set picker, Global, configuration versus data, form layout, list layout, Customer Updates.

## Before you start

- You finished [episode 04](../04-agent-workspace). Priya's incident INC0010009 (your number may differ) is Resolved and assigned to Sam Ortiz.
- Sign in as `admin`.

## Steps

1. Open the All menu, type `Update Sets`, and under System Update Sets choose Local Update Sets. The list shows only Default, in progress, in Global. Click New.
2. The Name box holds a default; clear it and type `Arcwell ep05`. Set Description to `Adds Arcwell Site to Incident`. Application is read only and already shows Global, the shared space where tables such as Incident live.
3. Click Submit and Make Current. A message confirms that the current update set is now Arcwell ep05 in Global. From now on, configuration changes are recorded in it.
4. Open the update set picker (the icon at the top right). It should show Application scope Global and Update set Arcwell ep05. Check this before you change anything: if it said Default, the change would be recorded in Default.
5. Open the All menu, type `Incident` and choose the list of incidents. Open Priya's incident (State Resolved, Assigned to Sam Ortiz).
6. Open the form header menu (not a right-click), choose Configure, then Form Layout. If ServiceNow offers Form Builder, choose Not Now.
7. In Create new field, set Name to `Arcwell Site` and Type to String. Click Add. The field joins the Selected list.
8. Use the up arrow to move Arcwell Site up until it sits right under Category. A field shows on the form only when it is in the Selected list. Click Save, wait for the save to reach 100 percent, then click Close.
9. Back on the incident, type `Pune` in Arcwell Site. Open the form header menu and click Save. The field is configuration and the word Pune is data, so only the field goes into the update set.
10. Go to the incident list. Open the menu on a column heading, choose Configure, then List Layout. Move Arcwell Site from Available to Selected and click Save. The list now has an Arcwell Site column, and Priya's incident shows Pune.
11. Open the All menu, type `Update Sets` and choose Local Update Sets. Open Arcwell ep05 and its Customer Updates tab. It lists 4 updates: a Dictionary entry and a Field Label for Incident.Arcwell Site, and a List Layout and a Form Layout for the Incident table. Priya, her incident and the word Pune are data, so they are not listed.
12. Set State to Complete and click Update. Complete means the set is finished and ready to move to another instance; this episode does not move it. ServiceNow switches the current update set back to Default and says so. The picker shows Default again.

Result: Arcwell ep05 is Complete with 4 customer updates, the form and the list show Arcwell Site, and Default is current again.

## Your turn

1. Create an update set called `PRACTICE ep05` in Global, make it current, and add a field called `PRACTICE Tag` to the Incident form.
2. Open its Customer Updates and find the new rows.
3. Remove `PRACTICE Tag` from the form layout and see whether that adds a row.
4. Mark `PRACTICE ep05` Complete and check that Default is current again.

## Clean up

If you want a clean instance, remove `PRACTICE Tag` from the form layout and delete its dictionary entry while `PRACTICE ep05` is still current, mark it Complete, then choose Default as the current update set. Leave Arcwell ep05 Complete and do not reopen it. If you must change it later, set its State back to In progress first, then make it current.

## Previous and next

Previous: [Episode 04: Working in the agent workspace](../04-agent-workspace)

Next: [Episode 06: Service level agreements](../06-sla)
