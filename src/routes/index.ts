import express, { Request, Response } from 'express';

import moviesRouter from './movies.routes';
import translationsRouter from './translations.routes';

const routes = express.Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Welcome to Movie API' });
});

routes.use('/movies', moviesRouter);
routes.use('/movies/:movie_id/translations', translationsRouter);

export default routes;
