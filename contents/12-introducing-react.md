# Introducing React

When building the Thermostat frontend, your code probably did something like this:

 * fetch some initial data (the temperature) from a server.
 * display it and "wait" for user interaction.
 * when needed, update and fetch data on the server. 
 * display the new data (and "wait" again for the next user interaction).
 * etc.

We can divide these steps in two categories:
 * the ones that deal with *data* (fetch or update data on the server)
 * the ones that deal with *presenting* this data to the user (updating the DOM, etc) and handling user interaction



Our JavaScript code could become quite complex to manage if we're not careful about separating those different concerns.

## A temperature "component"

For this exercise, you should duplicate the directory used for the previous section (thermostat-client). 

1. In a new file `temperatureComponent.js`, define and export a function `renderTemperature` that takes one argument (temperature) and updates the correct HTML element with this value.
2. Look for every place in the code where you updated the temperature on the page — and replace the code to use the `renderTemperature` function instead. 
3. If your code is correct, the app should still behave as expected (i.e temperature should be updated on the page after changing it), and the *only place* modifying the temperature DOM element should be the `renderTemperature` function. Not anywhere else.

```javascript
let renderTemperature = (temperature) => {
  document.getElementById('#temperature').innerText = temperature;
}
```



