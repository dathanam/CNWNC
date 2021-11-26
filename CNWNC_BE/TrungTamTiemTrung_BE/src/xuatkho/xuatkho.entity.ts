import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class xuatkho{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ngay: Date;

  @Column() 
  idnhanvien: number;

  @Column() 
  idkho: number;
}