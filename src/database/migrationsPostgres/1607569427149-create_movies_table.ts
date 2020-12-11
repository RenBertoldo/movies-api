import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMoviesTable1607569427149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'adult',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'backdrop_path',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'budget',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'homepage',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'imdb_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'original_language',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'original_title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'overview',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'popularity',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'poster_path',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'release_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'revenue',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'runtime',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: [
              'Rumored',
              'Planned',
              'In Production',
              'Post Production',
              'Release',
              'Canceled',
            ],
            isNullable: false,
          },
          {
            name: 'tagline',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'video',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'vote_avarage',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'vote_count',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
