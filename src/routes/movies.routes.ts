import express from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import MoviesController from '../controllers/MoviesController';
const moviesController = new MoviesController();

const routes = express.Router();

routes.get('/movies', moviesController.index);
routes.get(
  '/movies/:movie_id',
  celebrate({
    [Segments.PARAMS]: {
      movie_id: Joi.number().required(),
    },
  }),
  moviesController.show,
);
routes.post(
  '/movies',
  celebrate({
    [Segments.BODY]: {
      adult: Joi.boolean().required(),
      backdrop_path: Joi.string(),
      belogs_to_collection: Joi.object(),
      budget: Joi.number().required(),
      genres: Joi.array()
        .items(
          Joi.object().keys({
            id: Joi.number().required(),
            name: Joi.string().required(),
          }),
        )
        .required(),
      imdb_id: Joi.string().length(9),
      original_language: Joi.string().required(),
      original_title: Joi.string().required(),
      overview: Joi.string(),
      popularity: Joi.number().required(),
      poster_path: Joi.string(),
      production_companies: Joi.array()
        .items(
          Joi.object().keys({
            name: Joi.string().required(),
            id: Joi.number().required(),
            logo_path: Joi.string(),
            origin_country: Joi.string(),
          }),
        )
        .required(),
      production_countries: Joi.array()
        .items(
          Joi.object().keys({
            iso_3166_1: Joi.string().required(),
            name: Joi.string().required(),
          }),
        )
        .required(),
      release_date: Joi.string().required(),
      revenue: Joi.number().required(),
      runtime: Joi.number(),
      spoken_languages: Joi.array()
        .items(
          Joi.object().keys({
            iso_639_1: Joi.string().required(),
            name: Joi.string().required(),
          }),
        )
        .required(),
      status: Joi.string()
        .valid(
          'Rumored',
          'Planned',
          'In Production',
          'Post Production',
          'Released',
          'Canceled',
        )
        .required(),
      tagline: Joi.string(),
      title: Joi.string().required(),
      video: Joi.boolean().required(),
      vote_average: Joi.number().required(),
      vote_count: Joi.number().required(),
    },
  }),
  moviesController.create,
);
routes.put(
  '/movies/:movie_id',
  celebrate({
    [Segments.PARAMS]: {
      movie_id: Joi.number().required(),
    },
    [Segments.BODY]: {
      adult: Joi.boolean(),
      backdrop_path: Joi.string(),
      belogs_to_collection: Joi.object(),
      budget: Joi.number(),
      genres: Joi.array().items(
        Joi.object().keys({
          id: Joi.number(),
          name: Joi.string(),
        }),
      ),
      homepage: Joi.string(),
      imdb_id: Joi.string().length(9),
      original_language: Joi.string(),
      original_title: Joi.string(),
      overview: Joi.string(),
      popularity: Joi.number(),
      poster_path: Joi.string(),
      production_companies: Joi.array().items(
        Joi.object().keys({
          name: Joi.string(),
          id: Joi.number(),
          logo_path: Joi.string(),
          origin_country: Joi.string(),
        }),
      ),
      production_countries: Joi.array().items(
        Joi.object().keys({
          iso_3166_1: Joi.string(),
          name: Joi.string(),
        }),
      ),
      release_date: Joi.string(),
      revenue: Joi.number(),
      runtime: Joi.number(),
      spoken_languages: Joi.array().items(
        Joi.object().keys({
          iso_639_1: Joi.string(),
          name: Joi.string(),
        }),
      ),
      status: Joi.string().valid(
        'Rumored',
        'Planned',
        'In Production',
        'Post Production',
        'Released',
        'Canceled',
      ),
      tagline: Joi.string(),
      title: Joi.string(),
      video: Joi.boolean(),
      vote_avarage: Joi.number(),
      vote_count: Joi.number(),
    },
  }),
  moviesController.update,
);
routes.delete(
  '/movies/:movie_id',
  celebrate({
    [Segments.PARAMS]: {
      movie_id: Joi.number().required(),
    },
  }),
  moviesController.delete,
);

export default routes;
