import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("films")
export class Film {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  image: string;

  @Column()
  movie_banner: string;

  @Column()
  movie_url: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  release_date: number;

  @Column()
  running_time: number;

  @Column()
  rt_score: number;

  @Column()
  genre: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
