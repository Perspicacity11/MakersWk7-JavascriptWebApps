# The `NotesView` class

In the previous sections we've learned, with some examples:
  * how to modify the contents of the webpage using JavaScript code
  * how to write a JavaScript test that verifies the expected webpage content.

In this section, you'll **apply this new knowledge** continuing the work on the
notes app (started in sections 4 and 5).

We're now going to test-drive a new class `NotesView` which will be responsible to
reflect the model's data (the list of notes) on the page (by dynamically
creating HTML elements).

At the end of section 5 *(Test-driving the `NotesModel` class)*, you ended up
with the following code in the main file:

```js
// index.js
const NotesModel = require("./notesModel");

const model = new NotesModel();
console.log(model.getNotes());
```

## Exercise

You'll test-drive a new class `NotesView`, similar to the `View` class seen in
the previous example.

This class will:
  * have a constructor
      * the `model` should be dependency-injected into it.
  * have a method `displayNotes` which will:
      * get the list of notes from the model.
      * for each note, create a new `div` element on the page (with an HTML
        class `"note"`). 

You'll have to research how an HTML class can be set to an element in
JavaScript.

### Questions

1. Create a new test file `notesView.test.js` using the same scaffolding than in
   the previous section.
2. Write a test that:
    * create a new instance of `NotesModel` and adds two notes to it.
    * dependency-inject it in a new instance of `NotesView`.
    * call the `displayNotes` method.
    * asserts there should be two `div.note` in the document.
3. Now implement the `NotesView` class and its methods to make the test pass.

## Troubleshooting common problems

* If, when running the test, you're getting an error such as `document is not defined` or `Cannot read property 'appendChild' of null` — make sure you've setup the test like in the provided exemplar.
* If the number of elements returned by `document.querySelectorAll` is still
  zero after implementing the new method — did you make sure to set the HTML
  class `note` on the new elements?

<details>
  <summary>Reveal suggested walkthrough</summary>

  ```js
  // notesView.test.js

  /**
   * @jest-environment jsdom
   */

  const fs = require('fs');

  const NotesModel = require('./notesModel');
  const NotesView = require('./notesView'); 

  describe('Notes view', () => {
    it('displays two notes', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      // 1. Setting up model and view
      const model = new NotesModel();
      const view = new NotesView(model);
      model.addNote('A first note');
      model.addNote('Another one');
      
      // 2. Display the notes on the page
      view.displayNotes();

      // 3. There should now be 2 div.note on the page
      expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
  });
  ```

  ```js
  // notesView.js

  class NotesView {
    constructor(model) {
      this.model = model;
      this.mainContainerEl = document.querySelector('#main-container');
    }
    
    displayNotes() {
      const notes = this.model.getNotes()

      // For each note, create and append a new element on the main container
      notes.forEach(note => {
        const noteEl = document.createElement('div');
        noteEl.innerText = note;
        noteEl.className = 'note';
        this.mainContainerEl.append(noteEl);
      })
    }
  }

  module.exports = NotesView;
  ```
</details>

[Next Challenge](10_adding_new_note_2.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/09_adding_new_note.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/09_adding_new_note.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/09_adding_new_note.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/09_adding_new_note.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/09_adding_new_note.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
