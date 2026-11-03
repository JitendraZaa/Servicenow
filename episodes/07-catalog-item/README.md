# Episode 07: A catalog item

Paths: U A D

In this episode you build a catalog item called Replacement laptop, and Priya orders one. Priya's laptop has reached the end of its life. By email, Sam has to ask 3 questions: which model, which reason, and by when. Every order becomes a long mail thread, and nothing says how many laptops were ordered this quarter. A catalog item asks the same 3 questions every time and creates a record that IT can count.

New terms: service catalog, catalog item, variable, question choice, request (REQ), requested item (RITM).

## Before you start

- You finished [episode 06](../06-sla). Priya Nair exists.
- Sign in as `admin`.

## Steps

1. Create an update set (if you know Salesforce, an update set is like a change set: both carry configuration, not records, from one place to another): open the All menu, type `System Update Sets`, choose Local Update Sets, click New, name it `Arcwell ep07` and click Submit and Make Current.
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

   Type the Name once. If the box fills itself from the Question, clear it first so the name is not doubled. Save it from the form menu. Its Question Choices list appears.
6. On Question Choices click New and add two choices:

   | Text | Value |
   |---|---|
   | Standard 14 inch | standard_14 |
   | Performance 16 inch | performance_16 |

7. Back on the item, create the second variable on Variables with New: Type Select Box, Question `Reason`, Name `reason`, Order 200. Add the choices End of life (value `end_of_life`), Damaged (`damaged`) and New starter (`new_starter`): for each, click New, type the text and the value, and click Submit, which returns you to the Question Choices list.
8. Open the item again (Maintain Items, search for Replacement). Its Variables list shows 2 variables. Click New for the third: Type Date, Question `Needed by`, Name `needed_by`, Order 300. Click Submit. The item now lists Laptop model, Reason and Needed by.
9. Open the Available For tab. On this instance it has no records because we added no criteria. Next you check whether Priya can find and order the item.
10. Open the user menu, choose Impersonate user, search for Priya Nair and click Impersonate user.
11. Open Employee Center, a portal that gives employees access to services and information. In the video the portal search did not find the item, so browse instead: All Catalogs, then Hardware, then Show More. Open Replacement laptop. (The route from the portal's landing page to All Catalogs is not shown in the video; use the portal's own menu or catalog links on your instance.)
12. Fill in the form as Priya: Laptop model Standard 14 inch, Reason End of life, Needed by a date two weeks ahead. Click Order Now. (End of life because her laptop has reached the end of its life; this is not the Wi-Fi issue.)
13. An Order Confirmation asks who the order is for and shows Priya Nair. Click Checkout. The order page shows the request, REQ0010001, with stage Waiting for Approval.
14. End the impersonation. Open the All menu, filter for `Requested Items`, open the list and find the row for Replacement laptop. In the video its number is RITM0010001; use the number your instance shows. It opens in the Self Service view. From the form menu choose View, then Catalog. The form shows the Item, the Request REQ0010001, Requested for Priya Nair and who opened it. The Variables section shows the three answers: Standard 14 inch, End of life and the date (2026-11-16 in the video).

Result: a request and a requested item with numbers, and the three answers stored with the order. Your numbers may differ.

## Your turn

1. Add a 4th variable: Question `PRACTICE monitor needed`, Name `practice_monitor_needed`, Type Yes/No. Order again as Priya and write down both order numbers (the REQ and the RITM).
2. Make Needed by mandatory, try to order without a date, then turn Mandatory off again.
3. Build an item called `PRACTICE software install` with a Single Line Text variable.
4. Compare the request with its requested item and list the fields they share.

## Clean up

Delete the practice variable, turn Mandatory off on Needed by, and delete or deactivate `PRACTICE software install`. Delete or cancel only the practice REQ and RITM numbers you wrote down. Keep Replacement laptop with its 3 variables (Laptop model, Reason, Needed by) and the REQ0010001 and RITM0010001 records from the main steps. Your own numbers will differ from the ones in the video.

## Previous and next

Previous: [Episode 06: Service level agreements](../06-sla)

Next: [Episode 08: Your first flow](../08-first-flow)
