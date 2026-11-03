# ServiceNow by doing

Hands-on files for a video series that teaches ServiceNow to someone who has never used it. Each episode is about 8 minutes (some run longer), and each one has a folder here with the starting point, the steps, the code and exercises for you to try.

The story is invented: Arcwell Engineering is a made-up company, and its other people, rigs and data are example values. The author, Jitendra Zaa, is real and is the administrator user in the videos.

## What the series covers

You follow one made-up company, Arcwell Engineering. IT starts with a shared mailbox and a spreadsheet, and the test lab lends equipment by sticky note. Over three seasons you:

1. Learn the platform as it comes: incidents, tables, users and roles, the workspace, update sets, SLAs, the service catalog, flows, approvals, knowledge, notifications, reports and the CMDB.
2. Build a small app with low code: the Equipment Loans app (rigs and loans), with an import, roles, access rules and policies.
3. Write code on that app (server and browser scripting, business rules, script includes, events, scheduled jobs, automated tests), connect it to other systems with REST in both directions, and keep it as source files with the ServiceNow SDK.

## The three paths

Each episode is tagged with the paths it serves.

- U, the user or business path: you use ServiceNow to get work done.
- A, the administrator path: you set up and run it. The administrator episodes follow the topics of the Certified System Administrator area.
- D, the developer path: you build and script on it. The developer episodes follow the topics of the Certified Application Developer area.

The series does not promise a certification.

## Get your instance

You need your own ServiceNow instance to follow along. ServiceNow's documentation says it "offers free personal developer instances (PDIs) to Developer Program members to learn, explore, and experiment" ([Personal developer instance guide](https://www.servicenow.com/docs/r/application-development/personal_developer_instance_guide.html)). Each member can have one.

