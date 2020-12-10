import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { ProductionCompany } from '../../entities/ProductionCompany';

export class populateProductionCompaniesTable1607575579214
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const companies = [
      { name: 'Warner Bros', origin_country: 'US' },
      { name: 'Sony Pictures Motion Picture.', origin_country: 'US' },
      { name: 'Walt Disney Studios', origin_country: 'US' },
      { name: 'Universal Pictures', origin_country: 'US' },
      { name: '20th Century Fox', origin_country: 'US' },
      { name: 'Paramount Pictures', origin_country: 'US' },
      { name: 'Lionsgate Films', origin_country: 'US' },
      { name: 'The Weinstein Company', origin_country: 'US' },
      { name: 'Metro-Goldwyn-Mayer Studios', origin_country: 'US' },
      { name: 'DreamWorks Pictures', origin_country: 'US' },
      { name: 'Walt Disney', origin_country: 'US' },
      { name: 'Paramount', origin_country: 'US' },
      { name: 'Pixar', origin_country: 'US' },
      { name: 'Globo Filmes', origin_country: 'BR' },
    ];
    const productionCompaniesRepository = getRepository(ProductionCompany);

    for (const company of companies) {
      const productionCompany = productionCompaniesRepository.create(company);

      await productionCompaniesRepository.save(productionCompany);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
