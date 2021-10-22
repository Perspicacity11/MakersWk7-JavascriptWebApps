# Using fetch to make HTTP requests

## Objectives

 * Use `fetch` to make HTTP requests in JavaScript.
 * Handle and transform received HTTP responses.

Another powerful feature of JavaScript in the browser is that we can make HTTP requests. It means that, if needed, our JavaScript code can request data from a URL on its own — more precisely, it will ask the browser to perform an HTTP request, and we can handle the received HTTP response.

The simplest way to do this in the browser is to use `fetch`. You can have a look [at the documentation with examples on how to use it here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

## Exercise - fetching Github info

1. In a new browser tab, using `fetch`, request the Github API info of Sinatra's repo at the following URL: `https://api.github.com/repos/sinatra/sinatra`
2. Use `console.log` to print the received response's body — parsed to a proper JS object.

You should see something similar printed on the browser's console:

```js
{
    "id": 106995,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMDY5OTU=",
    "name": "sinatra",
    "full_name": "sinatra/sinatra",
    "private": false,
    // ...
    // ...
    "network_count": 2030,
    "subscribers_count": 383
}
``` 

## Exercise - bundling

To complete this exercise, you'll need to:
 * Initialise a new project directory
 * Use esbuild to bundle the code and load it from the HTML page.

### Questions

1. In a new project directory, write a file `index.js` containing the function `fetchGithubRepo` which, given a repo name in argument, uses `fetch` to get this repo's info from Github.
2. From this function, return the JS object representing the repo's info to the caller — remember, the operation is asynchronous, how can you return the received data?
3. Bundle the code and load the bundled JS file from a new HTML index page.
4. In `index.js`, call `fetchGithubRepo` with a repo name (like `sinatra/sinatra`) and prints its result.

If you've done the above correctly, you should be able to open the HTML page and see the same output than in the previous exercise.

## Exercise - user interaction and display

To complete this exercise, you'll need to:
 * Implement an event listener on a button or link.
 * Use `.value` on an JS DOM element representing a text input on the page.
 * Use DOM manipulation to update the content on the page.

### Questions

1. Add a text input and a button on the page. The user should be able to type in a repo name inside the text input, and when clicking the button, this repo info will be logged in the console. For the sake of simplicity, we assume the user will enter the complete canonical repo name, e.g "`sinatra/sinatra`" for Sinatra, or ["rails/rails" for Rails](https://api.github.com/repos/rails/rails).

2. Write a small HTML scaffolding on the page, with one `<p>` or `<span>` for each item of info in the repo's data (one for the title, one for the number of stars, etc). The actual content of those tags can be left empty for now.
3. Instead of printing the repo's data object in the console, access the different properties and update the corresponding HTML elements on the page, so the repo's info is properly displayed on the page to the user. Make sure at least the following info is displayed:
    * The repository name
    * The repository profile picture
    * A link to the *actual* Github page
    * The number of "stargazers"
    * The number of forks
    * The programming language of the repo

4. When the user types in a new repo name and submits it, the different sections should be updated with the new repo content.

## Exercise - debugging

Someone from your cohort decided to adapt the previous exercise, but this time to load a Github user profile rather than a repository. The Github API endpoint to load information about a user is https://api.github.com/users/{your username}. 

```js

```



<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->


[Next Challenge](06_single_page_apps.md)