import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Genre } from '../../entities/Genre';

export class populateGenresTable1607571388497 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const genreRepository = getRepository(Genre);

    const genres = [
      'Comedy',
      'Fantasy',
      'Crime',
      'Drama',
      'Music',
      'Adventure',
      'History',
      'Thriller',
      'Animation',
      'Family',
      'Mystery',
      'Biography',
      'Action',
      'Film-Noir',
      'Romance',
      'Sci-Fi',
      'War',
      'Western',
      'Horror',
      'Musical',
      'Sport',
    ];

    for (const genre of genres) {
      const genreData = genreRepository.create({ name: genre });
      await genreRepository.save(genreData);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
