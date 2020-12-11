import { celebrate, Joi, Segments } from 'celebrate';
import express from 'express';

import TranslationsController from '../controllers/TranslationsController';
const translationsController = new TranslationsController();

const routes = express.Router();

routes.get(
  '/:movie_id/translations',
  celebrate({
    [Segments.PARAMS]: {
      movie_id: Joi.number().required(),
    },
  }),
  translationsController.show,
);
routes.post(
  '/:movie_id/translations',
  celebrate({
    [Segments.PARAMS]: {
      movie_id: Joi.number().required(),
    },
    [Segments.BODY]: {
      translations: Joi.array()
        .items(
          Joi.object().keys({
            iso_3166_1: Joi.string().required(),
            iso_639_1: Joi.string().required(),
            name: Joi.string().required(),
            english_name: Joi.string().required(),
            data: Joi.object()
              .keys({
                title: Joi.string().required(),
                overview: Joi.string().required(),
                homepage: Joi.string(),
              })
              .required(),
          }),
        )
        .required(),
    },
  }),
  translationsController.create,
);
routes.put(
  '/:movie_id/translations',
  celebrate({
    [Segments.PARAMS]: {
      movie_id: Joi.number().required(),
    },
    [Segments.BODY]: {
      translations: Joi.array()
        .items(
          Joi.object().keys({
            iso_3166_1: Joi.string().required(),
            iso_639_1: Joi.string().required(),
            name: Joi.string().required(),
            english_name: Joi.string().required(),
            data: Joi.object()
              .keys({
                title: Joi.string().required(),
                overview: Joi.string().required(),
                homepage: Joi.string(),
              })
              .required(),
          }),
        )
        .required(),
    },
  }),
  translationsController.update,
);
routes.delete('/:movie_id/translations', translationsController.delete);

export default routes;
