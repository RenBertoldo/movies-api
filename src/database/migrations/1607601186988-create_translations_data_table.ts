import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTranslationsDataTable1607601186988
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'translation_data',
        columns: [
          {
            name: 'translation_id',
            type: 'integer',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'overview',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'homepage',
            type: 'varchar',
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
        foreignKeys: [
          {
            name: 'TranslationData',
            referencedTableName: 'movie_translations',
            referencedColumnNames: ['id'],
            columnNames: ['translation_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('translation_data');
  }
}
