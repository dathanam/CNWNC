import { Role } from 'src/role/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class nhacungcap{
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  ten: string;

  @Column()
  diachi: String;
}
