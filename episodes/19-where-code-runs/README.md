<!-- draft until recorded: written from the storyline on 2 Nov 2026; menu names and values marked "confirm" are checked against the recording, then this note is removed -->
# Episode 19: Where code runs

Paths: D

In this episode you write your first lines of ServiceNow code and see where they run. The Equipment Loans app so far only stores what someone types; rules like "is this rig free" need code. A check in the browser can be skipped, a check on the server cannot, so you need to know where code runs.

New terms: script, server, browser (client), JavaScript, variable, object, function, Scripts - Background, gs.info, application access.

## Files in this folder

- [hello-glide.js](hello-glide.js): a variable, an object and a function, logged with `gs.info`.

## Before you start

- You finished [episode 18](../18-policies-and-packaging). The Equipment Loans application exists with its Rig and Loan tables.
- Sign in as `admin`.

## Steps

1. In Chrome open the developer tools (right-click the page, Inspect, Console). Type `console.log('hello from the browser')` and press Enter. This ran in your browser, and nothing was sent to ServiceNow. Close the tools.
2. Open the All menu, System Definition, Scripts - Background (confirm). It is the admin's workbench for running server code once; finished code lives in the application.
3. Set the scope picker to Equipment Loans so the script runs as part of the app. Optionally open the Rig table's Application Access tab to see what other scopes may do.
4. Open [hello-glide.js](hello-glide.js) on GitHub and click Copy raw file.
5. Read the file: the variable `daysOut`, the object `rig`, the function `describe` and the `gs.info` call.
6. Paste it into the script box and click Run script. The output shows a line starting `*** Script:` with the sentence.
7. Open the All menu, System Logs, System Log, All and filter Message contains `Oscilloscope 1`. The same message is stored with a time.

Result: the output panel and the log row show the same sentence; the browser console showed its own line, which the log does not.

## Your turn

1. Change the rig's `name` to `Oscilloscope 2` and `state` to `on_loan`; the sentence follows.
2. Change `daysOut` to 7.
3. Add a second function `rigLabel(aRig)` that returns the name and state in brackets and log `rigLabel(rig)`.
4. In the browser console type the same object as one line and print it with `console.log`. It does not appear in the System Log.

## Clean up

Nothing is stored. Paste the original file again to start fresh.

## Previous and next

Previous: [Episode 18: UI policy, data policy, and what moves an app](../18-policies-and-packaging)

Next: Episode 20, where you read the Loan table with a GlideRecord query.
