# A custom Github frontend

In this exercise, we'll use the Github API to build our own "frontend" user interface to display information on Github repositories and users. 

## Exercise - showing repo info

https://api.github.com/repos/sinatra/sinatra

The requirements are:

1. There should be a text field on the page so the user can enters a repository name — for the sake of simplicity, we assume the user will enter the complete canonical repo name, e.g "sinatra/sinatra" for Sinatra, or ["rails/rails" for Rails](https://api.github.com/repos/rails/rails).

2. There should be a button to validate the repository name. When clicked, a HTTP request should be made to load the repository information.

3. Once received, the data should be processed and the following elements should appear on the page:
    * The repository name
    * The repository profile picture
    * A link to the *actual* github page
    * The number of "stargazers"
    * The number of forks
    * The programming language of the repo

    If you're unsure how to find all this information, look at the API response in the browser first, and then find how to access the property you want in the parsed response body

4. When the user types in a new repo name and submits it, the different sections should be updated with the new repo content.

## Exercise - showing user info

This one is left to you! You should build a similar page, but this time to display some information about a user rathen than a repository. Ever wanted to customise the appearance of your profile on Github? This is the chance to build a complete personalised page for your github info!

The API URL to request your (public) profile info is:
```
https://api.github.com/users/{your username}
```

You're free to design the page how you want it, make sure that it includes at least:
 * your username
 * your bio
 * your profile picture
 * the number of repos and followers