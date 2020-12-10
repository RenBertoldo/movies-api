import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class TranslationData {
  @PrimaryColumn()
  translation_id!: number;

  @Column()
  title!: string;

  @Column()
  overview!: string;

  @Column()
  homepage!: string;
}
