# Setting up the notes app project

## Objectives

  * Setup a JavaScript frontend web project.

## Intro

Let's go over what you've learned in the previous sections:
 * How different JavaScript files can be bundled into one single file.
 * How this bundle file is loaded by the HTML page.
 * How to log messages and variables printed using `console.log`.

You will now **apply what you've learned** to create the project directory of
the web application you'll build for the rest of this module, a small
**notes-taking app.**

## Demonstration

Here is a [video demonstration](https://youtu.be/afS2gHsqNqc?t=66) of setting up a project.

## Challenge

To complete this first task you'll need to:
 1. Initialise a new project directory called `notes-app`, [following this guidance](../pills/setup_minimal_frontend_webapp.md) (or watching the video above).
 2. Update the contents of `index.html` so it contains the following HTML code:
 ```html
   <!doctype html>
   <html>
      <head>
         <title>Notes app</title>
      </head>
      <body>
         <h1>Notes app</h1>
         <div id="main-container">

         </div>
      </body>
   </html>
 ```
 3. Update the contents of the main JS file, so it prints to the console `'The
    notes app is running'`.
 4. Make sure `npm run build` is running somewhere.
 5. Make sure the bundle file `bundle.js` is loaded on the HTML page.
 6. Open the web page with your browser:
   ```
   open index.html
   ```
 7. Verify the message is correctly
    printed in the developer console.

### Troubleshooting

 * If running `npm run build` yields an error `missing script: build`, make sure you've configured your file `package.json`, as [described here](../pills/setup_minimal_frontend_webapp.md#4-add-the-build-script-to-packagejson)

[Next Challenge](04_test_driving_notes_class.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F03_notes_app_scaffold.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F03_notes_app_scaffold.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F03_notes_app_scaffold.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F03_notes_app_scaffold.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F03_notes_app_scaffold.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
