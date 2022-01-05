# Loading notes from the server

In this section, we'll test-drive a new class `NotesApi` which will have a
method `loadNotes` that fetches the list of notes from the backend.

## Side note - mocking `fetch`

To complete the following exercise, **have a look again at how the `GithubApi`
class is tested in the previous example you've downloaded** (in the file
`githubApi.test.js`). Because `fetch` is not available in a `jest` environment,
by default, we're using the
[jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock) package, which
makes our life a bit easier. Install it in your notes project to use it there:

```
npm install --save jest-fetch-mock
```

You can check how it is being used in the file `githubApi.test.js`.

## Exercise

You'll now test-drive and implement a new class `NotesApi`. This class should
have one method, `loadNotes`, that uses `fetch` to request the list of notes
from the backend.

1. Test-drive and implement the class and method. The `loadNotes` method should
   use `fetch` to load data from the `GET /notes` endpoint, and call a callback
   function with the result.

2. Add the code in the main file so, after the notes are loaded from the server,
   they're displayed on the page:

```js
// index.js
// ...

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  model.setNotes(notes);
  view.displayNotes();
});
```

When reloading the page, the note coming from the server should be displayed.

![The list of notes is loaded on the page](resources/notes-fetch-1.gif)

## Troubleshooting common issues

 * Running your Jest tests, but getting the error `ReferenceError: fetch is not
   defined` ? It's likely you haven't mocked `fetch` as described above.
 * Not sure how to test the behaviour a method that uses a callback to give back
   its result? You can use `expect()` Jest assertions inside a callback as well:
   ```js
    // An example Jest test
    myMethod(someArgument, (result) => {
      expect(result).toBe(true);
    });
   ```

[Next Challenge](18_creating_new_note_server.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/17_fetch_notes_from_backend.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/17_fetch_notes_from_backend.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/17_fetch_notes_from_backend.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/17_fetch_notes_from_backend.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/17_fetch_notes_from_backend.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
