# Creating a new note

## Objectives

 * Use `fetch` to make a POST HTTP request

In the previous section, we've updates the notes app so it loads the notes from the
backend. 

What about adding a new note? Currently, we only call the model's
`addNote` method. However since our state is managed by the backend, we also
want to call the `POST` endpoint, so the backend will register it.

The backend implements an HTTP endpoint `POST /notes` that we can use to save
the new note.

Here's an example on how we can call this endpoint with the `curl` utility
command (if you don't have it yet, you can download it with `brew install
curl`):

```
$ curl -XPOST http://localhost:3000/notes -H 'content-type: application/json' -d '{ "content": "Remember to reflect on my progress this week!" }'
```

This makes an HTTP request to `http://localhost:3000/notes` with:
 * a `POST` method
 * a `Content-type: application/json` header (necessary to indicate we're POSTing JSON data)
 * a JSON body: `{ "content": "Remember to reflect on my progress this week!" }`

## Exercise 

To complete this exercise, you'll have to **research [how to send a `POST`
request with JSON data using `fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data).**

1. Test-drive a new method `createNote` on the `NotesApi` class. This method
   should make a `POST` request to the notes backend to create a new note.
2. Update the code in the `NotesView` class so that new method is called when
   the user saves a new note using the form.

After completing the exercise, you should be able to do the following in the
browser:
 * type in and submit a new note.
 * reload the page and see that new note being loaded on the page.
 * you can also check the `POST` requests made in the console's Network tab.

![](./resources/notes-fetch-2.gif)

## Diagramming

This was a lot! Again, taking the time to diagram your understanding of what's
happening can help a lot.

[Next Challenge](19_handling_errors.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/18_creating_new_note_server.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/18_creating_new_note_server.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/18_creating_new_note_server.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/18_creating_new_note_server.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/18_creating_new_note_server.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
