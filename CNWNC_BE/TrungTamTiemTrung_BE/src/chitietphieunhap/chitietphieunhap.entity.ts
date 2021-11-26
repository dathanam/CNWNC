import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class chitietphieunhap{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  soluong: number;

  @Column() 
  thanhtien: number;

  @Column() 
  idphieunhap: number;

  @Column() 
  idvacxin: number;
}
