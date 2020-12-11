import { Request, Response } from 'express';
import ShowAllMoviesService from '../services/ShowAllMoviesService';
import CreateMovieService from '../services/CreateMovieService';
import UpdateMovieService from '../services/UpdateMovieService';
import ShowMovieService from '../services/ShowMovieService';
import DeleteMovieService from '../services/DeleteMovieService';

export default class MoviesController {
  public async index(_: Request, response: Response): Promise<Response> {
    const showAllMoviesService = new ShowAllMoviesService();

    const movies = await showAllMoviesService.execute();

    return response.status(200).json({ movies });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;

    const id = Number(movie_id);

    const showMovieService = new ShowMovieService();

    const movie = await showMovieService.execute(id);

    if (movie === undefined) {
      return response.status(404).json({
        status_message: 'The resource you requested could not be found.',
        status_code: 34,
      });
    }

    return response.status(200).json({ movie });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createMovieService = new CreateMovieService();

    const movie = await createMovieService.execute(data);

    return response.json({ movie });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;

    const data = request.body;

    data.id = Number(movie_id);

    const updateMovieService = new UpdateMovieService();

    const movie = await updateMovieService.execute(data);

    if (movie === undefined) {
      return response.status(404).json({
        status_message: 'The resource you requested could not be found.',
        status_code: 34,
      });
    }

    return response.status(200).json({ movie });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { movie_id } = request.params;

    const id = Number(movie_id);

    const deleteMovieService = new DeleteMovieService();

    const movie = await deleteMovieService.execute(id);

    if (movie === undefined) {
      return response.status(404).json({
        status_message: 'The resource you requested could not be found.',
        status_code: 34,
      });
    }

    return response.status(200).json(movie);
  }
}
