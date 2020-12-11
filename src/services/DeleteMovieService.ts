import MoviesRepository from '../repositories/MoviesRepository';

export default class DeleteMovieService {
  private moviesRepository: MoviesRepository;

  constructor() {
    this.moviesRepository = new MoviesRepository();
  }

  public async execute(movie_id: number): Promise<boolean | undefined> {
    const movie = await this.moviesRepository.delete(movie_id);

    return movie;
  }
}
