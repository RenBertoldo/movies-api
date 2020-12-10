import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TranslationData } from './TranslationData';

@Entity()
export class Translation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  iso_3166_1!: string;

  @Column()
  iso_639_1!: string;

  @Column()
  name!: string;

  @Column()
  english_name!: string;

  @OneToOne(() => TranslationData)
  @JoinColumn()
  data!: TranslationData;
}
