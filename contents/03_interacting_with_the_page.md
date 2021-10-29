# Interacting with the page

## Objectives

 * Understand how the DOM works.
 * Use the DOM JavaScript functions to manipulate a page content.
 * Use event listeners to handle user interaction on the page.

<!-- OMITTED -->

When the browser reads the HTML, it then displays a page that corresponds to the contents and structure declared in the HTML page. If CSS is used to apply styles on this structure, it will also turn into a full webpage with clearly defined sections, colours, fonts, text of different sizes, etc.

However an HTML webpage is, on its own, not doing much. We can define forms, and links to navigate to other pages, but this will merely reload the entire browser window on the new page. Most of the logic is happening on the server side, and the browser is only "passively" rendering whichever content the server is sending back.

JavaScript is used to bring interactivity to those webpages. Using JavaScript, we'll be able to modify a page dynamically, add and modify elements, and handle user interaction without having to rely on the server at all. The DOM (for Document Object Model) is the representation of the HTML page as a "tree" of elements.

## Exercise - using the DOM

Copy the following HTML code to a new file `index.html` and open it in your browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello, bundle</title>
</head>
  <body>
    <div class="post" id="post-1">
      A first post
    </div>
    <div class="post" id="post-2">
      A second post
    </div>
    <div class="post" id="post-3">
      A third post
    </div>
  </body>
</html>
```

In the browser console, we can type the following:

```javascript
> let element = document.querySelector('#post-1');
> element;

 <div class="post" id="post-1">A first post</div>
```

As you can see, the JS console returned a *representation* of the HTML element that we targeted using `querySelector` (most of the CSS selectors will work the same here — plain tag names for HTML tags, `#` for IDs, `.` for classes, etc).

The value in `element` now gives us a "handle" on the "real" HTML element that is displayed in the browser. By manipulating this variable, we can now interact with the element that is displayed. We can change the content, CSS style properties, clone it, or remove it from the page altogether. This value is called a `DOM element`, because it represents an element of the `DOM` (Document Object Model) of the page — the tree that represents the elements of the page and their hierarchy. 

To complete the following questions, you'll need to:
 * use the functions [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and `document.querySelectorAll` within the browser JS console.
 * use the `innerText` property of DOM elements.
 * use the functions `document.createElement` and `document.body.appendChild`
 * use the properties `.className` and `.id`
 * use only JavaScript code (you can't modify HTML elements using the browser's "Elements" tab)

### Questions

1. Change the content of the first `<div>` to be 'A first post refreshed by JavaScript'.
2. Define a function `getPostContents` that returns an array containing the three string contents inside the three `<div>` elements:

```javascript
> getPostContents();
[ 'A first post', 'A second post', 'A third post' ]
```

3. Define a function `addNewPost` that takes one argument and adds a new `<div>` element on the page, writing the received argument as the new content. Calling the following should make the HTML change (you can verify this in the "Elements" console tab)

```javascript
> addNewPost('A fourth post');
```

```html
<div class="post" id="post-1">
  A first post
</div>
<div class="post" id="post-2">
  A second post
</div>
<div class="post" id="post-3">
  A third post
</div>
<div>
  A fourth post
</div>
```

4. Our function `addNewPost` doesn't add yet the `class` and `id` attributes. Modify the code so it does. To generate the number in the `id` property, you could count the number of `post` already present on the page.

## Exercise - bundling 

Do the following in the directory used for the previous exercise: 

1. Write the function `addNewPost` into a file `addNewPost.js`. Then, in a file `index.js`, require this function and call it to add new post element on the page.
2. Setup the project directory with a `package.json` if not done already and add the required script to run esbuild (refer to the previous section if needed).
3. Run esbuild to generate a bundle file, and include this file on the HTML page.
4. Open the HTML page in your browser. There should be four `<div>` displayed.

## Exercise - testing with the DOM

We'll use Jest again, so let's add it to our project directory:

```
$ npm install jest
```

Let's create a file `addNewPost.test.js` in a `tests` directory in order to test our function `addNewPost`:

```javascript
// tests/addNewPost.test.js
const addNewPost = require('../addNewPost');

test('displays a post', () => {
  addNewPost();

  expect(document.querySelectorAll('.post').length).toBe(4);
});
```

When we run `jest`, something is not working. We get the following error message:

```
The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
Consider using the "jsdom" test environment

ReferenceError: document is not defined
```

That's because Jest is behaving by default in the "node" environment — without any webpage. Outside of the browser, the JS value `document` (and all its associated DOM functions) do not exist at all. Thankfully, we can tell Jest to run in a different mode "jsdom", in which Jest will *simulate* a browser page for us, so we can use the DOM functions in our tests.

1. Modify the test file so Jest [can run in the mode "jsdom"](https://jestjs.io/docs/configuration#testenvironment-string). Run the tests again to see a different output.

This time, we have another error, but it's different:

```
expect(received).toBe(expected) // Object.is equality

    Expected: 4
    Received: 0
```

The problem is that, unlike us, Jest doesn't use and browse the HTML webpage. Jest is only "seeing" the JavaScript code — but as far as it knows, the HTML document is totally empty. We need to tell Jest which HTML to use for the "test" page.

2. Set the property `document.body.innerHTML` to the initial HTML body content (the three `<div>` tags) so it looks like the HTML content of the body in our index file. If all the above worked, your test should now pass.

<details>
<summary>Reveal solution</summary>

```javascript
// tests/addNewPost.test.js
const addNewPost = require('../addNewPost');

test('displays a user after a click', () => {
  document.body.innerHTML = `<div class="post" id="post-1">
      A first post
    </div>
    <div class="post" id="post-2">
      A second post
    </div>
    <div class="post" id="post-3">
      A third post
    </div>`;

  addNewPost();

  expect(document.querySelectorAll('.post').length).toBe(4);
});
```

</details>


[Next Challenge](04_user_interaction.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/03_interacting_with_the_page.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/03_interacting_with_the_page.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/03_interacting_with_the_page.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/03_interacting_with_the_page.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/03_interacting_with_the_page.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
