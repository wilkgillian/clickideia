import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @Column()
  status: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
