# Interacting with the page

## Objectives

 * Understand how the DOM works.
 * Use the DOM JavaScript functions to manipulate a page content.

<!-- OMITTED -->

In this section, you will **discover with an example** how we can use JavaScript
to interact with the elements in the web page. This system is called [the
Document Object Model (DOM)](https://javascript.info/dom-nodes).

## Downloading the exercise scaffold

You'll need to download [the provided exercise for this
section](../resources/example-2.zip). Unzip this in your projects directory and
open it in your code editor. Run the usual setup with `npm install`.

1. Have a look at the `index.html` file and notice the structure of the HTML
   page.
2. Now have a look at the `index.js` and `view.js` files and notice any new
   syntax inside. You'll also notice a test file `view.test.js` — ignore that
   one for now, we'll come back to it.
3. In your browser, open the HTML page and check the developer console to see
   what is logged.

The element `<div id="main-container"></div>` logged in the console is the value
inside the attribute `this.mainContainerEl`. It represents the corresponding
HTML element on the page — giving us a "handle" on that element.

By manipulating this variable, we can now interact with the element that is
displayed. We can change its content, its CSS style properties, clone it, or
remove it from the page altogether.

## Exercise - querying elements

Before moving ahead, let's get comfortable with querying elements on the page
and save them into JS variables. For this exercise, you will [type JavaScript
code directly into the developer
console](https://developer.chrome.com/docs/devtools/console/javascript/) (the
same place where `console.log` messages are showing), rather than writing that
code down in files.

**This exercise will require you to do some research on how to use:**
  * `document.querySelector` and `document.querySelectorAll`
  * the `.innerText` property

### Questions

Inside the developer console (staying on the same web page from the example
directory):

1. Store in a variable the DOM value representing the HTML element for the
   **second paragraph** (you can use its HTML ID to target it) and print it on
   the console. You should get the following result:
   ![Screenshot](./resources/dom-selector-1.png)
2. Update the `.innerText` property of this variable to change the value of this
   element. You should be able to see this change reflected on the page.
2. Store in a variable the DOM value representing the list of **all paragraphs**
   in the document, and print it on the console. You should get the following
   result: ![Screenshot](./resources/dom-selector-2.png)

### Troubleshooting common problems

 * Keep in mind `document.querySelector` will return a single element, whereas
 `document.querySelectorAll` returns an **array of elements**.

## A short note about HTML id and class and their selectors

You might know already (or not) that HTML elements can have `id` or `class`
attributes. An `id` is unique within the page, but many elements can have the
same `class`.

When using `document.querySelector`, we can use the CSS selector `#my-id` to
target the element with `id="my-id"`, and `.my-class` to target the element(s)
with `class="my-class"`.

You can read more about [using CSS selectors on
MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). Usually
all CSS selectors can be used with `document.querySelector`, etc. For this
module, you'll need only to know about the id and class selectors.

In the next section, you'll learn how we can add new elements on the page.

## Additional resources

 * [Introduction to the DOM —
   MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
 * [`document.querySelector` on
   MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

[Next Challenge](07_modifying_the_page.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_interacting_with_the_page.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_interacting_with_the_page.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_interacting_with_the_page.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_interacting_with_the_page.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_interacting_with_the_page.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
