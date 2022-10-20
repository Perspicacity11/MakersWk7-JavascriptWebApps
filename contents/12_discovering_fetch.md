# Making HTTP requests with fetch

## Objectives

 * Understand how the `fetch` function can be used to make an HTTP request.
 * Use the response data received by `fetch` to modify the page.

When a web server allows a client to send HTTP requests (GET, POST, or other) to
its URLs to fetch, create or update data, it is also called an API. [The Github
API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)
is a good example of a "public" API - by sending HTTP requests to it, we are
able to interact with Github, but programmatically, rather than with a user
interface.

When using JavaScript on the frontend, our application can act as a client,
sending HTTP requests through the web browser. In this section, you will
**discover with an example** how we can use JavaScript code to make network HTTP
requests to a remote server, this way we can call remote URLs to fetch, create
or update data.

<!-- OMITTED -->

## Downloading the exercise directory

You'll need to download [the provided exercise directory for this
section](../resources/example-4.zip). Unzip this in a new directory `example-4`
and open it in your code editor. Run the usual setup with `npm install` and `npm
run build`.

1. Have a look at the `index.html` file and notice the structure of the HTML
   page.
2. Now have a look at the different JS files. You'll notice classes you're now
   familiar with — a model class which holds data, and a view which uses event
   listeners.
3. Inside the code for the `GithubClient` class (`githubClient.js`), you'll
   notice something new — the `fetch` function. Also note how the `callback`
   argument is being used.
4. In your browser, open the HTML page, type in a Github repository name (such
   as 'sinatra/sinatra'), then click the button. You should see some information
   about this repository displayed in the developer console.

![Fetching github data](./resources/fetch-1.gif)

## Exercise - displaying the info on the page

1. So far, the code only prints the repository data to the console. Add code to
   the `GithubView` class so that it also calls the `display` method.
   
2. Update the display method so that it will:
    * Set the content of the `#repo-name` element to equal the value of the
      `full_name` property from the repo data.
    * Set the content of the `#repo-description` element to equal the value of
      the `description` property from the repo data.

3. We also want to display the repo's profile picture:
    * Add a new element `<img>` on the page, and add JS code so that it displays
      the image (the image URL can be found under the property
      `organization.avatar_url`). You'll have to research how we can dynamically
      set the HTML image's source URL with JavaScript.

Here's the result you should get when using the page after making the changes:

![Fetching github data](./resources/fetch-2.gif)

## About the JSON format

The Github API is responding with the JSON format — a format commonly used in
web APIs. If you're curious to see what JSON looks like, you can open directory
the API URL for Sinatra's repo information in your web browser:
[https://api.github.com/repos/sinatra/sinatra](https://api.github.com/repos/sinatra/sinatra).

```json
{
  "id": 106995,
  "node_id": "MDEwOlJlcG9zaXRvcnkxMDY5OTU=",
  "name": "sinatra",
  "full_name": "sinatra/sinatra",
  "private": false,
  // (omitted for brevity)
}
```

You'll notice this format is really close to **JavaScript objects** format,
which is why it's simple to decode into a JS object, which is exactly what this
part of the code is doing:
```js
fetch('https://api.github.com/repos/' + repoName)
  .then((response) => response.json()) // 1. convert JSON to JS object
  .then((data) => {
    // 2. `data` is now a full JS object, so we can access its properties  
    callback(data)
  });
```

The function `fetch` and the JSON format can also be used to *send* HTTP request
data to the remote server (for example, `POST` requests) — we'll learn about
this in a later step.


## Inspecting the request with the developer tools

You might have previously used the [developer console's
_Network_](https://developer.chrome.com/docs/devtools/network/) tab to inspect
HTTP requests (and responses) sent (and received) by the browser — since `fetch`
sends HTTP requests, we can also inspect them using the same tool. Head to the
`Network` tab of the console and interact with the page again to display a
repo's information:

![Inspecting with the network tab](./resources/fetch-3.gif)

This can help us to debug HTTP requests made by `fetch` (e.g HTTP method,
headers, etc).

## Additional resources

 * [How to use fetch](https://javascript.info/fetch)


[Next Challenge](13_connecting_to_server.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F12_discovering_fetch.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F12_discovering_fetch.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F12_discovering_fetch.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F12_discovering_fetch.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F12_discovering_fetch.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
