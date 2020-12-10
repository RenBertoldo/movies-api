import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SpokenLanguage {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  iso_639_1!: string;
}
