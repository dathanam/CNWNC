import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class trungtam{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ten: string;

  @Column() 
  duongdaynong: string;

  @Column() 
  diachi: string;
}