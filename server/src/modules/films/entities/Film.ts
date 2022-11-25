import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("films")
export class Film {
  @PrimaryColumn()
  id?: string;
  @Column()
  title: string;
  @CreateDateColumn()
  created_at: Date;
  @Column()
  url_file: string;
  @Column()
  description: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
