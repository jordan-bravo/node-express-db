import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 3010;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.post('/', (_req, res) => {
  res.send('Got a POST request');
});

app.put('/user', (_req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (_req, res) => {
  res.send('Got a DELETE request at /user');
});

// Listener
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
