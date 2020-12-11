import MoviesRepository, {
  UpdateMovieInterface,
} from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export default class UpdateMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(
    input: UpdateMovieInterface,
  ): Promise<Movie | undefined> {
    const movie = await this.moviesRepository.update(input);

    return movie;
  }
}
