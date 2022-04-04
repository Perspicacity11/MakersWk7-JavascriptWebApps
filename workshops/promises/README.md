# Using `fetch` and Promises

## Learning goals
 * Learn how to make a request using `fetch`.
 * Learn how to use a Promise to execute code "later" with `.then()`.
 * Learn how to use `await` to make our code "wait" for the promise value.

## Setup

Make sure the repo is cloned to your machine first.

```bash
cd javascript-web-applications/workshops/promises/exercise
npm install
npm run build
```

## Making a request with `fetch`

```js
const something = fetch('https://async-workshops-api.herokuapp.com/people');

console.log(something); // what is this?
```

Even though we are not creating the `Promise` value ourselves, it is created by `fetch` under the hood — and we use it to access the response when it becomes available.

<details>
  <summary>Show a working example</summary>

  ```js
  const promise = fetch('https://async-workshops-api.herokuapp.com/people');

  promise.then((response) => {
    console.log(response);
  });
  ```
</details>

## Modelling the process

[You can use network throttling in the browser developer console](https://developer.chrome.com/docs/devtools/network/reference/#throttling) to simulate a slow network connection.

Having a basic mental model of the Promises process is important to use them correctly — diagram the following steps in the correct order in which they happen:

 * The promise state moves to `fulfilled`.
 * The promise is initialised.
 * We call `fetch()`.
 * The promise state moves to `pending`.
 * The HTTP response is received.
 * The callback function given to `.then()` is called.

## Exercise (30min)

[Here's an example of how to use `fetch` to get JSON data](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

(don't forget to make sure `npm run build` is running somewhere).

Use `fetch` to make a request to `https://async-workshops-api.herokuapp.com/people`, and when the response becomes available:
  * display the JSON data into the console.
  * change the content of the page to add one new `<div> element for each name in the JSON list.

You'll know it works if you reload the page and see the list of names being displayed on the page.

### Why do we need to call `.then` twice?

<details>
  <summary>Show explanation</summary>

  ```js
  const firstPromise = fetch('https://async-workshops-api.herokuapp.com/people');

  // The first Promise returned by `fetch` is "fulfilled" when the response is available, however its JSON data is not "ready" yet.
  const secondPromise = firstPromise.then((response) => {
    
    // Because the JSON data in the response might be very large (we could stream a very long JSON document), we need to call `data.json()`, which returns another promise.
    return response.json();
  });

  // `secondPromise` is the promise returned by `response.json()` - it is fulfilled when the program has finished reading the JSON data. 
  secondPromise.then((jsonData) => {

    // The JSON data is now available as a JavaScript object, and we can use it.

    console.log(jsonData);

    jsonData.forEach(item => console.log(item));
  });


  // It's common to write all the above more concisely this way:
  fetch('https://async-workshops-api.herokuapp.com/people')
    .then((response) => response.json())
    .then((jsonData) => {
      // ...
    });

  ```
</details>

## Using `await`

```js
const promise = await fetch('https://async-workshops-api.herokuapp.com/people');

console.log(promise); // what is this?
```

Using `await` in front of `fetch` allows us to directly get the result — however, this means our code now "waits" for `fetch` to receive the response.

## Exercise (20 min)

 * Update the exercise code to use `await` for the two promises, and remove the two calls to `.then()`
 * Check the terminal where `npm run build` is running — it's likely you got the following error: 
 ```
  "await" can only be used inside an "async" function
 ```
 * Follow the error output suggestions to add the `async` keyword, and reload the page.

## Discussion

 * How promises can be used to handle code that needs to be called "later".
 * How we can use `async` and `await` to simplify the use of promises.

## More resources

 * [MDN - How to use Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
