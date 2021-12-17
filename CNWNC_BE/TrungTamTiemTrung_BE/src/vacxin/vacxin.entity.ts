import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class vacxin{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ten: string;

  @Column() 
  soluong: number;

  @Column() 
  dongia: number;

  @Column() 
  ngaysanxuat: Date;

  @Column() 
  hansudung: Date;

  @Column() 
  doituongsudung: string;

  @Column() 
  solo: string;

  @Column()
  baoquan: string;

  @Column()
  gianhap: number;
}
