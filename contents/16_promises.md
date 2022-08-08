# Introduction to Promises

## Objectives

 * Explain how Promises work.
 * Use `.then()` to register a callback to be run when the promise is fulfilled.
 * Use `.catch()` to register a callback to be run when the promise is rejected.

## Intro

We now need to talk about Promises.

You've already used them without perhaps knowing it. The `fetch` function actually returns a `Promise` object:

```js
const promise = fetch('https://api.github.com/repos/sinatra/sinatra');

console.log(promise); // Promise {<pending>}
```

A promise is a special value representing an operation that cannot be completed straight away — for example, sending an HTTP request and waiting for its response. This is another example of how JavaScript deals when asynchronous behaviour.

When initialising the promise, it is first "pending". When the operation completes, the promise becomes "fullfilled" or "resolved" — and the result becomes available. If the operation fails, the promise is "rejected".

To access the "resolved" value, we need to attach a callback function using the `.then()` method.

```js
// 1. Initialising the promise - it is initially "pending"
const promise = fetch('https://api.github.com/repos/sinatra/sinatra');

// 2. We can attach a callback, which will be called
// when the promise is resolved (i.e when the response
// is received).
promise.then((responseData) => {

  // 3. This will execute only when the promise is resolved.
  console.log(responseData);
});

// 4. We can attach another callback with `.catch()`
// which will be executed only if/when the promise
// is rejected (i.e the response couldn't be received
// in time, because of a network error, or with an
// error status - a 404 not found, for example)
promise.catch((error) => {

  // 5. This will execute only when the promise is rejected.
  console.log(error);
});
```

<!-- OMITTED -->

## Exercise

In the browser's developer console:
  * Initialise a promise by making a `fetch` request to the URL `https://jsonplaceholder.typicode.com/todos`.
  * Register a callback to be executed when the response is successfully received, and log the response in the console.
  * Register a callback to be executed when the request has failed, and log an error message in the console.
  * Retry the steps above by trying to turn off your network connection, to see the difference of behaviour.

[Next Challenge](17_handling_errors.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F16_promises.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F16_promises.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F16_promises.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F16_promises.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=contents%2F16_promises.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
