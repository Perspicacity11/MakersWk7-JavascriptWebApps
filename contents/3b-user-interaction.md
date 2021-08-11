# Interacting with the page (part II)

## Exercise - handling user interaction

This exercise builds on the code from the previous one. To complete the following, you'll need to: 
 * use the `addEventListener` function on a DOM element that can "receive" user interaction.
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