import { Request, Response } from 'express';
import AddTranslationsToMovieService from '../services/AddTranslationsToMovieService';
import ShowTranslationOfMovieService from '../services/ShowTranslationOfMovieService';
import UpdateTranslationsOfMovieService from '../services/UpdateTranslationsOfMovieService';
import DeleteTranslationsOfMovieService from '../services/DeleteTranslationsOfMovieService';

export default class TranslationController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;

    const id = Number(movie_id);

    const showTranslationOfMovieService = new ShowTranslationOfMovieService();

    const translations = await showTranslationOfMovieService.execute(id);

    if (translations === undefined) {
      return response.status(404).json({
        status_message: 'The resource you requested could not be found.',
        status_code: 34,
      });
    }

    return response.status(200).json(translations);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const params = request.params;

    const data = request.body;

    const input = {
      id: Number(params.movie_id),
      translations: data.translations,
    };

    const addTranslationsToMovieService = new AddTranslationsToMovieService();

    const translations = await addTranslationsToMovieService.execute(input);

    return response.status(200).json(translations);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;
    const data = request.body;

    const input = {
      id: Number(movie_id),
      translations: data.translations,
    };

    const updateTranslationsOfMovieService = new UpdateTranslationsOfMovieService();

    const translations = await updateTranslationsOfMovieService.execute(input);

    if (translations === undefined) {
      return response.status(404).json({
        status_message: 'The resource you requested could not be found.',
        status_code: 34,
      });
    }

    return response.status(200).json(translations);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;

    const id = Number(movie_id);

    const deleteTranlationsOfMovieService = new DeleteTranslationsOfMovieService();

    const result = await deleteTranlationsOfMovieService.execute(id);

    if (result === undefined) {
      return response.status(404).json({
        status_message: 'The resource you requested could not be found.',
        status_code: 34,
      });
    }

    return response.status(200).json(result);
  }
}
