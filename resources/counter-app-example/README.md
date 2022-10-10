# A simple counter

This is a minimal example of a web frontend application built with JavaScript. The web page displays a counter value initialised at zero. A button allows the user to increment the counter, and the new value is shown on the page.

Note that the browser does not reload the page when we click the button — it is interactive, thanks to JavaScript (you can check the Network tab of the browser developer tools to verify this). This week, you'll learn how to build similar frontend applications, right into the browser.

## Setup

Clone the whole module repo first, then:

```bash
cd javascript-web-applications/resources/counter-app-example
```

Make sure to install `esbuild` and `jest` globally, and the project dependencies: 
```
nvm use node
npm install -g esbuild jest
npm install
```

Run `npm run build` — this will "compile" (or "bundle") the different JS files into a single bundled file, which is loaded by the browser.
```
npm run build
```

How to run the tests:
```
npm run test
```

Open `index.html` in your browser to use the app:

```
open index.html
```

Alternatively, you can also double click on it from the file explorer, and it should automatically open in your web browser.

## Discovering

Follow the flow of the code from the `index.js` file and do a quick diagram of
your understanding on how the different components interact together.

1. What happens when we call the method `display()`?
2. What happens when we click on the "Increment" button? Which part of the code
   is responsible for this?

## Where are messages logged?

JavaScript code loaded on a web page is executed in the browser context — rather than in a "terminal" context. This means that, for example, `console.log` messages are logged in the browser. However, when running tests with `jest`, we're still using the "terminal" environment, so developer messages will be logged there.

1. Call `console.log` somewhere the file `counterModel.js` (perhaps the constructor) to display some message — [verify it is logged in your browser's console](https://developer.chrome.com/docs/devtools/console/log/).
2. Run tests with the `jest` command — you should see your message now logged in the terminal as well.

## An exercise to go further

Create a new button "Decrement" on the page, and make the necessary changes in the different
components to handle this behaviour. To keep the code clean, you'll need to make
sure that:
  * the counter value is correctly decremented on the model.
  * all code that modifies the web page content is kept on the view.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=resources%2Fcounter-app-example%2FREADME.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=resources%2Fcounter-app-example%2FREADME.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=resources%2Fcounter-app-example%2FREADME.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=resources%2Fcounter-app-example%2FREADME.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=resources%2Fcounter-app-example%2FREADME.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
