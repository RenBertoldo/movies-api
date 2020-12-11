import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

enum Status {
  'Rumored',
  'Planned',
  'In Production',
  'Post Production',
  'Released',
  'Canceled',
}
@Entity('movies')
export class Movie {
  @ObjectIdColumn({ type: 'number' })
  _id!: ObjectID;

  @Column()
  id!: number;

  @Column()
  adult!: boolean;

  @Column({ nullable: true, default: null })
  backdrop_path!: string;

  @Column('simple-json', { nullable: true, default: null })
  belongs_to_collection!: any;

  @Column()
  budget!: number;

  @Column()
  genres!: { id: number; name: string }[];

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

  @Column()
  production_companies!: {
    id: number;
    name: string;
    logo_path?: string;
    origin_country: string;
  }[];

  @Column('simple-array')
  production_countries!: { name: string; iso_3166_1: string }[];

  @Column()
  release_date!: Date;

  @Column()
  revenue!: number;

  @Column({ nullable: true, default: null })
  runtime!: number;

  @Column('simple-array')
  spoken_languages!: { name: string; iso_639_1: string }[];

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

  @Column({ nullable: true, default: null })
  translations!: {
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
