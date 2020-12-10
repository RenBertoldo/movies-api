import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductionCountry {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  iso_3166_1!: string;
}
