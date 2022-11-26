import { Repository } from 'typeorm';
import myDataSource from '../../../../../shared/infra/typeorm';
import { ICreateFilmDTO } from '../../../dtos/ICreateFilmDTO';
import { IFilmsRepository } from '../../../repositories/IFilmsRepository';
import { Film } from '../entities/Film';

export class FilmRepository implements IFilmsRepository {
  private films: Repository<Film>;

  constructor() {
    this.films = myDataSource.getRepository(Film);
  }

  async create({ title, description }: ICreateFilmDTO): Promise<Film> {
    const film = this.films.create({
      title,
      description
    });

    await this.films.save(film);

    return film;
  }

  // async list(): Promise<Film[]> {
  //   const films = await this.films.find();
  //   return films;
  // }
  async findByName(title: string): Promise<Film> {
    const film = await this.films.findOne({
      where: {
        title: title
      }
    });
    return film;
  }
}
