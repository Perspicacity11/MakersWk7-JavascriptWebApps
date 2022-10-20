# Fetching the notes list from a server

In the previous section, you've learned how we can use `fetch` to send an HTTP request and
retrieve data from a remote server.

You'll now use these learnings to make a new addition to the notes app, so **it loads the
list of notes from a remote API**.

## Downloading and running the notes backend 

To work on this exercise, you'll have to use [the notes backend web server (download zip
here)](https://github.com/makersacademy/javascript-web-applications/blob/main/resources/notes-backend-server.zip).
This web server is made using express.

Once you have downloaded it, `cd` into the directory, run `npm install`, and run the
program using `node index.js`. **Leave it running in the background!**

This server is now able to receive `GET` and `POST` HTTP requests. It implements a few
HTTP endpoints, notably:

 * `GET /notes` - gets the list of notes - you can access this one in your browser by
   visiting [`http://localhost:3000/notes`](http://localhost:3000/notes) (you'll notice
   this API returns data the JSON format too).
 * `POST /notes` - adds a new note with a JSON body — we'll leave this one for later.

## Exercise - experimenting with `fetch` and the notes backend

**Once the notes backend is running in a terminal, leave it there**.

1. On the notes app web page, open the developer console and use `fetch` to make a call to
   `http://localhost:3000/notes` and `console.log` the result data. You can use the
   previous section's `fetch` example (the one using Github's API) as a scaffolding for
   this new code.

You should get an array containing one note `['This note is coming from the server']` in the
developer console. Looking at the **Network** tab, you should also see your GET request to
`/notes` logged.


[Next Challenge](14_fetch_notes_from_backend.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F13_connecting_to_server.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F13_connecting_to_server.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F13_connecting_to_server.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F13_connecting_to_server.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F13_connecting_to_server.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
