# Responding to user actions on the page

*If you're not comfortable with querying DOM elements on the page yet, you might want [to read this first](./manipulating_dom_with_javascript.md).*

This page contains concise guidance on how to respond to user interaction on the web page, using JavaScript code. This includes, for example, running some specific piece of code whenever the user clicks on a button, a part of the page.

You may want to read or just skim through this page, or use the index below to quickly search for what you need.

## Index

 * [How to attach event listeners on DOM elements](#event-listeners)
 * [What other events can I use?](#what-other-events-can-i-use)
 * [How to encapsulate code inside a "View" class](#how-to-encapsulate-inside-a-"view"-class)
 * [How to handle user input in forms](#how-to-handle-user-input-in-forms)
 * [How to write tests for this?](#how-to-write-tests-for-event-listeners)
 * [Exercises to go further](#exercises-to-go-further)

## Event listeners

In JavaScript, we can attach what is called an event listener to a DOM element. The "listener" is a function that will be called whenever the event "happens".

For example, we can attach a function to be executed whenever the user clicks on the button having the HTML ID `#my-button` (if you're not sure of what an HTML ID is, or how to use it, [read this first](./manipulating_dom_with_javascript.md#get-one-element-by-its-html-id)):

```js
// 1. Getting the DOM element
const buttonEl = document.querySelector('#my-button');

// 2. Attaching the event listener
buttonEl.addEventListener('click', () => {
  // this will execute when the user clicks on the button
  console.log('clicked!');
});
```

If we don't need to use the variable referencing the DOM element again, we can use this more concise syntax:
```js
document.querySelector('#my-button').addEventListener('click', () => {
  console.log('clicked!');
});
```

Note that if the user clicks **before** the event listener has been "attached" (i.e before `addEventListener` has been called), the event will not be handled at all.

```js
// This function will attach the event listener when called 
const attachListener = () => {
  document.querySelector('#my-button').addEventListener('click', () => {
    console.log('clicked!');
  });
}

// If the user clicks on the button now, nothing will happen (yet)

// ...

// Later, we call the function defined previously
attachListener();

// The click is now handled

```

## What other events can I use?

There are [an enormous number of events](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)
available for us to listen for, everything from mouse clicks, key strokes
and scrolling, to rotating your device, printing the page or even plugging
in a gamepad! But in this guidance, we'll stick to clicks.

## How to encapsulate inside a "View" class

If you're not familiar encapsulating JavaScript code that changes the DOM into a "View" class, you might want to [read the guidance on this first](./manipulating_dom_with_javascript.md#how-to-encapsulate-inside-a-"view"-class).

Like code that changes DOM on the page, code that "listens" for user events (e.g mouse clicks, keyboard strokes, etc.) can be encapsulated into a class for better separation of concerns.

Let's say we have the following HTML page:

```html
<!-- file: index.html -->
<html>
  <head>
    <title>A simple counter</title>
  </head>
  <body>
    <!-- the counter value -->
    <span id="counter"></span>

    <!-- the button to increment -->
     <button id="increment-button">Increment</button>

    <script type="text/javascript" src="bundle.js" ></script>
  </body>
</html>
```

Here is an example of a `CounterView` class, which simply displays the initial value `0` inside the element `#counter` on the page. It doesn't handle any user interaction so far:

```js
// file: counterView.js

class CounterView {

  // constructor() is executed when the instance is created,
  // so the value is immediately displayed as soon
  // as we call `new CounterView()`
  constructor() {
    document.querySelector('#counter').textContent = '0';
  }
}

module.exports = CounterView;
```

```js
// file: index.js
const CounterView = require("./counterView");

const counter = new CounterView();
```

To allow the program to respond to user interaction, we can attach an event listener in the `constructor` — whenever the user clicks the "Increment" button, we'd like to increment the current value by 1.

```js
// file: counterView.js

class CounterView {

  // constructor() is executed when the instance is created,
  // so the value is immediately displayed as soon
  // as we call `new CounterView()`
  constructor() {
    document.querySelector('#counter').textContent = '0';
    document.querySelector('#increment-button').addEventListener('click', () => {
      const currentValue = document.querySelector('#counter').textContent;

      // .textContent returns a string, so we make sure it's converted
      // to a number before incrementing, otherwise we'd get weird results!
      const newValue = parseInt(currentValue) + 1;

      document.querySelector('#counter').textContent = String(newValue);
    });
  }
}

module.exports = CounterView;
```

You can download the [project directory containing the HTML and JavaScript code explained above here](./counter-events-example.zip). 

## How to handle user input in forms?

We can also use JavaScript to grab data entered by user in form inputs — this can be text inputs, but also other controls (checkboxes, option dropdowns, etc). If you're curious, a comprehensive [list of the different HTML form elements can be found here](https://www.w3schools.com/html/html_form_elements.asp).

But let's focus on the JavaScript part — consider the following HTML text input and button:

```html
<input type="text" name="player-name">
<button>Play!</button>
```

We want to use JavaScript code to handle the button click, and get the value typed in by the user in the field, so we can do something useful with it. First, let's add some HTML ids to these two elements, so it's easier to `querySelector` them with JavaScript:

```html
<input type="text" name="player-name" id="player-name">
<button id="play-button">Play!</button>
```

From reading the previous sections, we already know how to handle a user click on the button, using an event listener:

```js
document.querySelector('#play-button').addEventListener('click', () => {
  // do something
});
```

We now need to:
 * `querySelector` the input element (like any other HTML element, it's part of the page DOM tree)
 * use the `.value` attribute to access the current value

```js
document.querySelector('#play-button').addEventListener('click', () => {
  const inputElement = document.querySelector('#player-name');

  console.log(inputElement.value); // should log the currently typed player name 
});
```

We can now use this value however we want, for example we could...
 * manipulate the DOM to show this value elsewhere on the page
 * perhaps transform it, or do some useful computation with it, before changing the page
 * save it somewhere, send it as part of an HTTP request to a server with `fetch` (you'll learn about this later), etc.

What if we want to "reset" the input field so it becomes empty again? Well, we can also **set** the `.value` attribute, not only read it:

```js
// this will clear the HTML input on the page
inputElement.value = '';

// we can actually set whatever value we want on this input too!
inputElement.value = 'Hey, I was typed in by a robot!';
```

## How to write tests for event listeners?

Make sure that [you're comfortable with writing Jest tests for code that updates the page](./manipulating_dom_with_javascript.md#how-to-test-javascript-code-that-changes-the-web-page), before reading this section.

Remember that Jest keeps its own "version" of the web page in memory — like a browser. This includes event listeners that are attached to DOM elements. If an event listener is attached by our "View" class(es), that listener will also be called in our tests.

In a test, we can simulate the click of a button on an element, and then assert the correct behaviour (perhaps the page needs to change in a certain way after this click).

For example, this is how we would test the code in `CounterView` works — following the Arrange, Act, Assert scaffold:
  * Arrange - load the HTML and instantiate the `CounterView` class.
  * Act - simulate the click on the button
  * Assert - check the page has correctly changed, according to the behaviour we expect.

```js
/**
 * @jest-environment jsdom
 */

// file: titleView.test.js

const fs = require('fs');
const CounterView = require('./counterView');

describe('Counter view', () => {

  // ...

  it('increments the value to 1', () => {
    // 1. Arrange - load the HTML so Jest can build its own DOM tree 
    // and instantiate our View class
    document.body.innerHTML = fs.readFileSync('./index.html');    
    const view = new CounterView();

    // 2. Act - click on the increment button
    const button = document.querySelector('#increment-button');
    button.click();

    // 3. Assert - using querySelector,
    // we get the DOM element and assert its content (should be '0')
    const counterEl = document.querySelector('#counter');
    expect(counterEl.textContent).toBe('1')
  });
});
```

What about testing form inputs? We can also use the `.value` attribute (both to access form values and to set them) in our tests. This way we can either...
 * get current input values to check them
 * set input values - to simulate the user typing in some text

## Exercises to go further

Before diving into these, make sure that you're read the sections above, and that you also know how to [bundle JavaScript source code into a bundle file](../contents/02_build_tool.md).

1. Using the tests and code already present in the directory, test-drive a new button that will decrement the counter value. You should follow these steps:
    * Add a new "Decrement" button in the HTML page.
    * Write a new test in `counterView.test.js` — it will be similar to the second one already present in this file, but this time, it should test for decrementing the value.
    * Implement the missing code in `CounterView`

2. Using the same process, implement a new button to reset the counter value back to 0.

3. After reading the section above on [how to handle user input](#how-to-handle-user-input-in-forms), add a new text input on the page, to allow the user to type in any numeric value they'd like. There should also be a button to submit this value, and set the counter's current value to it.

## Further challenge - extracting the counter value

So far, whenever we increment (or decrement) the counter value, we read the current displayed value from the page, calculate the new value, and displays it on the page. 

It works, but this is not great — ideally, we'd like to have a single "source of truth" for the current counter value, that doesn't rely on the page content. The user can mess with the HTML code, change things, etc, and this would break our counter program.

1. In the `CounterView`'s constructor, sets a new attribute to store the counter value (initialised to 0). Whenever the user increments or decrements the value, make sure this attribute is updated, and shows this value on the page instead.

2. Our `CounterView` class is doing two things now — managing the state (the counter's value), and interacting with the page (DOM changes and user interaction). For better separation of concerns, we can extract further the first concern into a new class `CounterModel`, that will provide methods to get the current value, and increment or decrement it:

```js
const model = new CounterModel();
model.get(); // returns 0

model.increment(); 
model.get(); // now returns 1
```

Once extracted, you should be able to use the two classes `CounterView` and `CounterModel` like this:

```js
// file: index.js

const CounterModel = require("./counterModel");
const CounterView = require("./counterView");

const model = new CounterModel();

// We inject the model, so the
// model's methods can be called by the view.
const counter = new CounterView(model);
```




<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=pills%2Fresponding_to_user_actions_on_page.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=pills%2Fresponding_to_user_actions_on_page.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=pills%2Fresponding_to_user_actions_on_page.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=pills%2Fresponding_to_user_actions_on_page.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=pills%2Fresponding_to_user_actions_on_page.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
