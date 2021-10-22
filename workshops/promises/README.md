# Asynchronous JS: Promises

<!-- OMITTED -->

## Learning objectives
 
 * Explain the behaviour of promises and how they can be used for asynchronous operations
 * Implement and use simple promises

## Intro

Let's consider the following JS code:

```js
let posts = [];

// Simulates a delay of 1sec, adds the post and calls back onComplete
const addPost = (title, onComplete) {
  setTimeout(() => {
    posts.push(title);
    onComplete()
  }, 1000);
}

// Simulates a delay of 1sec, and calls back onComplete with the list of posts
const getPosts(onComplete) {
  setTimeout(() => {
    onComplete(posts);
  }, 1000);
}
```

Those two functions simulate a delay using `setTimeout` (such a delay could happen if we were to communicate with a database, or an external service to fetch data). Thanks to the way asynchronous programming works in JS, we can use callback functions to avoid blocking the program while waiting for the data. 

Now let's assume we want to, in this order:
  1. Add a new post "Hello!"
  2. Get back the list of posts including the new one, and print the result with `console.log`

What code would we write?

```js
addPost('Hello!', () => {
  getPosts(posts => {
    console.log(posts);
  });
});
```

This gets harder to read, but also error handling becomes tricky — what if `addPost` fails? What if it works but then `getPosts` fails?

### Promises to the rescue

A promise represents a value that isn't available yet — a "future" value. It can also be the result of an operation that cannot complete immediately, but eventually will complete, or fail.

When a promise is created:
  * it is initially marked as "pending"
  * it tries to fetch the value, or to complete an operation

When the value is successfully (or not) fetched, or the operation has completed, or failed:
  * the promise is marked as "resolved" (success) or "rejected" (failure)
  * the promise *handler* is called

A promise handler is registered using `.then`. For example, `fetch` returns a promise, which is why you can call `.then` on its result.

## Exercise - discussion

In which of the following examples promises could be used? Explain why

 * Making a GET HTTP request to fetch some data
 * Making a POST HTTP request to update data
 * Calculating a sum of numbers
 * Adding an event listener to a DOM element in the browser (example: on mouse click)
 * Making a SQL request to a remote database
 * Calling a function that does heavy computation that can take a few seconds to complete
 * Updating the text of a DOM element in the browser

## Exercise - a simple promise

Open the browser JS console, and try the following code:

```js
// this will function "initialises" the promise — it does nothing for now, except printing out to the console
const promiseInitializer = (resolve) => {
  console.log('Initialising the promise...')
};

const myPromise = new Promise(promiseInitializer);
```

1. Using the browser console, inspect `myPromise` — what is its state?

Now, reload the console and try the same code, but by changing the `promiseInitializer` function so it calls `resolve`:

```js
const promiseInitializer = (resolve) => {
  console.log('Initialising the promise...')
  resolve();
};

const myPromise = new Promise(promiseInitializer);
```

2. What is the state of `myPromise` after executing this code? What conclusion can you make about the `resolve` function that is passed to the promise initialiser?

Now let's make some more change to the code: 

```js
const promiseInitializer = (resolve) => {
  console.log('Initialising the promise...')
  resolve();
};

const myPromise = new Promise(promiseInitializer);

myPromise.then(() => {
  console.log('Promise resolved!');
});
```

3. Run the code again and see the result — what conclusion can you make about calling the `.then` method on the promise?

4. We've added a few `console.log` (five, exactly) in the previous code example:

```js
console.log();

const promiseInitializer = (resolve) => {
  console.log();
  console.log('Initialising the promise...')
  resolve();
};

console.log();

const myPromise = new Promise(promiseInitializer);

myPromise.then(() => {
  console.log();

  console.log('Promise resolved!');
});

console.log();
```

Put numbers from 1 to 5 in each `console.log` so the code prints them in the right order. If your initial guess isn't correct, try to understand why.

## Exercise - from callback hell to promises

Modify the function `addPost` presented at the beginning of this workshop so it uses promises instead of callbacks. After completing the exercise, you should be able to use the function like this, and should see "post added" on the terminal:

```js
addPost('Hello!')
  .then(() => {
    console.log('post added');
  });
```

## Stretch exercise - chaining promises

Now, modify as well the function `getPosts` so it uses promises instead of callbacks. After completing the exercise, you should be able to use the two functions like this, and should see the list of posts (including the new one) printed on the terminal:

```js
addPost('Hello!')
  .then(() => getPosts())
  .then(() => {
    console.log('post added');
  });
```

### Resources

* [Promises pill](https://github.com/makersacademy/course/blob/main/pills/js_promises.md)
* [Promises on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-web-applications&prefill_File=workshops/promises/README.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
