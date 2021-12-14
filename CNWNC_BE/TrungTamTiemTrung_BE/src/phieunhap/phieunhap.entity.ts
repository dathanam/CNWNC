import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class phieunhap{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ngay: Date;

  @Column() 
  idnhanvien: number;

  @Column() 
  tongtien: number;

  @Column()
  trangthai: boolean;
}
