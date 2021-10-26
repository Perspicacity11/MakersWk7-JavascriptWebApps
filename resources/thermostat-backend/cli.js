const Thermostat = require('./thermostat');
const WeatherApi = require('./weatherApi');
const readline = require('readline-sync');

let api = new WeatherApi();
let thermostat = new Thermostat(api);
thermostat.setCity('Paris');

setTimeout(() => {
  console.log(thermostat.getTemperature());
}, 3000);


while (true) {
  console.log('Temperature is ' + thermostat.getTemperature());
  

  let command = readline.question('Enter "up" or "down" > ');

  if (command === 'up') {
    thermostat.up();
  } else if (command === 'down') {
    thermostat.down();
  }
}
