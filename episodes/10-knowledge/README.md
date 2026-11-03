# Episode 10: Knowledge articles

Paths: U A D

In this episode you write the Wi-Fi fix once as a knowledge article, publish it, and find it as Priya. Sam fixed Priya's Wi-Fi problem on Monday. On Thursday 3 more engineers call with the same problem and Sam explains it again, because the next engineer still asks him for the steps. A knowledge article is 1 page that answers 1 question, so it can be written once and then found by readers. If you know Salesforce Knowledge, articles work the same way: they are written, published, and then read by others.

New terms: knowledge base, article template, draft, publish, version, valid to date.

## Before you start

- You finished [episode 09](../09-approval). Priya Nair exists.
- Sign in as `admin`.

## Steps

1. Open the All menu, type `Knowledge`, and under Knowledge choose Articles, then Create New.
2. A page asks you to select a knowledge base, the shelf where articles are kept. The list shows KCS Knowledge Base, Known Error, IT and Knowledge. Choose `Knowledge`: on this instance it is the base Priya can read, and it publishes at once. (In the recording the IT base could not be read by employees, so it was not used.)
3. The page asks for a template. Choose `Standard` and click Next.
4. The form opens with a Number already filled in (KB0010002 in the video). Fill it in:

   | Field | Value |
   |---|---|
   | Short description | Fix Wi-Fi on Arcwell laptops |
   | Knowledge base | Knowledge |

   Leave Category empty and leave Valid to, the date the article expires, at its default (2100-01-01). Workflow shows Draft and is read only.
5. In the article body, under Blocks on the right click the Text component; a text box saying Insert your text here appears. Select that placeholder and type 3 numbered steps:

   1. Forget the Arcwell Wi-Fi network on the laptop.
   2. Turn Wi-Fi off, wait 10 seconds, and turn it on.
   3. Reconnect with the Arcwell company profile.

6. Click Save. The header reads the article number with version 0.01, and the Publish button appears (on this instance). Workflow shows Draft until you publish.
7. Click Publish. After a short wait a message says the knowledge article has been published and the version is 1.0.
8. Impersonate Priya Nair from the avatar menu. Priya's landing page opens.
9. Open the All menu, type `Knowledge` in the filter, and under Self-Service choose Knowledge. Knowledge Home opens: it says Welcome to Knowledge and counts 1 Knowledge Bases and 1 Articles.
10. In the search box type the exact title `Fix Wi-Fi on Arcwell laptops` and click the search icon. The page shows 1 result, your article.
11. Open the article from the result. It shows the number, the title, who authored it and the 3 steps.
12. Open the menu under Priya's avatar and choose End Impersonation.

Result: the article is published as version 1.0 and Priya finds it by its exact title.

## Your turn

1. Write your own short article in the Knowledge base with the title `PRACTICE Order a replacement laptop`, and publish it.
2. Impersonate Priya and find it by its exact title.
3. End the impersonation, open the All menu, choose My Knowledge Articles under Self-Service, open the row titled `PRACTICE Order a replacement laptop`, and click Delete. Retire is not needed. Confirm the dialog.

## Clean up

Delete only the practice article, as in exercise 3 (check the title: another article in the list can have a similar number). Keep `Fix Wi-Fi on Arcwell laptops` (KB0010002).

## Previous and next

Previous: [Episode 09: Approvals](../09-approval)

Next: [Episode 11: Notifications](../11-notifications)
