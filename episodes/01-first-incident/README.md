# Episode 01: What ServiceNow is, your own instance, and the first incident

Paths: U A D

In this episode you meet ServiceNow, open your own instance, create a user called Priya Nair and log her first incident, "Laptop cannot connect to Wi-Fi". It matters because every later episode builds on this record: an incident gives a problem a number and a state, and lets IT track who will handle it, and a user record is what makes a person a caller. At the end Priya exists as a user and her incident is saved and found in the incident list.

New terms: instance, Personal Developer Instance (PDI), incident, user, record, form, field, list. If you know Salesforce: a Salesforce org is a secure, isolated environment for one customer, much like a ServiceNow instance is yours; a list view is the same idea as a list, a filtered list of an object's records; and a record there is one row of data in an object.

## The story

Arcwell Engineering is an invented company with 600 people. IT works from a shared mailbox and a spreadsheet. Priya Nair, a design engineer, emails IT because her laptop will not connect to Wi-Fi. Her message lands among 300 others and nobody owns it. In ServiceNow, work like this is kept as records. A record gives the problem a number and a state, and lets IT track who will handle it.

## Before you start

- A ServiceNow Developer Program account and your own Personal Developer Instance (PDI). ServiceNow offers free PDIs to Developer Program members to learn on (one per member). Follow ServiceNow's official Personal developer instance guide (https://www.servicenow.com/docs/r/application-development/personal_developer_instance_guide.html) and its Understanding PDIs page (https://www.servicenow.com/docs/r/application-development/understanding_pdis.html) for the conditions, including that an unused instance is reclaimed. The ServiceNow Developer site is developer.servicenow.com. Never request, reset or release an instance you do not own. Use your own email address and a password only you know.
- The series was recorded on the Brazil release. Menu names and screens can change between releases.
- You sign in to the instance as `admin`. The admin user is shown as Jitendra Zaa in the videos; yours shows its own name.
- Do not put real company data in a PDI.

## Steps

1. On the Developer site, sign in. The home page shows your instance with its name, its release (Brazil here) and its status (Online). An instance is one running ServiceNow site with its own address.
2. Click Manage my instance. This page shows the status, the release, the address you open the instance from, and the role of your user (Admin).
3. Open the instance from its address and sign in as `admin`.
4. Open the All menu. Its filter box narrows the menu as you type.
5. Type `User Administration` in the filter, then choose Users. The list shows one person per row. Click New.
6. Fill the user form with these values:

   | Field | Value |
   |---|---|
   | User ID | priya.nair |
   | First name | Priya |
   | Last name | Nair |
   | Title | Design Engineer |
   | Email | priya.nair@example.com |

The domain example.com is maintained for use as an example in documents, so no real address is used. Priya will not sign in during this lesson, so we do not set a password.
7. Click Submit. Submit saves a new record and returns to the list, with a message that mentions Priya Nair. (Save keeps the form open.)
8. Search the Users list for Priya Nair to check she is stored: set the toolbar search to Name, type her name and press Enter. The row shows priya.nair, her name and email, and when she was created.
9. Open the All menu again, type `Incident` in the filter, choose Incident, then Create New. An incident is a record of something that is not working as expected; in ServiceNow's documentation incidents sit under IT Service Management.
10. The form fills in a Number for you (INC0010009 in the video; yours may differ). Set the fields:

    | Field | Value |
    |---|---|
    | Caller | Priya Nair (type Priya and choose the match) |
    | Category | Network |
    | Short description | Laptop cannot connect to Wi-Fi |
    | Description | Since this morning. Other devices connect. Seen in the design studio. |
    | Impact | 2 - Medium |
    | Urgency | 2 - Medium |

    On this form the Caller field refers to the user records, so only an existing user can be chosen. Impact and Urgency both start at 3 - Low. When you set both to 2 - Medium, Priority changes to 3 - Moderate by itself. In this instance Priority is calculated from Impact and Urgency and is read only.
11. Click Submit. The Incidents list opens with your incident at the top: caller Priya Nair, priority 3 - Moderate, state New.
12. Click the number to open the incident. State is New. Assignment group and Assigned to are empty because the incident has not been assigned yet. In Activity, an entry shows who opened the incident.

Result: Priya Nair is in the Users list, and her incident is saved with state New.

## Your turn

1. Join the ServiceNow Developer Program, get a PDI, and follow the steps above to create Priya and her incident.
2. Create an invented practice user: User ID `practice.ravi`, First name `PRACTICE`, Last name `Ravi`, no password. Then start a Hardware incident for that user, with the Short description `PRACTICE Wi-Fi`, and write down its number. If your browser offers to save a password after you submit the Users form, decline it.
3. In the practice incident, change Impact and Urgency before you submit, for example to 1 - High, and compare the Priority you get each time.
4. Clean up: delete only the practice incident and the practice user, as shown in the video (the video's practice incident was INC0010018; yours has its own number).

## Clean up (the fourth exercise, step by step)

1. Open the All menu, type `Incident` in the filter and click Incident, then open All. In the toolbar search, choose Number, type the number of your saved practice incident, and press Enter, so the list shows only that incident.
2. Open it. Click Delete at the top of the form. The confirmation lists what goes with the incident (related records, such as a Task SLA in the video). Click the red Delete. The list then says No records to display.
3. Open the All menu, type `User Administration`, click Users. In the toolbar search, with Name chosen, type `PRACTICE Ravi` and press Enter. The first row is the practice user.
4. Tick the box at the start of that row, open Actions on selected rows at the top right, choose Delete. The confirmation lists what goes with the user (related records, such as notification entries in the video). Click the red Delete.
5. Deleting the user may open a Notification Messages form. Do not submit it; open the All menu, type `User Administration` again and click Users.
6. Search the list for `PRACTICE` again. The practice user is gone.

Do not delete Priya or her incident: episode 02 and later episodes use them.

## Next

[Episode 02: Tables, records and fields](../02-tables-and-records)
