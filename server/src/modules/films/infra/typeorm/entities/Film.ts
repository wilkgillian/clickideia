import { v4 as uuidV4 } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('films')
export class Film {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  title: string;
  @CreateDateColumn()
  created_at: Date;
  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
