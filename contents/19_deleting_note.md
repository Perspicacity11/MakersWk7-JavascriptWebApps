# Post-challenge extension

## Exercise - converting emoji shortcodes

We'd like to allow the users to write emoji shortcodes (e.g `:fire:`) in the notes and to convert them to the correct text emoji.

You should use [this service to convert shortcodes to emoji](https://makers-emojify.herokuapp.com/) when displaying the note. In this way you will have the opportunity to learn how to call external APIs using `fetch`.

## Exercise - clearing the list of notes

This a part of the post-challenge extension. The notes server implements an endpoint `DELETE /notes` which resets the list of notes to an empty state:

```
curl -XDELETE http://localhost:3000
```

You'll now implement a way for the user to reset the list of notes, using this backend endpoint. There's no need for a request body, only set the HTTP method to be `DELETE`.

Implement a new button `Reset all notes` that does what it says:
  * the `NotesView` class should handle the interaction with this button.
  * the `NotesClient` should implement a `reset` method that uses `fetch` to call the reset endpoint.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F19_deleting_note.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F19_deleting_note.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F19_deleting_note.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F19_deleting_note.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F19_deleting_note.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
