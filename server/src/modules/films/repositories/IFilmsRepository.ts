import { ICreateFilmDTO } from "../dtos/ICreateFilmDTO";
import {
  IUpdateFilmDTO,
  IUpdateMovieBanner,
  IUpdateMovieImage,
} from "../dtos/IUpdateFilmDTO";
import { Film } from "../infra/typeorm/entities/Film";
export interface IFilmsRepository {
  create(data: ICreateFilmDTO): Promise<Film>;
  findByName(title: string): Promise<Film>;
  updateDatabase(): Promise<Film[]>;
  list(): Promise<Film[]>;
  delete(id: string): Promise<string>;
  getOneFilm(id: string): Promise<Film>;
  update(data: IUpdateFilmDTO, id: string): Promise<Film>;
  updateMovieBanner({ id, movie_banner }: IUpdateMovieBanner): Promise<void>;
  updateFilmImage({ id, image }: IUpdateMovieImage): Promise<void>;
}
