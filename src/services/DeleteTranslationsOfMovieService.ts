import MoviesRepository from '../repositories/MoviesRepository';

export default class AddTranslationsToMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(movie_id: number): Promise<boolean | undefined> {
    const movie = await this.moviesRepository.deleteTranslationsOfMovie(
      movie_id,
    );

    return movie;
  }
}
