# Using fetch to make HTTP requests

## Objectives

 * Use `fetch` to make HTTP requests in JavaScript.
 * Handle and transform received HTTP responses.

<!-- OMITTED -->

Another powerful feature of JavaScript in the browser is that we can make HTTP requests. It means that, if needed, our JavaScript code can request data from a URL on its own — more precisely, it will ask the browser to perform an HTTP request, and we can handle the received HTTP response.

The simplest way to do this in the browser is to use `fetch`. You can have a look [at the documentation with examples on how to use it here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). Here's a simple example of using it to make a `GET` request to an endpoint that returns some JSON:

```js
fetch('https://cataas.com/api/cats?tags=cute')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // or do something useful with it
    });
```

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

<details>
  <summary>Reveal solution</summary>

  ```js
  fetch('https://api.github.com/repos/sinatra/sinatra')
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
    });
  ```
</details>

## Exercise - bundling

To complete this exercise, you'll need to:
 * Initialise a new project directory
 * Use esbuild to bundle the code and load it from the HTML page.

### Questions

1. In a new project directory, write a file `fetchGithubRepo.js` containing the function `fetchGithubRepo` (and exporting it) which, given a repo name in argument, uses `fetch` to get this repo's info from Github. Note: the API URL to get a repo's info is `https://api.github.com/repos/[REPO NAME]`
2. From this function, return the JS object representing the repo's info to the caller — remember, the operation is asynchronous, so you'll likely need to use a callback function so `fetchGithubRepo` can "send back" the result to the caller.
3. Bundle the code and load the bundled JS file from a new HTML index page.
4. In the file `index.js`, require and call `fetchGithubRepo` with a repo name (like `sinatra/sinatra`) and prints the result *in the page* using `document.write()` (you can also just `console.log` the result).

If you've done the above correctly, you should be able to open the HTML page and see the info of Sinatra's repo printed in the console (and/or the page).

<details>
  <summary>Reveal solution</summary>

  1. Contents of `fetchGithubRepo.js`:
  ```js
  const fetchGithubRepo = (repoName, onDataFetched) => {
      fetch('https://api.github.com/repos/' + repoName)
        .then(response => response.json())
        .then(jsonData => {
            onDataFetched(jsonData);
        });
  }

  module.exports = fetchGithubRepo;
  ```

  2. Contents of `index.js`:
  ```js
  const fetchGithubRepo = require('./fetchGithubRepo');

  fetchGithubRepo('sinatra/sinatra', (repoData) => {
      console.log(repoData);
      document.write(JSON.stringify(repoData));
  });
  ```

  3. Bundle with `npm run build`.
</details>

## Exercise - user interaction and display

We're now going to build a web page where the user can enters a Github repo's name, click on a button, and see the repository info on the page (this data will be fetched from Github's API).

To complete this exercise, you'll need to:
 * use all of what you've learned until now to update the DOM and `fetch` data.

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

After attempting this exercise, you can download [an exemplar of a solution here](./resources/fetch-github.zip).

[Next Challenge](06_single_page_apps.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/05_using_fetch.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
