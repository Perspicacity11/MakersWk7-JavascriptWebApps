# Javascript and the Web

## Learning objectives

* Test-drive a simple Javascript program running in a web browser, using modern JS build tools.
* Use the DOM API to build a web user interface for this program.

## Sequence

1. JS in the browser
2. Introducing build tools (esbuild)
3. Test-driving a simple web app
4. The DOM - interacting with the page
5. Event listeners - handling user interaction
6. Calling APIs from the browser
7. Coding challenge

## Scope

The second Javascript module (week 2) will cover:
 * Running JS from the browser
 * Using a build tool (probably esbuild) and npm scripts
 * Manipulate the DOM to interact with the page
 * Call APIs from a webpage (using fetch)
 * Build a single-page app communicating with a backend
 * Full-stack Javascript

## Notes

```
esbuild --bundle index.js --outfile=bundle.js --watch
```

- If JS used both for frontend and backend, make sure they understand the split between the two