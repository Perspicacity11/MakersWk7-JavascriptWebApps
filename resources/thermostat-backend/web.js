const express = require('express');
const app = express();
const Thermostat = require('./thermostat');
const port = 3000;

let thermostat = new Thermostat();

app.get('/', (req, res) => {
  res.send(JSON.stringify({ temperature: thermostat.getTemperature() }));
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send();
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send();
});

app.delete('/', (req, res) => {
  thermostat.reset();
  res.send();
});

app.listen(port, () => {
  console.log(`Thermostat server listening on http://localhost:${port}`)
});