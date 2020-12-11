import { getMongoRepository, MongoRepository } from 'typeorm';
import { Movie } from '../entities/Movie';

enum Status {
  'Rumored',
  'Planned',
  'In Production',
  'Post Production',
  'Released',
  'Canceled',
}
export interface CreateMovieInterface {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage?: string;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: {
    id: number;
    name: string;
    logo_path?: string;
    origin_country: string;
  }[];
  production_countries: {
    name: string;
    iso_3166_1: string;
  }[];
  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status: Status;
  tagline?: string;
  video: boolean;
  vote_avarage: number;
  vote_count: number;
}

export interface UpdateMovieInterface {
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: { id: number; name: string }[];
  homepage?: string;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id: number;
    name: string;
    logo_path?: string;
    origin_country: string;
  }[];
  production_countries?: {
    name: string;
    iso_3166_1: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    iso_639_1: string;
    name: string;
  }[];
  status?: Status;
  tagline?: string;
  video?: boolean;
  vote_avarage?: number;
  vote_count?: number;
}

export interface TranslationsInterface {
  id: number;
  translations: {
    iso_3166_1: string;
    iso_639_1: string;
    name: string;
    english_name: string;
    data: {
      title: string;
      overview: string;
      homepage: string;
    };
  }[];
}
class MoviesRepository {
  private moviesRepository: MongoRepository<Movie>;

  constructor() {
    this.moviesRepository = getMongoRepository(Movie);
  }

  public async findById(id: number): Promise<Movie | undefined> {
    const movie = await this.moviesRepository.findOne({ where: { id } });

    return movie;
  }

  public async create(data: CreateMovieInterface): Promise<Movie> {
    const movies = await this.moviesRepository.find();
    const count = movies.length === 0 ? 0 : movies[movies.length - 1].id;

    const movie = await this.moviesRepository.create({
      ...data,
      id: count + 1,
    });

    await this.moviesRepository.save(movie);

    return movie;
  }

  public async update(data: UpdateMovieInterface): Promise<Movie | undefined> {
    const { id } = data;

    const movie = await this.moviesRepository.findOne({ where: { id } });

    if (!movie) {
      return movie;
    }

    Object.assign(movie, data);

    return await this.moviesRepository.save({ ...movie });
  }

  public async delete(id: number): Promise<boolean | undefined> {
    const movie = await this.moviesRepository.findOne({ where: { id: id } });

    if (!movie) {
      return movie;
    }

    await this.moviesRepository.delete(movie);

    return true;
  }

  public async findAll(): Promise<Movie[]> {
    return await this.moviesRepository.find();
  }

  public async addTranslationToMovie(
    data: TranslationsInterface,
  ): Promise<TranslationsInterface | undefined> {
    console.log({ data });
    const movie = await this.moviesRepository.findOne({
      where: { id: data.id },
    });

    if (!movie) return movie;

    const { translations } = movie;

    if (!translations) {
      Object.assign(movie, { translations: data.translations });
      await this.moviesRepository.save(movie);
    } else {
      const newTranslations = [...translations, ...data.translations];

      Object.assign(movie, { translations: newTranslations });
      await this.moviesRepository.save(movie);
    }

    const dataTranslations = await this.moviesRepository.findOne({
      where: { id: data.id },
      select: ['id', 'translations'],
    });

    return dataTranslations;
  }

  public async updateTranslationsOfMovie(
    data: TranslationsInterface,
  ): Promise<TranslationsInterface | undefined> {
    console.log({ data });
    const { translations } = data;
    const movie = await this.moviesRepository.findOne({
      where: { id: data.id },
    });

    if (!movie) return movie;

    Object.assign(movie, { translations });
    await this.moviesRepository.save(movie);

    const translationUpdatedData = await this.moviesRepository.findOne({
      where: { id: data.id },
      select: ['id', 'translations'],
    });

    return translationUpdatedData;
  }

  public async deleteTranslationsOfMovie(
    movie_id: number,
  ): Promise<boolean | undefined> {
    const movie = await this.moviesRepository.findOne({
      where: { id: movie_id },
    });

    if (!movie) return movie;

    Object.assign(movie, { translations: null });

    await this.moviesRepository.save(movie);

    return true;
  }

  public async showTranslationsOfMovie(
    movie_id: number,
  ): Promise<TranslationsInterface | undefined> {
    const movie = await this.moviesRepository.findOne({
      where: { id: movie_id },
      select: ['id', 'translations'],
    });

    return movie;
  }
}

export default MoviesRepository;