1. Join the ServiceNow Developer Program on the Developer site (developer.servicenow.com).
2. Sign in and request your instance. The series was recorded on the Brazil release.
3. Open the instance address you are given and sign in as the admin user.
4. Keep using it. After a period of inactivity an instance is reclaimed and reset ([Understanding PDIs](https://www.servicenow.com/docs/r/application-development/understanding_pdis.html)).

A PDI is for learning. Do not put real company data in it.

## What you need on your computer

- A web browser and your PDI.
- Visual Studio Code, the free code editor.
- Git, to clone this repository.
- A terminal (the one built into VS Code is enough). Episodes 31 to 33 use curl, which is included on macOS and recent Windows and Linux.
- Node.js, only for episode 34 (the ServiceNow SDK).

Menu names and screens can change between releases. If something looks different on your instance, the episode's README says what to look for.

## Episodes

Base address for the folders: https://github.com/JitendraZaa/Servicenow/tree/main/episodes

| # | Episode | Paths | Folder |
|---|---|---|---|
| 01 | First incident | U A D | [01-first-incident](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/01-first-incident) |
| 02 | Tables and records | A D | [02-tables-and-records](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/02-tables-and-records) |
| 03 | Users, groups and roles | A D | [03-users-groups-roles](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/03-users-groups-roles) |
| 04 | Working in the agent workspace | U A | [04-agent-workspace](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/04-agent-workspace) |
| 05 | Update sets | A D | [05-update-sets](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/05-update-sets) |
| 06 | Service level agreements | A D | [06-sla](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/06-sla) |
| 07 | A catalog item | U A D | [07-catalog-item](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/07-catalog-item) |
| 08 | Your first flow | A D | [08-first-flow](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/08-first-flow) |
| 09 | Approvals | U A D | [09-approval](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/09-approval) |
| 10 | Knowledge articles | U A D | [10-knowledge](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/10-knowledge) |
| 11 | Notifications | A D | [11-notifications](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/11-notifications) |
| 12 | Reports and dashboards | U A D | [12-reports-dashboards](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/12-reports-dashboards) |
| 13 | CMDB basics | A D | [13-cmdb-basics](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/13-cmdb-basics) |
| 14 | A scoped app | A D | [14-scoped-app](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/14-scoped-app) |
| 15 | The Loan table | A D | [15-loan-table](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/15-loan-table) |
| 16 | Importing rigs | A | [16-import-rigs](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/16-import-rigs) |
| 17 | Roles and access rules | A D | [17-roles-and-acls](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/17-roles-and-acls) |
| 18 | Policies and packaging | A D | [18-policies-and-packaging](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/18-policies-and-packaging) |
| 19 | Where code runs | D | [19-where-code-runs](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/19-where-code-runs) |
| 20 | GlideRecord: reading | D | [20-gliderecord-query](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/20-gliderecord-query) |
| 21 | GlideRecord: writing | D | [21-gliderecord-write](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/21-gliderecord-write) |
| 22 | Business rules | D | [22-business-rule](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/22-business-rule) |
| 23 | Client scripts | D | [23-client-script](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/23-client-script) |
| 24 | Script includes | D | [24-script-include](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/24-script-include) |
| 25 | GlideAjax | D | [25-glideajax](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/25-glideajax) |
| 26 | UI actions | D | [26-ui-action](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/26-ui-action) |
| 27 | Events and notifications from code | D | [27-events-notifications](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/27-events-notifications) |
| 28 | A scheduled job | D A | [28-scheduled-job](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/28-scheduled-job) |
| 29 | Automated tests | A D | [29-atf](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/29-atf) |
| 30 | Reading data with the Table API | A D | [30-table-api](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/30-table-api) |
| 31 | Creating a loan with curl | D | [31-curl-from-vscode](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/31-curl-from-vscode) |
| 32 | A Scripted REST API | D | [32-scripted-rest](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/32-scripted-rest) |
| 33 | Sending data out with a REST Message | D | [33-outbound-rest](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/33-outbound-rest) |
| 34 | The ServiceNow SDK and Fluent | D | [34-sdk-fluent](https://github.com/JitendraZaa/Servicenow/tree/main/episodes/34-sdk-fluent) |

The Fluent project for episode 34 is in [sdk/arcwell-loans](https://github.com/JitendraZaa/Servicenow/tree/main/sdk/arcwell-loans).

Video links are added to each episode's README when the episode is published.

## How to use an episode folder

Each folder `episodes/NN-slug/` contains:

- `README.md`: the starting point (what your instance must already contain), the steps, the exercises and the result to expect.
- Script files (`.js`): paste them into the place the episode names, such as Scripts - Background, a business rule, a script include or a scheduled job. Each file starts with a short comment that says what it is for.
- Curl scripts (`.sh`) and sample JSON: run them from a terminal. They read the instance name from the environment variable `SN_INSTANCE` and the user from `SN_USER`. curl asks you for the password and does not show it as you type, so it is never in a file, a command or your history. Never write a password into a file, and never commit one.
- Data files (`.csv`), where an episode uses them, for an import.
- `arcwell-epNN.xml`, where present: the update set exported after the recording. It carries the configuration the episode captured, not the data, and it may depend on earlier episodes. Load update sets only on a practice instance.

Start with episode 01 and go in order the first time. Episodes depend on the ones before them: the app episodes (14 to 18) must come before the code episodes (19 to 34), and 24 (script include) before 25, 26, 32. If you want to begin later, follow the READMEs of the earlier episodes. An update set carries configuration only. Users, rigs, loans and other ordinary data are not in it, so an update set alone does not restore an episode's starting point.

Use the exercises at the end of each README. They have an expected result, so you can check yourself, and each ends with a step that puts your instance back, so the next episode's starting point still holds.

## Your scope name

The files use the application scope `x_arcwl_loans` (tables such as `x_arcwl_loans_loan`). If your instance gives the app another prefix, replace `x_arcwl_loans` with yours in every file, including the role names and the REST path.

## Sample data and starting states

`fixtures.md` lists the records each episode creates and uses, with their keys (for example which rig asset tag is used by which episode). To go back to an episode's starting point, restore by exact key, never by a name prefix:

- Rigs: find the rig by its asset tag (ARC-RIG-001 to ARC-RIG-020) and set location and state to the values in `fixtures.md`. ARC-RIG-018 is the practice rig and is kept available.
- Loans: practice loans use ARC-RIG-018; delete them by their LOAN number, which the episode's restore step tells you to note. Do not delete the loans of the fixtures.
- Overdue loans (ARC-RIG-002, 003, 005, 007): their dates are relative to the recording day. Run `episodes/20-gliderecord-query/reset-fixture-dates.js` in Scripts - Background to set them back; `fixtures.md` gives the reminder_sent values after episode 28.
- Incidents, requests and similar records: delete or cancel them by the number noted in the restore step.
- Configuration (roles, ACLs, notifications, jobs): use the restore step of the exercise, or the update set for that episode.

Audit fields such as Created by show the real user ID, here `admin`, and are never edited.

## About the data

Arcwell Engineering, its people (Priya Nair, Sam Ortiz, Dana Lee), the rigs, the asset tags and every value in the files are invented for teaching, apart from the author. The echo service used in episode 33 is a public test address: send it only invented data.

## Author

Jitendra Zaa. The channel is @JitendraZaaInd.
