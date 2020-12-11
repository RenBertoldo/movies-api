import MoviesRepository, {
  TranslationsInterface,
} from '../repositories/MoviesRepository';

export default class AddTranslationsToMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(
    movie_id: number,
  ): Promise<TranslationsInterface | undefined> {
    const movie = await this.moviesRepository.showTranslationsOfMovie(movie_id);

    return movie;
  }
}
