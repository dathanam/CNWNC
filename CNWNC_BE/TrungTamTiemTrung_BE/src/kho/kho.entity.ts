import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class kho{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ten: string;

  @Column() 
  idtrungtam: number;
}