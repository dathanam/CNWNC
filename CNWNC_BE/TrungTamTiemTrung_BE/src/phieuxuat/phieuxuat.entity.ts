import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class phieuxuat{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ngay: string;

  @Column() 
  idnhanvien: number;

  @Column() 
  idtrungtam: number;

  @Column() 
  tongtien: number;

  @Column() 
  trangthai: boolean;
}
