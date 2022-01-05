const express = require('express');
const app = express();
const PORT = 3000;

let notes = [
  'This note is coming from the server'
];

app.use(express.json());

app.get('/notes', (_req, res) => {
  res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  notes.push(req.body.content)
  res.send(JSON.stringify(notes));
});

app.delete('/notes', (req, res) => {
  notes = [];
  res.send(JSON.stringify(notes))
});

app.listen(PORT);