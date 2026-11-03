# Episode 01: What ServiceNow is, your own instance, and the first incident

Paths: U A D

In this episode you meet ServiceNow, open your own instance, create a user called Priya Nair and log her first incident, "Laptop cannot connect to Wi-Fi". It matters because every later episode builds on this record: an incident gives a problem a number, an owner and a state, and a user record is what makes a person a caller. At the end Priya exists as a user and her incident is saved and found in the incident list.

New terms: platform, instance, Personal Developer Instance (PDI), ITSM, incident, user, record, form, field, list.

## The story

Arcwell Engineering is an invented company with 600 people. IT works from a shared mailbox and a spreadsheet. Priya Nair, a design engineer, emails IT because her laptop will not connect to Wi-Fi. Her message lands among 300 others and nobody owns it. A platform gives each problem one record with a number, an owner and a state.

## Before you start

- A ServiceNow Developer Program account and your own Personal Developer Instance (PDI), an instance for learning. Sign up on the ServiceNow Developer site (developer.servicenow.com) and request an instance from the page that offers it. Use your own email address and a password only you know.
- The series was recorded on the Brazil release. Menu names and screens can change between releases.
- You sign in to the instance as `admin`. The admin user is shown as Jitendra Zaa in the videos; yours shows its own name.
- Do not put real company data in a PDI.

## Steps

1. On the Developer site, sign in. The home page shows your instance with its name, its release (Brazil here) and its status (Online).
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

   Leave the password empty. The domain example.com is reserved for examples, so no real address is used.
7. Click Submit. Submit saves a new record and returns to the list, with a message that mentions Priya Nair. (Save keeps the form open.)
8. Search the Users list for Priya Nair to check she is stored. The row shows priya.nair, her name and email, and when she was created.
9. Open the All menu again, type `Incident` in the filter, choose Incident, then Create New.
10. The form fills in a Number for you (INC0010009 in the video; yours may differ). Set the fields:

    | Field | Value |
    |---|---|
    | Caller | Priya Nair (type Priya and choose the match) |
    | Category | Network |
    | Short description | Laptop cannot connect to Wi-Fi |
    | Description | Since this morning. Other devices connect. Seen in the design studio. |
    | Impact | 2 - Medium |
    | Urgency | 2 - Medium |

    Caller is a reference to a user record, so only an existing user can be chosen. Impact and Urgency both start at 3 - Low. When you set both to 2 - Medium, Priority changes to 3 - Moderate by itself. In this instance Priority is calculated from Impact and Urgency and is read only.
11. Click Submit. The Incidents list opens with your incident at the top: caller Priya Nair, priority 3 - Moderate, state New.
12. Click the number to open the incident. State is New. Assignment group and Assigned to are empty because the incident has not been assigned yet. In Activity, an entry shows who opened the incident.

Result: Priya Nair is in the Users list, and her incident is saved with state New.

## Your turn

1. Sign up on the Developer site, get a PDI, and follow the steps above to create Priya and her incident.
2. Create an invented practice user (for example `practice.user`) and start a Hardware incident for that user. Use a short description that starts with `PRACTICE`.
3. Change Impact and Urgency before you submit, for example to 1 - High, and compare the Priority you get each time.
4. Clean up: delete only the practice incident and the practice user.

## Clean up

Open the practice incident, use the form header menu and choose Delete. Then delete the practice user from the Users list. Priya and her incident stay, because episode 03 and later episodes use them.

## Next

[Episode 02: Tables, records and fields](../02-tables-and-records)
