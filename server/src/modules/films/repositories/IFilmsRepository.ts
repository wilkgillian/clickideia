import { Film } from '../model/Film';
import { ICreateFilmDTO } from './implementations/FilmsRepository';

export interface IFilmsRepository {
  findByName(title: string): Film;
  list(): Film[];
  create({ title, description, url_file }: ICreateFilmDTO): void;
}
