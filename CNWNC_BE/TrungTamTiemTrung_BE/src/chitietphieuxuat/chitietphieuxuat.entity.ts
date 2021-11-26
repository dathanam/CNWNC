import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class chitietphieuxuat{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  soluong: number;

  @Column() 
  thanhtien: number;

  @Column() 
  idphieuxuat: number;

  @Column() 
  idvacxin: number;
}
