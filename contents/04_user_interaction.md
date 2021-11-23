# Interacting with the page (part II)

## Objectives

 * Explain what are [browser events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#a_simple_example)
 * Use event listeners to handle user interaction with DOM elements
 * Respond to events by updating the DOM
 * Test user interaction with Jest

<!-- OMITTED -->

So far, we've only modified the page directly, using functions and properties such as `.querySelector` and `.innerText` to interact with the DOM. But what if we want to do something *only when* the user performs a particular action?

Let's say there is a button a page, such as this one:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A button</title>
  </head>
  <body>
    <button id="click-button">Click me!</button>
  </body>
</html>
```

We might want to do something (let's say, for now, just printing out something in the console) when the button is clicked. In order to implement this, we need to handle *events*. An event is something that happens on the page (a click, a key stroke, the mouse moving...). Using events can be really powerful, as we can then let the user interact with elements of a custom UI, implement actions on mouse moves, such as drag and drop, form validations, etc.

We can ask JavaScript to register a function as callback so, when this event happens, our code is executed. This can be done using the function `addEventListener` on a DOM element. We could use the following code for the HTML button above:

```js
const button = document.querySelector('#click-button'); // getting the button with HTML id "click-button"
button.addEventListener('click', () => {
  // this callback function will execute only when the event is triggered
  console.log('The button was clicked!');
});
```

You'll note `addEventListener` accepts two arguments — the name of the event we want to "listen" to, and the callback function to execute when this event is triggered at a later point in the future. Note that without "attaching" this event listener, nothing will happen when we click the button.

After running the above JS code — either in the console or from a loaded file — you should be able to click the button and see the message in the console.

## Exercise - a counter

For this exercise, initialise a new project directory `counter`, and use the following `index.html` HTML page to get you started:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
  </head>
  <body>
    <span id="counter">0</span>
    <button id="inc-button">Increment</button>

    <script src="bundle.js" type="text/javascript"></script>
  </body>
</html>
```

You'll also need to:
 * use `esbuild` to bundle your JS file into a bundle.js
 * use `.querySelector` and `.innerText` to manipulate the DOM
 * use `.addEventListener` for the "click" event

### Questions

1. Write the JS code to update the text value in the counter `<span>` element to "1". Be careful of modifying only the inner text, not the element itself.
2. Now add an event listener on the HTML button so when it is clicked, the counter is incremented to the next value. You might need to keep a variable in your JS code to hold the current value. Remember that the counter and the button are two different HTML elements, so you'll likely need two different variables to hold the counter and the button.

<details>
  <summary>Reveal suggested solution</summary>

  1. Updating the counter on button click
  ```js
  // index.js

  let counter = 0; // using let, since we'll update this variable
  const counterEl = document.querySelector('#counter');
  const incrementButton = document.querySelector('#inc-button');

  incrementButton.addEventListener('click', () => {
    counter += 1;
    counterEl.innerText = counter;
  });
  ```
</details>

## Exercise - testing user interaction

We now want to write Jest tests for the counter page, to verify that a click on the button increments the counter and that the result is reflected on the page. Before getting back to work on the counter, this exercise will introduce how we can test the response to user interaction with Jest.

Here's an example of how such a test can be written. In this example, when the HTML button (with id `button`) is clicked, we want to test that the HTML paragraph (with id `message`) contained in the document is going to contain the text "Hello, Jest".

```js
/**
 * @jest-environment jsdom
 */

test('displays a user after a click', () => {
  // Set up our document body
  // (remember this value "mocks" our HTML page so Jest can use it)
  document.body.innerHTML = `<div>
      <button id="button">Display message</button>
      <p id="message"></p>
    </div>`;

  // Simulate a click on our button
  const button = document.querySelector('#button');
  button.click();

  // And assert that the paragraph's innerText has changed
  expect(document.querySelector('#message').innerText).toBe('Hello, Jest');
});
```

And here's the HTML code for the page `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter</title>
  </head>
  <body>
    <div>
      <p id="message"></p>
      <button id="button">Display message</button>
    </div>

    <script src="index.js" type="text/javascript"></script>
  </body>
</html>
```

To complete this exercise, you'll need to:
 * Write JavaScript code to handle user interaction with an event listener.
 * Use `.innerText` to modify an element's content.

### Questions

1. Initialise a new project directory `display-message` with `npm -y` and install Jest.
2. Copy the contents of the test file above in a file `displayMessage.test.js`, and the HTML page content in `index.html`.
3. Run `jest` — the test should fail, as so far we have no code handling the interaction on the button to modify the contents of the paragraph (you can open `index.html` in your browser and try it for yourself — nothing happens)

```bash
● displays a user after a click

    expect(received).toBe(expected) // Object.is equality

    Expected: "Hello, Jest"
    Received: undefined
```

4. Write the contents of `index.js` to make this test pass — don't forget to require the file in the test file (right after setting `document.body.innerHTM`), as Jest also needs to "know" about it:

```js
// in displayMessage.test.js
document.body.innerHTML = `<div>
      <button id="button">Display message</button>
      <p id="message"></p>
    </div>`;

require('./index');
```

5. Once your code is written, the test should pass. You should also be able to open `index.html` in your browser and see it working.

<details>
  <summary>Reveal suggested solution</summary>

  ```js
  // index.js

  const button = document.querySelector('#button');
  const paragraph = document.querySelector('#message');

  button.addEventListener('click', () => {
    paragraph.innerText = 'Hello, Jest';
  });
  ```
</details>

## Exercise - testing the counter

Let's go back to the counter exercise — we're going to write a test to verify that the counter value is incrementing when the increment button is clicked. You should work on the following questions in the same project directory used for that exercise (the `counter` directory).

1. Install Jest in this project, if not done already.
2. In a test file `counter.test.js`, use what you've learned in the previous exercise to write a test case — it should assert that *clicking on the increment button does increment the counter element*
3. This test should pass (you shouldn't have to modify the contents of `index.js`). The counter should still be incremented normally when running in the browser.

<details>
  <summary>Reveal suggested solution</summary>

  ```js
  // counter.test.js

  /**
  * @jest-environment jsdom
  */

  test('displays a user after a click', () => {
    // Set up our document body
    document.body.innerHTML = `<div>
        <span id="counter">0</span>
        <button id="inc-button">Increment</button>
      </div>`;

    require('./index');

    // Simulate two clicks on our button
    const button = document.querySelector('#inc-button');
    button.click();
    button.click();

    // Assert that the counter has changed to 2
    expect(document.querySelector('#counter').innerText).toBe(2);
  });
  ```
</details>

## Exercise - handling user interaction

This exercise builds on the code from the previous page (the list of posts). To complete the following, you'll need to: 
 * use the [`addEventListener` function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#adding_and_removing_event_handlers) on a DOM element that can "receive" user interaction.
 * write a test simulating user interaction on the DOM, like on the previous exercises.

### Questions

1. Add a `<button id="add-post-btn">Add post</button>` on the HTML page, just before the list of posts.
2. In the file `addNewPost.test.js`, also add this button to the HTML code set to `document.body.innerHTML`. Remember this HTML "mirrors" or "mocks" the HTML code on our index page, for Jest to use.
3. Modify the test so, instead of directly calling the function `addNewPost`, it simulates a click on the button `#add-post-btn` instead. At this point, the test should now fail — we need to implement the event listener on the button.
4. Write some code in the file `index.js` so, when the button is clicked, a new post is added — you shall use the function `addNewPost` that you previously wrote here.
5. The test should now pass. Try out the button in the browser as well, and see if it works (it should add a new post on the page when you click it).

## Exercise - adding an input

This is building, again, on the previous exercise. To complete the following, you'll need to: 
 * use the `.value` property on a DOM element that represents a text input.

1. Add an `<input>` element (a text input field) on the page just before the button. 
2. Modify the event listener code in `index.js` so it uses the text entered in the text field as the new post content.

If you've completed all the above correctly, you should be able to: 
 * type something specific, like "My Javascript app is awesome" in the text field.
 * click on the button.
 * see a new post "My Javascript app is awesome" be added on the page, after the others.
 * repeat those three steps as much as you'd like, to keep adding new posts.

<details>
  <summary>Reveal suggested solution</summary>

  1. The file `index.js`:
  ```js
  const addNewPost = require('./addNewPost');

  const buttonEl = document.querySelector('#add-post-btn');
  const inputEl = document.querySelector('input');

  buttonEl.addEventListener('click', () => {
    const newTitle = inputEl.value;
    addNewPost(newTitle);
  });
  ```

  2. The file `addNewPost.test.js`:
  ```js
  /**
  * @jest-environment jsdom
  */

  test('displays a user after a click', () => {
    document.body.innerHTML = `<button id="add-post-btn">Add post</button>
      <div class="post" id="post-1">
        A first post
      </div>
      <div class="post" id="post-2">
        A second post
      </div>
      <div class="post" id="post-3">
        A third post
      </div>`;

    require('./index');

    // addNewPost();
    const button = document.querySelector('#add-post-btn')
    button.click();

    expect(document.querySelectorAll('.post').length).toBe(4);
  });
  ```
</details>


[Next Challenge](05_using_fetch.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
