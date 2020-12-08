import express, { Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({ message: 'Hello World' });
});

export default routes;
