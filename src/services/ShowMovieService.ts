import MoviesRepository from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export default class ShowMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(movie_id: number): Promise<Movie | undefined> {
    const movie = await this.moviesRepository.findById(movie_id);

    return movie;
  }
}
