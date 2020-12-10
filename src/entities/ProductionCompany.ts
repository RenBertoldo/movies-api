import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductionCompany {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true, default: null })
  logo_path!: string;

  @Column()
  origin_country!: string;
}
