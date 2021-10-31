# JavaScript and the browser

## Objectives

 * Load a JavaScript file in the browser.
 * Use the browser JS console.

<!-- OMITTED -->

## Exercise - a webpage with JavaScript

The simplest way to run some JavaScript code on a page is using the `<script>` HTML tag.

1. Copy the following HTML code inside a new file `index.html`:

```html
<!doctype html>
<html>
    <head>
        <title>Hello JavaScript</title>
    </head>
    <body>
        <script type="text/javascript">
            console.log('Hello the web!');
        </script>
    </body>
</html>
```

2. Open that page with your browser. [Use the browser's developer console to verify that the message is correctly logged](https://developer.chrome.com/docs/devtools/console/)
3. Change the message and refresh the page, and see the new message being printed in the console.

## Exercise - loading an external script.

We can also load an external JS file using the `<script>` tag. Consider the following JavaScript code:

```javascript
// main.js

let result = 2 * 3;
console.log(`The result is ${result}`);
```

1. Copy this code into a file `main.js`. 
2. In the same directory than this file, create an HTML file `index.html`, containing a basic HTML 5 skeleton. Open this page with your web browser.
3. Use [a script tag to load the file `main.js`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#examples) inside the webpage. Once you've updated the code, reload the page and check that the message is printed to the console.

## The Developer Console

As you found in the previous exercise, using `console.log` in the browser is behaving differently than when running JS in node. Any output is printed to the browser developer console, so remember to have it open at all times when developing with JS in the browser — or at least, to know the shortcut to be able to quickly open it (`Option`+`Command`+`J` on Mac)!

## About code snippets

In this module, some examples will present code to be executed in the browser console — this code will be written with lines starting with prompt indicators (`>`) indicating what should be typed, and other lines what should be printed.

Other code examples without prompt indicators at all should be written to JavaScript files. Lines starting with `$` will indicate commands to type in the terminal.

**Note that the browser can be very fussy about the `<script>` tag syntax** — if your JS code doesn't seem to execute at all, always verify that the `type` and `src` attributes are correct, and that the tag is closed *with a closing tag*, not the shorter syntax e.g `<script ... />`:

```html
// correct
<script src="src/js/index.js" type="text/javascript"></script>

// incorrect
<script src="src/js/index.js" type="text/javascript" />
```

## Backend and Frontend

It's really important that you make the distinction between the code that runs on a web server ("backend") and the code that runs on the user's browser ("frontend"). It's even more important in JavaScript - since we use the same language on both sides, it's even easier to get confused and to mix up things. You'll usually run both on a same machine (your computer), which makes it easier to forget those are two separate things, usually running on two different machines.

A good rule of thumb to have, when you're not sure, is to consider any JS code that is run with `node` and outputs on the terminal as the *backend* code, and any code that will run inside the browser and outputs on the browser's console as the *frontend* code.

It's also worth noting that the backend and frontend **can only communicate using HTTP requests** (using `fetch` or similar — as we'll see later). You must assume frontend and backend won't run on the same machine (frontend is running on the user's computer, backend on the application/website server). Therefore, HTTP requests are the only way for those two sides to exchange data.

This week, most of the code we'll write will run in the browser, so it could be considered as *frontend* code, and will communicate with a *backend* at some point. But remember to keep those things in the back of your head, and to always have in mind *where* should go the code you have to write.

[Next Challenge](02_build_tool.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/01_javascript_browser.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/01_javascript_browser.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/01_javascript_browser.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/01_javascript_browser.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/01_javascript_browser.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
