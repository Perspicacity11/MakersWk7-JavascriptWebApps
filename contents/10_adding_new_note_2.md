# Showing notes on the page

In the previous section, we've test-driven the `NotesView` class that takes care
of creating new elements on the page for each notes in the model. In this
section, we'll use this class in the main file so it works when opening the web
page in the browser.

## Exercise

Remember to make sure the task `npm run build` is still running in a terminal —
otherwise your changes will have no effect on the page.

### Questions

1. In the main file:
    * Setup the `NotesView` like in our test, injecting the `model` into it.
    * Add a new note `'This is an example note'` to the model.
    * Call the `displayNotes` method.
2. Refresh or re-open the HTML page. You should see the note `This is an example
   note` displayed on the page.

![The note is displayed on the page](./resources/display-notes-1.png)

<details>
  <summary>Reveal suggested walkthrough</summary>

  ```js
  // index.js
  const NotesModel = require("./notesModel");
  const NotesView = require("./notesView");

  // 1. Setup the model with one note
  const model = new NotesModel();
  model.addNote('This is an example note');

  // 2. Setup the view
  const view = new NotesView(model);

  // 3. Make the view display notes
  view.displayNotes();
  ```
</details>

## Diagram

Here's a diagram representing the relationship between the two classes we have so far (the model and view classes), and how it impacts what the user sees on the page.

![](./resources/diagram-adding-new-note-1.png)

In the last exercises, we've seen how we can dynamically update the page content
to display the state of our program. In the next section, we'll see how we can
also react to user interaction, to allow the web page user to modify the program
state.


[Next Challenge](11_user_interaction.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/10_adding_new_note_2.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/10_adding_new_note_2.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/10_adding_new_note_2.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/10_adding_new_note_2.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/10_adding_new_note_2.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
