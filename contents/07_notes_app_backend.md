# Building a notes app - backend

## Objectives

 * Build a single page application in JS from scratch.

<!-- OMITTED -->

In this last section of the module, you'll spend some time building a Notes-taking single-page application. This is split into two parts:
  1. The backend web server, written using Node.js and express (this current page). If you want to skip directly to [the frontend part](./08_notes_app_frontend.md), you might want to use [the exemplar code for this web server (download zip here)](https://github.com/makersacademy/javascript-web-applications/blob/main/resources/notes-backend-server.zip).
  2. The frontend part ([the next page](./08_notes_app_frontend.md)), where you'll use what you've learned in this module (DOM manipulation and HTTP requests using fetch) — to interact with the page and load/update data on the web server using HTTP calls.

## Backend

To complete this challenge you'll have to:
 * Initialise a new project directory.
 * Test-drive a class `Notes` that will store a list of notes in memory, allow to add new ones and list them.
 * Use express to build a small web server.
 * Declare express routes exposing HTTP endpoints to interact with the `Notes` class (adding a new note, listing the notes).
 * Use the `express.json()` middleware to parse incoming JSON requests.


**Note: you'll have to use the `cors` JS module to allow incoming HTTP requests for your frontend app later — otherwise you'll likely run into issues with JS your browser refusing to send HTTP requests to the server. This can be done by installing the module `cors` in the backend project, and using the following code in the `index.js` file setting up express:**

```
$ npm install cors
```

```js
const express = require('express');
const cors = require('cors');
const app = express();

// some code omitted here

app.use(cors());

// ...
```

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

[Next Challenge](08_notes_app_frontend.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_notes_app_backend.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_notes_app_backend.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_notes_app_backend.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_notes_app_backend.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/07_notes_app_backend.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
