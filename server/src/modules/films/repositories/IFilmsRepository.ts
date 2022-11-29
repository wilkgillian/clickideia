import { ICreateFilmDTO } from '../dtos/ICreateFilmDTO';
import { IUpdateFilmDTO, IUpdateMovieBanner } from '../dtos/IUpdateFilmDTO';
import { Film } from '../infra/typeorm/entities/Film';
export interface IFilmsRepository {
  create(data: ICreateFilmDTO): Promise<Film>;
  findByName(title: string): Promise<Film>;
  updateDatabase(): Promise<Film[]>;
  list(): Promise<Film[]>;
  delete(id: string): Promise<string>;
  update(data: IUpdateFilmDTO, id: string): Promise<Film>;
  updateMovieBanner({ id, movie_banner }: IUpdateMovieBanner): Promise<void>;
}
