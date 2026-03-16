import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column('text')
  description!: string;

  @Column('simple-array')
  techStack!: string[];

  @Column({ nullable: true })
  thumbnailUrl!: string;

  @Column({ nullable: true })
  githubUrl!: string;

  @Column({ nullable: true })
  liveDemoUrl!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
