import { Role } from 'src/role/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class nhanvien{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ten: string;

  @Column() 
  ngaysinh: Date;

  @Column() 
  vitri: string;

  @Column() 
  bangcap: string;

  @Column() 
  luong: number;

  @Column() 
  diachi: string;

  @Column() 
  sdt: string;

  @Column() 
  email: string;

  @Column() 
  username: string;

  @Column() 
  password: string;

  @Column({type: 'enum', enum: Role, default: Role.USER}) 
  quyen: Role;

  @Column() 
  loginfirst: number;

  @Column() 
  code: string;

  @Column() 
  checkcode: boolean;
}
