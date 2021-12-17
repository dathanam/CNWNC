import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class chitietkho{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  soluong: number;

  @Column() 
  idvacxin: number;

  @Column() 
  idtrungtam: number;
}