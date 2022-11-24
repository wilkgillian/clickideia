import { Film } from "../entities/Film";
import { ICreateFilmDTO } from "./implementations/FilmsRepository";

export interface IFilmsRepository {
  findByName(title: string): Promise<Film>;
  list(): Promise<Film[]>;
  create({ title, description }: ICreateFilmDTO): Promise<void>;
}
