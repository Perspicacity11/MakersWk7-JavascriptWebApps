# Interacting with the page (part II)

## Objectives

 * Explain what are [browser events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#a_simple_example)
 * Use event listeners to handle user interaction with DOM elements
 * Respond to events by updating the DOM

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
  console.log('The button was clicked!');
});
```

You'll note `addEventListener` accepts two arguments — the name of the event we want to "listen" to, and the callback function to execute when this event is triggered at a later point in the future. Note that without "attaching" this event listener, nothing will happen when we click the button.

After running the above JS code — either in the console or from a loaded file — you should be able to click the button and see the message in the console.

## Exercise - a counter

For this exercise, you may use the following HTML page to get you started:

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
2. Make sure that when the button is clicked, the counter is incremented to the next value. You might need to keep a variable in your JS code to hold the current value.

## Exercise - handling user interaction

This exercise builds on the code from the previous page (the list of posts). To complete the following, you'll need to: 
 * use the [`addEventListener` function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#adding_and_removing_event_handlers) on a DOM element that can "receive" user interaction.
 * use the `.value` property on a DOM element that represents a text input.

### Questions

1. Add a `<button>` on the page, just before the list of posts.
2. Add some code in the file `index.js` so, when the button is clicked, a new post is added — you shall use the function `addNewPost` here.
3. Try out the button in the browser and see if it works.
4. Add an `<input>` element (a text input field) on the page just before the button. 
5. Modify the event listener code in `index.js` so it uses the text entered in the text field as the new post content.

If you've completed all the above correctly, you should be able to: 
 * type something specific, like "My Javascript app is awesome" in the text field.
 * click on the button.
 * see a new post "My Javascript app is awesome" be added on the page, after the others.
 * repeat those three steps as much as you'd like, to keep adding new posts.

## Exercise - debugging

Someone from your cohort wrote the following code to add a new DOM element on their webpage: 

```javascript
let newElement = document.createElement('div')
newElement.innerText = 'Welcome to my website';
newElement.style.color = 'green';
```

However, the element is not displayed and the page stays blank. Can you see why?



[Next Challenge](05_using_fetch.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/04_user_interaction.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
