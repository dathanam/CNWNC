import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class chitietxuatkho{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  soluong: number;

  @Column() 
  idchitietkho: number;

  @Column() 
  idxuatkho: number;
}