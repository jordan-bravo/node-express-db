import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const port = process.env.PORT || 3010;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
