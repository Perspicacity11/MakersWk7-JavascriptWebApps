# Workshop: Manipulating the DOM

## Learning objectives

  * Explain at a high-level what is the DOM (Document Object Model) and how we can use it with JS
  * Query DOM elements with JS using `document.querySelector`
  * Modify the page content
  * Listen to user events and respond by changing the page

## Intro

Discussion:
  * What is the DOM?
  * What are the DOM "tree" and elements (also called nodes)?
  * Why do we use it? 

DOM manipulation and responding to user events on the page are the basics of how dynamic, JavaScript-powered web applications work — so they are important concepts.

## Example

Make sure the repo is cloned to your machine first.

```bash
cd javascript-web-applications/workshops/manipulating-the-dom/exercise
npm install
npm run build
```


Demonstration:
  * How to "query" one DOM element (node) and store it in a JS variable
  * What is a selector?
  * How to query using ids and classes
  * How to change the content of an element

```js
const myElement = document.querySelector('div#my-element');
```

## Exercise (20 min)

**You should not update the HTML code in `index.html` for this exercise - only use JavaScript**

For this exercise, you might have to research:
  * how to create a new DOM element
  * how to append an element in the DOM tree
  * how to set the `class` for a new DOM element

In pairs, write code in the `todoView.js` file to:
  * Change the second item's text to `"Renew gym membership and go to the gym!"`
  * Add a new todo item on the list (with the text of your choice!)
  * Loop through all the todo item elements (hint: use the class selector for this) and change each item's text prefixing it by `"TODO: "`.

## Mid plenary
  * What did you learn?
  * What was challenging?

## Event listeners

We can also "react" to user events on the page. For example, we can attach a callback function to be called when a user "clicks" on a page element.

The simplified process of how it happens:

```js
// 1. This is the element we'd like to listen events on
const myButton = document.querySelector('button#my-button');

// 2. We attach a listener on 'click', 
//    specifying a callback function
myButton.addEventListener('click', () => {

  // 3. Whenever the user clicks on the element (it might never happen!), the callback will be executed
  console.log('clicked!');
});
```

## Demonstration

Let's log a message in the console when we click on the "Add todo item" button.

## Exercise (20 min)

In pairs, write code in the `todoView.js` file to:
  * Attach a listener on 'click' to the button, so a new todo item is added on the page
  * Add a new button in the HTML page called "Clear all" (you might duplicate the existing one - don't forget to change the `id` too)
  * Attach a listener on 'click' to that new button, so all todo items are removed from the page.

## Plenary


## Going further
 * [Learn how to encapsulate this code into a "View" class.](../../pills/manipulating_dom_with_javascript.md#how-to-encapsulate-inside-a-"view"-class)
 * [Learn how to test-drive code that updates the DOM.](../../pills/manipulating_dom_with_javascript.md#how-to-test-javascript-code-that-changes-the-web-page)
 * [Manipulating documents on MDN — this is a longer one](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Fmanipulating-the-dom%2FREADME.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Fmanipulating-the-dom%2FREADME.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Fmanipulating-the-dom%2FREADME.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Fmanipulating-the-dom%2FREADME.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=workshops%2Fmanipulating-the-dom%2FREADME.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
