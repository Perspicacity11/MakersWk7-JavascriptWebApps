# Using fetch to make HTTP requests

## Objectives

 * Use `fetch` to make HTTP requests in JavaScript.
 * Handle and transform received HTTP responses.

Another powerful feature of JavaScript in the browser is that we can make HTTP requests. It means that, if needed, our JavaScript code can request data from a URL on its own — more precisely, it will ask the browser to perform an HTTP request, and we can handle the received HTTP response.

The simplest way to do this in the browser is to use `fetch`. 

## Exercise - fetching Github info

1. Using `fetch`, request the GithubAPI info of Sinatra's repo at the following URL: `https://api.github.com/repos/sinatra/sinatra`
2. Use `console.log` to print the received response's body.