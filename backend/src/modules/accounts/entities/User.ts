import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Task } from '../../tasks/infra/typeorm/entities/Task';

@Entity('users')
class User {
  @PrimaryColumn()
  @OneToOne(type => Task, task => task.userId)
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

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.isAdmin) {
      this.isAdmin = false;
    }
  }
}

export { User };
