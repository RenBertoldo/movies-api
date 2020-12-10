import express from 'express';

import MoviesController from '../controllers/MoviesController';
const moviesController = new MoviesController();

const routes = express.Router();

routes.get('/', moviesController.index);
routes.get('/:movie_id', moviesController.show);
routes.post('/', moviesController.create);
routes.put('/:movie_id', moviesController.update);
routes.delete('/:movie_id', moviesController.delete);

export default routes;
