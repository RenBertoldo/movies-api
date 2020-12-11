import MoviesRepository, {
  TranslationsInterface,
} from '../repositories/MoviesRepository';

export default class UpdateTranslationsOfMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(
    input: TranslationsInterface,
  ): Promise<TranslationsInterface | undefined> {
    const movie = await this.moviesRepository.updateTranslationsOfMovie(input);

    return movie;
  }
}
