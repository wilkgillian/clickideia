import { Film } from './../../entities/Film';
import { IFilmsRepository } from "./../IFilmsRepository";
import { Entity, Repository } from "typeorm";
// import myDataSource, { createConnection } from "../../../../database";
import { User } from "../../../accounts/entities/User";
import myDataSource from '../../../../database';

export interface ICreateFilmDTO {
  id?: string;
  title: string;
  created_at?: Date;
  url_file: string;
  description: string;
}

class FilmRepository implements IFilmsRepository {
  private films: Repository<Film>;

  constructor() {
    this.films = myDataSource.getRepository(Film);
  }

  async create({
    title,
    description,
    created_at,
    url_file,
  }: ICreateFilmDTO): Promise<void> {
    const film = this.films.create({
      title,
      description,
      created_at,
      url_file,
    });
    await this.films.save(film);
  }
  async list(): Promise<Film[]> {
    const films = await this.films.find();
    return films;
  }
  async findByName(title: string): Promise<Film> {
    const film = await this.films.findOne({
      where: {
        title: title,
      },
    });
    return film;
  }
}

export { FilmRepository };
