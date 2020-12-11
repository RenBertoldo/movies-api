import MoviesRepository, {
  TranslationsInterface,
} from '../repositories/MoviesRepository';

export default class AddTranslationsToMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(
    input: TranslationsInterface,
  ): Promise<TranslationsInterface | undefined> {
    const movie = await this.moviesRepository.addTranslationToMovie(input);

    return movie;
  }
}
