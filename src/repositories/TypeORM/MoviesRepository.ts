import { getRepository, Repository } from 'typeorm';
import { Movie } from '../../entities/Movie';

class MoviesRepository {
  private moviesRepository: Repository<Movie>;

  constructor() {
    this.moviesRepository = getRepository(Movie);
  }

  public async findById(id: string): Promise<Movie | undefined> {
    const movie = this.moviesRepository.findOne(id);

    return movie;
  }
}

export default MoviesRepository;
