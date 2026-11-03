# Episode 07: A catalog item

Paths: U A D

In this episode you build a catalog item called Replacement laptop, and Priya orders one. Priya's laptop is 5 years old and has reached the end of its life. By email, Sam has to ask three questions: which model, which reason, and by when. Every order becomes a long mail thread, and nothing says how many laptops were ordered this quarter. A catalog item asks the same three questions every time and creates a record that IT can count.

New terms: service catalog, catalog item, variable, question choice, user criteria, request (REQ), requested item (RITM).

## Before you start

- You finished [episode 06](../06-sla). Priya Nair exists.
- Sign in as `admin`.

## Steps

1. Create an update set: open the All menu, type `System Update Sets`, choose Local Update Sets, click New, name it `Arcwell ep07` and click Submit and Make Current.
2. Open the All menu, type `Service Catalog` and under Catalog Definitions choose Maintain Items (190 items in the video). Click New. A banner offers Catalog Builder; leave it alone and use this classic form.
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

   Save it from the form menu. Its Question Choices list appears.
6. On Question Choices click New and add two choices:

   | Text | Value |
   |---|---|
   | Standard 14 inch | standard_14 |
   | Performance 16 inch | performance_16 |

7. Back on the item, create the second variable on Variables with New: Type Select Box, Question `Reason`, Name `reason`, Order 200. Add the choices End of life, Damaged and New starter, each with a text and a value as for the laptop model. Submit.
8. Open the item again (Maintain Items, search for Replacement). Its Variables list shows 2 variables. Click New for the third: Type Date, Question `Needed by`, Name `needed_by`, Order 300. Click Submit. The item now lists Laptop model, Reason and Needed by.
9. Open the Available For tab. It has no records, so no limit is set: everyone who can reach the catalog can see the item. A user criteria record here would hide the item from Priya.
10. Open the user menu, choose Impersonate user, search for Priya Nair and click Impersonate user.
11. Open the portal from the All menu. In the video the portal search did not find the item, so browse instead: All Catalogs, then Hardware, then Show More. Open Replacement laptop.
12. Fill in the form as Priya: Laptop model Standard 14 inch, Reason End of life, Needed by a date two weeks ahead. Click Order Now. (End of life because her laptop is five years old; this is not the Wi-Fi issue.)
13. An Order Confirmation asks who the order is for and shows Priya Nair. Click Checkout. The order page shows the request, REQ0010001, with stage Waiting for Approval.
14. End the impersonation. Open the All menu, filter for `Requested Items`, open the list and search for RITM0010001. It opens in the Self Service view. From the form menu choose View, then Catalog. The form shows the Item, the Request REQ0010001, Requested for Priya Nair and who opened it. The Variables section shows the three answers: Standard 14 inch, End of life and the date (2026-11-16 in the video).

Result: a request and a requested item with numbers, and the three answers stored with the order. Your numbers may differ.

## Your turn

1. Add a fourth variable named `PRACTICE monitor needed` and order again as Priya. Write down the REQ and RITM numbers.
2. Make Needed by mandatory and try to order without a date. Then order with one.
3. Build an item called `PRACTICE software install` with a Single Line Text variable.
4. Compare the request with its requested item and list the fields they share.

## Clean up

Delete or cancel every practice record by its number. Delete the practice variable, turn Mandatory off on Needed by, and delete or deactivate `PRACTICE software install`. Keep Replacement laptop and the REQ and RITM from the main steps.

## Previous and next

Previous: [Episode 06: Service level agreements](../06-sla)

Next: [Episode 08: Your first flow](../08-first-flow)
