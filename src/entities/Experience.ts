import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  company!: string;

  @Column('text')
  description!: string;

  @Column()
  startDate!: string;

  @Column({ nullable: true })
  endDate!: string;

  @Column()
  type!: 'work' | 'education';

  @CreateDateColumn()
  createdAt!: Date;
}
