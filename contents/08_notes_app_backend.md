# Building a notes app - backend

## Objectives

 * Build a single page application in JS from scratch.

## Backend

To complete this challenge you'll have to:
 * Initialise a new project directory.
 * Test-drive a class `Notes` that will store a list of notes in memory, allow to add new ones and list them.
 * Use express to build a small web server.
 * Declare express routes exposing HTTP endpoints to interact with the `Notes` class (adding a new note, listing the notes).
 * Use the `express.json()` middleware to parse incoming JSON requests.

### Expected output from calling endpoints

In this section, we'll use the CLI tool `jq` to format JSON responses in the terminal and make it more readable.

```bash
brew install jq
```

Once completed, the backend project should respond to the following HTTP requests using `curl` — in order:

```bash
curl -s -XGET http://localhost:3000/notes | jq

[]
```

```bash
curl -s -XPOST -H 'content-type: application/json' http://localhost:3000/notes -d '{"title":"Groceries list", "content": "Tomatoes, yoghurt, honey, milk"}' | jq

{
  "title": "Groceries list",
  "content": "Tomatoes, yoghurt, honey, milk"
}
```

```bash
curl -s -XGET http://localhost:3000/notes | jq

[
  {
    "title": "Groceries list",
    "content": "Tomatoes, yoghurt, honey, milk"
  }
]
```

```bash
curl -s -XPOST -H 'content-type: application/json' http://localhost:3000/notes -d '{"title":"Birthday present", "content": "Remember to buy birthday present for Max"}' | jq

{
  "title": "Birthday present",
  "content": "Remember to buy birthday present for Max"
}
```

```bash
curl -s -XGET http://localhost:3000/notes | jq

[
  {
    "title": "Groceries list",
    "content": "Tomatoes, yoghurt, honey, milk"
  },
  {
    "title": "Birthday present",
    "content": "Remember to buy birthday present for Max"
  }
]
```

[Next Challenge](09_notes_app_frontend.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_notes_app_backend.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_notes_app_backend.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_notes_app_backend.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_notes_app_backend.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/08_notes_app_backend.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
