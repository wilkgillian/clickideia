import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Task } from '../../tasks/infra/typeorm/entities/Task';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @ManyToMany(type => Task, { eager: true })
  @JoinTable()
  tasks: Task[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
