# About single-page applications

*You might want to take some time to read the following paragraphs, before moving to the exercise and discussion below.*

It's time for us to speak about the *two types* of web applications that can exist — as usual, the reality is more complex than this, but for the sake of simplicity, this will do.

In the previous weeks, you've worked with what we could call "classic" web applications, where the request/response cycle between the client (browser) and the server looks like this:
1. The browser requests a page (`/posts`) — HTTP request is sent
2. The server receives the HTTP request and processes it (maybe it talks to a database as well, and does some work).
3. The server sends the HTTP response containing the HTML webpage.
4. The browser receives the webpage and displays it.
5. If the user clicks on a link, for example, the process starts again and the whole page changes.

However, thanks to the development of JavaScript and its capabilities in the browser, for some years now a new type of web application has gained traction, and is now considered the "modern" way of building a web app — they're called *single-page applications*.

You now know that JavaScript is able to do those things within the browser:
 * make HTTP requests to remote URLs.
 * respond to user interaction (a click on a button, for example).
 * change the page, by updating the DOM.

In single-page applications (or SPAs), the full HTML page is usually loaded only *at the start* of the user experience on the website. When they click on a link or a button, perhaps to navigate to a new page, the JavaScript code handles this interaction.

But, instead of letting the browser reload the whole page, JavaScript will update the DOM to reflect the change in the user interface. If it needs to fetch or update data on the server, the JavaScript code will also make an HTTP request. But the whole HTML page is never fully reloaded. Rather, JavaScript "takes over" the browser's default behaviour and fetches/updates only the data it needs, and updates only the parts of the DOM it needs as well.

Steps 1-4 are the same than for a classic application — but from there, the behaviour is different:

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

### Exercise - discussion

Discuss with your pair (or with yourself!) the following questions. If you disagree on the response, try to understand why and discuss further — ask someone else in your cohort or your coach if needed.

 1. A piece of JavaScript code is changing an HTML button label from "Submit" to "Submitted" — is it frontend, or backend?
 2. A piece of JavaScript code is declaring an HTTP POST endpoint that will accept an HTTP request containing params to insert into a database — is it frontend, or backend?
 3. A user clicks on a link on an e-commerce website. The browser reloads the entire page, fetching a whole new HTML page and new resources. Can we say this e-commerce website a "single page application"?
 4. A user submits a form on a social media website to post a new message on their page. Behind the scenes, the JavaScript code uses `fetch` to make a POST HTTP request to create the new content on the website backend. When the HTTP response is received, JavaScript replaces only the relevant parts of the page, using DOM functions. Can we say this website a "single page application"?
 5. In case of single page applications — what is the only way a frontend web application and its backend can communicate?

<details>
  <summary>Check answers</summary>
  
  1. This is frontend — it deals with changing the UI on the page within the browser.
  2. This is backend — it happens on the web server, not on the user machine or browser.
  3. It's not, since the entire page is reloaded.
  4. It is — the entire page is not reloaded but JS is used to fetch only the required data to update the relevant parts of the page.
  5. Using HTTP requests/responses (this can be done using `fetch` like you've just learned — or other libraries — and previously a similar method called AJAX).
</details>

[Next Challenge](07_notes_app_frontend.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_single_page_apps.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_single_page_apps.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_single_page_apps.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_single_page_apps.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=contents/06_single_page_apps.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
