# Exercise — a frontend for our Thermostat

*This exercise is quite long, so it is recommended to split the work on it in more than one chunk*

## Objectives

 * Build a simple single-page application that interacts with a backend server and update its user interface.

Do you remember the Thermostat from the previous JavaScript module? The following exercises will use the server done in the last step. If you haven't had the chance to work on it, you can use the [exemplar implementation](https://github.com/makersacademy/javascript-web-applications/tree/main/resources/thermostat-backend).

```bash
$ cd thermostat-backend
$ npm install
$ node web.js
```

You can use `curl` to check that the express server is working and responding to requests:

```bash
curl -XGET http://localhost:3000/
{ "temperature": 20 }
```

In this exercise, you'll need to:
 * Use `fetch` to make an HTTP request
 * Update the content of the page using `document.querySelector` and `.textContent`

## Exercise - initial temperature

Create a new project directory `thermostat-client` and initialise it with a `package.json`.

1. Create a page that contains only a single HTML `<p>` element — empty for now.
2. Write JavaScript code in the `index.js` file to request the URL `http://localhost:3000/temperature` and extract the temperature value from the received response.
3. Update the contents of the `<p>` element with the temperature received from the server.

If your code is working, you should be able to open the page and — after a brief moment — see the temperature appear on the page. After using `curl` to update the temperature on the server, you should also be able to reload the page and see the new value displayed.

You should also see the request to `http://localhost:3000/` logged in the console "Network" tab.

## Exercise - tidying up

So far our JavaScript code is doing two things:
 * fetch some initial data (the temperature) from a server.
 * display it.

We need to be careful about designing our code so those concerns are separated, especially as our application will grow and become more complex.

1. Write a function `fetchTemperature` (in its own file `fetchTemperature`) which loads the temperature data from the server. Since fetching the data is *asynchronous*, you should be able to use a callback to retrieve the value:

```javascript
fetchTemperature((temperature) => {
  // temperature has been received from the server
});
```
2. Call that function when the page is loaded, to fetch the temperature and display it.
3. Write a function `renderTemperature` (in its own file `renderTemperature.js`), which takes an argument (the temperature). This function should update the DOM with the temperature value. Use this function after receiving the temperature from the server. The function `renderTemperature` should be *the only place* where you're directly updated the DOM to display the temperature.

We now have separated the different concerns:
 * `fetchTemperature` is fetching the data from the server.
 * `renderTemperature` updates the DOM with the value it is given.

## Exercise - modifying the temperature

1. Write a function `increaseTemperature` (in its own file `increaseTemperature.js`), which makes an HTTP request (POST) to increase the temperature. Like previously with `fetchTemperature`, this action is asynchronous — you might want to use a callback:
```javascript
increaseTemperature(() => {
  // executes after response is received
});
```
2. Add a button "Up" on the page, and implement an event listener so, when this button is clicked, the temperature is increased.
3. After the response is received, you should fetch once again the temperature from the server to update the page with the new temperature. You should use the `fetchTemperature` function.
4. Remember you shouldn't update the DOM directly, but call `renderTemperature` to update the page.

You should see two new requests logged in the console "Network" tab after clicking the button — one for `POST http://localhost:3000/up`, then another for `GET http://localhost:3000/`.

5. Repeat all those steps to implement a "Down" button to decrease the temperature.
6. Do the same to implement a button "Reset" that resets the temperature.

## Bonus exercise - solving callback hell

*This exercise is intended to make you explore promises. If that is something you're not yet familiar with, you may want to skip this for now, and work on this exercise at a later point.*

After writing the code for the previous exercises, your file `index.js` might look like this:

```javascript
button.addEventListener('click', () => {
  increaseTemperature(() => {
    fetchTemperature((temperature) => {
      renderTemperature(temperature);
    });
  });
});
```

We've got a callback calling a function with a callback — itself calling another function with a callback... This can often happen in JavaScript applications where something needs to happen *after* something, then something else *after* this, etc. It might become hard to read and reason about the code.

It's also harder to handle for every possible case, as errors might happen and need to be handled at every step.

It would be better if we could write something like that...

```javascript
increaseTemperature()
  .then(() => {
    fetchTemperature()
  })
  .then(temperature) => {
    renderTemperature(temperature)
  });
```

Modify your code to use promises rather than callbacks, so the above works.


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fthermostat-frontend%2FREADME.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fthermostat-frontend%2FREADME.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fthermostat-frontend%2FREADME.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fthermostat-frontend%2FREADME.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-web-applications&prefill_File=practicals%2Fthermostat-frontend%2FREADME.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
