import express from 'express';
import payload from 'payload';

const app = express();

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
