# Episode 11: Notifications

Paths: A D

In this episode you make ServiceNow write to the caller when her incident is resolved, and then check the message it produced. Priya reports a problem and hears nothing for 2 days, so she calls, and Sam answers the same call again and again. Telling the caller by hand is one more task that gets forgotten. A notification is a rule that writes a message when something happens to a record, so the same wording goes out at the right moment, by itself.

New terms: notification, condition, recipient, preview, email log.

## Before you start

- You finished [episode 10](../10-knowledge). Priya Nair exists and has an email address (priya.nair@example.com).
- Sign in as `admin`.
- The notification list can take a while to load the first time.

## Steps

1. Open the All menu, type `Notifications`, and under System Notification and Email choose Notifications. The list shows the ready-made rules, each with a name, the table it watches and its conditions. Click New.
2. Name it `Arcwell: incident resolved`. For Table, open the list, type `incident` in its search box and choose Incident. Choose the table before you submit, or the form shows a mandatory fields banner.
3. Open the When to send tab. Send when is already Record inserted or updated. Tick Updated. For the condition choose the field Incident state, the operator `is changed to`, and the value Resolved. The message goes out when the state changes to Resolved, not on every later save.
4. Open the What it will contain tab and fill it in:

   | Field | Value |
   |---|---|
   | Subject | Your incident ${number} is resolved |
   | Message | Hello, your incident has been resolved. Here is what was done. |

   After the sentence, use the field picker on the right to insert `${close_notes}` (Resolution notes) and then `${short_description}` (Short description). Each picked field becomes a gap that ServiceNow fills with that incident's own value.
5. Click Submit, then open the notification again and click Preview Notification. The dialog picks an existing incident for you (INC0000060, a ready-made record in the video). The subject shows its number and the body shows its resolution notes and short description as real values.
6. Say who receives the message. Open Notifications again, search the list for Arcwell and open your notification. Open the Who will receive tab. Under Users/Groups in fields, unlock with the padlock, choose Caller, move it to Selected and click Update. The list now shows `caller_id`, the Caller field of the incident.
7. Create an incident: All menu, `Incident`, Create New.

   | Field | Value |
   |---|---|
   | Caller | Priya Nair |
   | Category | Hardware |
   | Short description | Second monitor flickering |

   Click Submit (INC0010012 in the video).
8. Open the incident, go to the Resolution Information tab, set Resolution code to Solution provided and Resolution notes to `Replaced the display cable`. Click Resolve. The list shows a banner that the incident has been resolved.
9. Check what the notification produced. Open the All menu and under System Logs choose Emails. Filter the Subject for `Your incident`. One row remains: recipient priya.nair@example.com, subject `Your incident INC0010012 is resolved`, Type send-ready.
10. Open the row. Target is the incident. The Originating Event and Notification list names your rule, Arcwell: incident resolved. The Subject and Recipients repeat what you set, and the Body holds the real values: Resolution notes `Replaced the display cable` and Short description `Second monitor flickering`.

Result: a rule, a condition, a recipient and a message, checked in the email log.

## Your turn

1. Change the subject to include the priority, preview it, and change it back.
2. Create a notification called `PRACTICE assigned to group` that fires when an incident is assigned to a group. Assign an incident to a group, find the new row in the email log, and then delete the notification.
3. Look in System Mailboxes for the same message, if your instance lists it, and compare it with the email log.

## Clean up

Put the subject back exactly as built. Delete `PRACTICE assigned to group` and set the assignment group of any practice incident back to empty. Keep `Arcwell: incident resolved` and the resolved incident.

## Previous and next

Previous: [Episode 10: Knowledge articles](../10-knowledge)

Next: [Episode 12: Reports and dashboards](../12-reports-dashboards)
