import express from 'express';

import TranslationsController from '../controllers/TranslationsController';
const translationsController = new TranslationsController();

const routes = express.Router();

routes.get('/', translationsController.index);
routes.get('/:translation_id', translationsController.show);
routes.post('/', translationsController.create);
routes.put('/:movie_id', translationsController.update);
routes.delete('/:movie_id', translationsController.delete);

export default routes;
