import MoviesRepository, {
  CreateMovieInterface,
} from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export default class CreateMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(input: CreateMovieInterface): Promise<Movie> {
    const movie = await this.moviesRepository.create(input);

    return movie;
  }
}
