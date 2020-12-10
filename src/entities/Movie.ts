import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from './Genre';
import { ProductionCompany } from './ProductionCompany';
import { ProductionCountry } from './ProductionCountry';
import { SpokenLanguage } from './SpokenLanguage';
enum Status {
  'Rumored',
  'Planned',
  'In Production',
  'Post Production',
  'Released',
  'Canceled',
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  adult!: boolean;

  @Column({ nullable: true, default: null })
  backdrop_path!: string;

  @Column()
  budget!: number;

  @ManyToMany(() => Genre)
  @JoinTable()
  genres!: Genre[];

  @Column({ nullable: true, default: null })
  homepage!: string;

  @Column({ nullable: true, default: null })
  imdb_id!: string;

  @Column()
  original_language!: string;

  @Column()
  original_title!: string;

  @Column({ nullable: true, default: null })
  overview!: string;

  @Column()
  popularity!: number;

  @Column({ nullable: true, default: null })
  poster_path!: string;

  @ManyToMany(() => ProductionCompany)
  @JoinTable()
  production_companies!: ProductionCompany[];

  @ManyToMany(() => ProductionCountry)
  @JoinTable()
  production_countries!: ProductionCountry[];

  @Column()
  release_date!: Date;

  @Column()
  revenue!: number;

  @Column({ nullable: true, default: null })
  runtime!: number;

  @ManyToMany(() => SpokenLanguage)
  @JoinTable()
  spoken_languages!: SpokenLanguage[];

  @Column('int')
  status!: Status;

  @Column({ nullable: true, default: null })
  tagline!: string;

  @Column()
  video!: boolean;

  @Column()
  vote_avarage!: number;

  @Column()
  voute_count!: number;
}
