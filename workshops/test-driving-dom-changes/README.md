# Test-driving changes to the DOM

## Learning objectives
 * Test-drive code that manipulates the DOM — i.e that changes the page.
 * Simulate user interaction (e.g a click) in our tests and assert the correct behaviour.

## Intro

This workshop builds on the DOM manipulation one — it's important that you're comfortable with these few things before starting this workshop:
 * What the DOM is and how we use it change the page.
 * How to use `.querySelector` and its friends to modify the page.
 * How to react to user events by using event listeners.

We can test-drive code that manipulates the DOM and uses event listeners with Jest:

```js
// file: todoView.test.js

/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const TodoView = require('./todoView');

describe('TodoView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('has zero todo items by default', () => {
    const _todoView = new TodoView();

    // Assert there are zero div.todo-item on the page
  });
});
```

## Exercise 1 (30min)

1. Test-drive a new method `addTodoItem(itemText)` on the class `TodoList` - it should add a new item `div.todo-item` on the list. Follow these steps:
    * Add a new test case to `todoView.test.js`
    * Write the missing implementation in `todoView.js`

2. Test-drive a new method `reset()` on the class `TodoList`  it should remove all the `div.todo-item`. Follow these steps:
    * Add a new test case to `todoView.test.js`
    * Write the missing implementation in `todoView.js`

## Mid plenary

## Exercise 2 (20min)

Write a test that verifies that when the `button` on the page is clicked, a new todo item is shown on the page.
 * Add a new test case to `todoView.test.js`.
    * You can use `buttonElement.click()` in the test to simulate a click on the button.
 * Write the missing implementation in `todoView.js` so it works.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Ftest-driving-dom-changes%2FREADME.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Ftest-driving-dom-changes%2FREADME.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Ftest-driving-dom-changes%2FREADME.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Ftest-driving-dom-changes%2FREADME.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Ftest-driving-dom-changes%2FREADME.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
