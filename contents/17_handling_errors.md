# Handling network errors

## Objectives

 * Handle network errors from `fetch`

## Intro

Sometimes the network will be unreliable or slow — maybe the server will return an error, or maybe the user's internet connection will drop entirely. When this happens, our application needs to handle errors so we're able to *at least* communicate that something went wrong.

<!-- OMITTED -->

## Exercise

The notes backend server is still running in a terminal on your machine. Stop it using `Ctrl + C`. This will now cause HTTP requests sent by `fetch` to fail, whenever we open the page that loads the list of notes.

![](./resources/fetch-error.png)

We want to handle this error and show an error message to the user — thankfully, [we can use `.catch()` with `fetch` (since it uses JS promises under the hood) to handle errors](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/).

1. Test-drive a new method `displayError` on the `NotesView` class — this method should append an error message on the page, such as "Oops, something went wrong!"
2. Modify the method `loadNotes` on the `NotesClient` class so it accepts a second argument: a callback function that will be called in case of an error making the HTTP request
3. As shown on the [`fetch` documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), use `.catch()` to handle the case in which the request fails
4. Use the new `displayError` method to display the error message in that case.

After completing the above steps, you should be able to reload the page and see the error message when the server is not running. Relaunch the notes backend server, and refreshing the page should now show the list of notes.

The code in your main JS file `index.js` should look like this after implementing the changes above — the `loadNotes` method now accepts **two** callback functions:
```js
client.loadNotes((notes) => {
  // This will be executed if notes are loaded correctly from the server
  model.setNotes(notes);
  view.displayNotes();
}, () => {
  // This will be executed if there's an error
  view.displayError();
});
```

## Exercise

We now want to use the same mechanism to handle network errors when the user tries to create a new note, since this is a different HTTP request.

 * Use `.catch()` in the `fetch` request that creates a new note to handle the error (you may reuse the same method `.displayError()` from the View class).

After doing this, the error message should be displayed on the page when trying to create a new note while the server is not running.

## Additional resources

 * [Handling Failed HTTP Responses with `fetch`](https://www.tjvantoll.com/2015/09/13/fetch-and-errors/)

[Next Challenge](18_making_it_look_nice.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F17_handling_errors.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F17_handling_errors.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F17_handling_errors.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F17_handling_errors.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F17_handling_errors.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
