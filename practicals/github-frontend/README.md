# Exercise - a custom Github repo page 

## Objectives

 * Build a web page that requests data from an API and update its contents.

In this exercise, we'll use the Github API to build our own "frontend" user interface to display information on Github repositories and users. 

You'll have to:
 * use `fetch` to request data from Github
 * use DOM functions to manipulate the page
 * use event listeners to respond to user interaction

## Showing repo info

https://api.github.com/repos/sinatra/sinatra

The requirements are:

1. There should be a text field on the page so the user can enters a repository name — for the sake of simplicity, we assume the user will enter the complete canonical repo name, e.g "sinatra/sinatra" for Sinatra, or ["rails/rails" for Rails](https://api.github.com/repos/rails/rails).

2. There should be a button to validate the repository name. When clicked, a HTTP request should be made to load the repository information.

3. Once received, the data should be processed and the following elements should appear on the page:
    * The repository name
    * The repository profile picture
    * A link to the *actual* Github page
    * The number of "stargazers"
    * The number of forks
    * The programming language of the repo

    If you're unsure how to find all this information, look at the API response in the browser first, and then find how to access the property you want in the parsed response body

4. When the user types in a new repo name and submits it, the different sections should be updated with the new repo content.

## Going further - showing user info

This one is left to you! You should build a similar page, but this time to display some information about a user rather than a repository. Ever wanted to customise the appearance of your profile on Github? This is the chance to build a complete personalised page for your Github info!

The API URL to request your (public) profile info is:
```
https://api.github.com/users/{your username}
```

You're free to design the page how you want it, make sure that it includes at least:
 * your username
 * your bio
 * your profile picture
 * the number of repos and followers

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fgithub-frontend%2FREADME.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fgithub-frontend%2FREADME.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fgithub-frontend%2FREADME.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fgithub-frontend%2FREADME.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fgithub-frontend%2FREADME.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
