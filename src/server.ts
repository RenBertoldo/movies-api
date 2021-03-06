import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import routes from './routes';
import { createConnection } from 'typeorm';

const app = express();

createConnection();

app.use(express.json());

app.use(routes);

app.listen(3000);
