import express from 'express';
import payload from 'payload';

import { Alerts } from '@cms/collections';

const app = express();

// Proof app itself can resolve local library
console.log({ Alerts });

payload.init({
  secret: 'super-secret',
  mongoURL: 'mongodb://root:example@localhost:27017',
  express: app,
});

const port = process.env.port || 4444;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
