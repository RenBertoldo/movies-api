import MoviesRepository from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export default class ShowAllMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(): Promise<Movie[]> {
    const movie = await this.moviesRepository.findAll();

    return movie;
  }
}
