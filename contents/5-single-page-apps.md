# A Tale of Two Web Apps

It's time for us to speak about the *two types* of web applications that can exist — as usual, the reality is more complex than this, but for the sake of simplicity, this will do.

Previously, you've worked with what we could call "classic" web applications, where the request/response cycle between the client (browser) and the server looks like this:
1. The browser requests a page (`/posts`) — HTTP request is sent
2. The server receives the HTTP request and processes it (maybe it talks to a database as well, and does some work).
3. The server sends the HTTP response containing the HTML webpage.
4. The browser receives the webpage and displays it.
5. If the user clicks on a link, for example, the process starts again and the whole page changes.

However, thanks to the development of JavaScript and its capabilities in the browser, for some years now a new type of web application has gained traction, and is now considered the "modern" way of building a web app — they're called *single-page applications*.

You probably remember that JavaScript is able to do those things within the browser:
 * make HTTP requests to remote URLs.
 * respond to user interaction (a click on a button, for example).
 * change the page, by updating the DOM.

In single-page applications (or SPAs), the full HTML page is usually loaded only *at the start* of the user experience on the website. When they click on a link or a button, perhaps to navigate to a new page, the JavaScript code handles this interaction.

But, instead of letting the browser reload the whole page, JavaScript will update the DOM to reflect the change in the user interface. If it needs to fetch or update data on the server, the JavaScript code will also make an HTTP request. But the whole HTML page is never fully reloaded. Rather, JavaScript "takes over" the browser's default behaviour and fetches/updates only the data it needs, and updates only the parts of the DOM it needs as well.

1. The browser requests a page (`/`) — HTTP request is sent
2. The server receives the HTTP request and processes it
3. The server sends the HTTP response containing the HTML webpage.
4. The browser receives the webpage and displays it.
5. The user clicks on a link — JavaScript handles this event, but the browser doesn't send a new HTTP request.
6. Javascript may fetch or update some data by sending an HTTP request itself.
7. JavaScript updates the DOM accordingly

This allow for a faster and more efficient user experience, because our web application only does what it needs to do (fetch or update data, then update user interface). Receiving a small chunk of data, and updating only a part of the page, are much faster than updating the whole page.

How does JavaScript communicate with our server (the backend)? Remember than in the previous JavaScript module, we said APIs are the way programs can interact with other programs, and exchange data. JavaScript fetches or updates data on our backend server by the same mechanism that we have to load HTML pages — except that JavaScript usually only needs raw data, usually in JSON format. Using something like `fetch`, for example, can achieve this.

Remember we spoke earlier about the distinction between frontend and backend. In "classic" web applications, the frontend code (executed by the browser) has *very little control* on the program and its logic — maybe it's only HTML, CSS, and bits of JavaScript to do a few things. *In SPAs, the frontend code has usually way more control* (there will usually be a lot more JavaScript!), because it decides which data to fetch or update on the server, and which updates should happen on the page.
