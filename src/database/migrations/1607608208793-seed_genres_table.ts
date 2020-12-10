import { getManager, MigrationInterface, QueryRunner } from 'typeorm';
import { Genre } from '../../entities/Genre';

export class seedGenresTable1607608208793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.startTransaction();

    const entityManager = getManager();

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

    await entityManager.transaction(async manager => {
      for (const genre of genres) {
        await manager.insert(Genre, { name: genre });
      }
    });
  }

  public async down(): Promise<void> {
    // Do nothing
  }
}
