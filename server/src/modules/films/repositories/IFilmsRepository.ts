import { ICreateFilmDTO } from '../dtos/ICreateFilmDTO';
import { Film } from '../infra/typeorm/entities/Film';
export interface IFilmsRepository {
  create(data: ICreateFilmDTO): Promise<Film>;
  findByName(title: string): Promise<Film>;
}
