# Building a notes app - backend

## Objectives
 * Build a single page application in JS from scratch.

To complete this challenge you'll have to:
 * use express to build a small web server.
 * use the `express.json()` middleware to parse incoming JSON requests.


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