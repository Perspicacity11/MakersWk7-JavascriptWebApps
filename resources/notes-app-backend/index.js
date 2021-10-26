const express = require('express');
const app = express();
const PORT = 3000;

let notes = [];

app.use(express.json());

app.get('/notes', (_req, res) => {
  res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(notes));
});

app.listen(PORT);