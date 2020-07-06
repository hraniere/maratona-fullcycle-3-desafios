import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Live {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;
}