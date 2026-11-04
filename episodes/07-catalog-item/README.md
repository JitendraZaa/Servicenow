# Episode 07: A catalog item

Paths: U A D

In this episode you build a catalog item called Replacement laptop, and Priya orders one. Priya's laptop has reached the end of its life. By email, Sam has to ask 3 questions: which model, which reason, and by when. Every order becomes a long mail thread, and nothing says how many laptops were ordered this quarter. A catalog item asks the same 3 questions every time and creates a record that IT can count.

New terms: service catalog, catalog item, variable, question choice, request (REQ), requested item (RITM).

## Before you start

- You finished [episode 06](../06-sla). Priya Nair exists.
- Sign in as `admin`.

## Steps

1. Create an update set (if you know Salesforce, an update set is like a change set: both carry configuration, not records, from one place to another): open the All menu, type `System Update Sets`, choose Local Update Sets, click New (ServiceNow suggests a name and selects it, so type over it) and name it `Arcwell ep07`, then click Submit and Make Current. A message says the current update set is Arcwell ep07.
2. Open the All menu, type `Service Catalog` and under Catalog Definitions choose Maintain Items, 1 way to manage catalog items (190 items in the video). Click New. A banner mentions the improved Catalog Builder, another way to create items; leave it alone and use this classic form.
3. Fill in the item:

   | Field | Value |
   |---|---|
   | Name | Replacement laptop |
   | Catalogs | Service Catalog |
   | Category | Hardware |
   | Short description | Order a new laptop for work |

4. Save the item from the form menu (Save, not Submit), so the form stays open and the related lists appear. The Variables list is empty.
5. On the Variables list click New and create the first variable:

   | Field | Value |
   |---|---|
   | Type | Select Box |
   | Question | Laptop model |
   | Name | laptop_model |
   | Order | 100 |

   The Type list is long: type `Select B` in its search box and choose Select Box. Type the Name once. The box fills itself from the Question (here with `laptop_model`), so clear it with the backspace key before you type, or the name is doubled. Save it from the form menu. Its Question Choices list appears.
6. On Question Choices click New and add two choices:

   | Text | Value |
   |---|---|
   | Standard 14 inch | standard_14 |
   | Performance 16 inch | performance_16 |

7. Back on the item, create the second variable on Variables with New: Type Select Box, Question `Reason`, Name `reason`, Order 200. Add the choices End of life (value `end_of_life`), Damaged (`damaged`) and New starter (`new_starter`): for each, click New, type the text and the value, and click Submit, which returns you to the Question Choices list.
8. Open the item again (Maintain Items, search for Replacement). Its Variables list shows 2 variables. Click New for the third: Type Date, Question `Needed by`, Name `needed_by`, Order 300. Click Submit. The item now lists Laptop model, Reason and Needed by.
9. Open the Available For tab. On this instance it has no records because we added no criteria. Next you check whether Priya can find and order the item.
10. Open the user menu, choose Impersonate user, search for Priya Nair and click Impersonate user.
11. Open the All menu, type `Service Catalog` and under Self-Service click Service Catalog. It lists the categories. Click Hardware, then open Replacement laptop in the list. (Employee Center, the portal, has no click route to this item on this instance, so the platform's Service Catalog is the route.)
12. Fill in the form as Priya: Laptop model and Reason already show their first choices (Standard 14 inch and End of life). Click the Needed by box and type a date as year, month and day, for example `2026-11-18`. Click Order Now. (End of life because her laptop has reached the end of its life; this is not the Wi-Fi issue.)
13. This route has no Order Confirmation or Checkout page. ServiceNow goes straight to the Order Status page, which says "Thank you, your request has been submitted" and shows the request number (REQ0010010 in the video; yours will differ). Click the item row, Order a new laptop for work, to open the requested item (RITM0010010 in the video). It opens in the Self Service view.
14. End the impersonation. Open the All menu, filter for `Requested Items`, open the list and open the row from your first order for Replacement laptop (RITM0010001 in the video; use the number your instance shows). From the form menu choose View, then Catalog. The form shows the Item, the Request REQ0010001, Requested for Priya Nair and who opened it. The Variables section shows the three answers: Standard 14 inch, End of life and the date (2026-11-16 in the video).

Result: a request and a requested item with numbers, and the three answers stored with the order. Your numbers may differ.

## Your turn

1. Add a 4th variable: on the item's Variables list click New, Type Yes / No (type `Yes` in the Type search), Question `PRACTICE monitor needed`. The Name fills itself as `practice_monitor_needed`; leave it. Leave Order empty (the list then shows this variable first). Click Submit: the item has Variables (4). Order again as Priya (the form shows PRACTICE monitor needed first, default Yes) and write down both order numbers (the REQ and the RITM).
2. Open Needed by on the Variables list, tick Mandatory and click Update. On the item form click Try It, then Order Now with no date: a red banner says "The following mandatory fields are not filled in: Needed by" and the date box is outlined in red (no order is created). Go back to the item, open Needed by, clear Mandatory and click Update.
3. Build an item called `PRACTICE software install`: on Maintain Items click New, Name `PRACTICE software install`, Short description `Install software`, then Save from the form menu. On Variables click New (the Type is already Single Line Text), Question `Software name`; the Name fills itself as `software_name`; click Submit. The item shows Variables (1).
4. Compare the request with its requested item and list the fields they share.

## Clean up

1. Delete the practice variable: open Replacement laptop, open PRACTICE monitor needed from Variables, click Delete and confirm (a confirmation lists its 2 options, which go with it). Replacement laptop is back to Variables (3): Laptop model 100, Reason 200, Needed by 300. Needed by is Mandatory off.
2. Delete `PRACTICE software install`: open it, click Delete and confirm. Its variable goes with it.
3. Delete only your practice orders by number: type the request number (for example REQ0010010) in the Search box in the header, choose the exact match, click Delete on the request and confirm. ServiceNow warns that the 1 requested item goes with it. Do this for each practice REQ you wrote down; the RITM is deleted with its request.
4. Check the Requested Items list: only the rows from the main steps (and the other episodes) remain. Keep Replacement laptop with its 3 variables and the REQ0010001 and RITM0010001 records from the main steps. Your own numbers will differ from the ones in the video.

## Previous and next

Previous: [Episode 06: Service level agreements](../06-sla)

Next: [Episode 08: Your first flow](../08-first-flow)
