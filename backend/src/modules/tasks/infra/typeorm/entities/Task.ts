import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
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
