import * as express from 'express';

import { router as mailRouter } from './mails/routes';

export const app = express();

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/mails', mailRouter);
