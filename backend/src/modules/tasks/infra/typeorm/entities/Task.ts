import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../../../accounts/entities/User';

@Entity('tasks')
export class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  list: string;

  @Column()
  status: 'making' | 'to_do' | 'completed' | 'to_define';

  @CreateDateColumn()
  created_at: Date;

  // @ManyToOne(type => User, user => user.tasks)
  // userId: User;

  @OneToMany(type => User, user => user.tasks)
  userId: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.status) {
      this.status = 'to_do';
    }
  }
}
