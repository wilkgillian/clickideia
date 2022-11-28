import { Repository } from "typeorm";
import myDataSource from "../../../../../shared/infra/typeorm";
import { ICreateFilmDTO } from "../../../dtos/ICreateFilmDTO";
import { v4 as uuidV4 } from "uuid";
import { IFilmsRepository } from "../../../repositories/IFilmsRepository";
import { Film } from "../entities/Film";
import { api } from "../../../services/api";

export class FilmRepository implements IFilmsRepository {
  private films: Repository<Film>;

  constructor() {
    this.films = myDataSource.getRepository(Film);
  }

  async create({
    title,
    description,
    image,
    movie_banner,
    director,
    producer,
    release_date,
    rt_score,
    running_time,
  }: ICreateFilmDTO): Promise<Film> {
    const film = this.films.create({
      title,
      description,
      image,
      movie_banner,
      director,
      producer,
      release_date,
      rt_score,
      running_time,
      id: uuidV4(),
    });

    await this.films.save(film);

    return film;
  }
  async updateDatabase(): Promise<Film[]> {
    try {
      const { data } = await api.get("/films");
      data.map((dat: ICreateFilmDTO) => {
        const film = this.films.create({
          id: dat.id,
          title: dat.title,
          description: dat.description,
          image: dat.image,
          movie_banner: dat.movie_banner,
          director: dat.director,
          producer: dat.producer,
          release_date: dat.release_date,
          rt_score: dat.rt_score,
          running_time: dat.running_time,
        });
        this.films.save(film);
      });
    } catch {
      throw new Error("Falha ao obter dados");
    }
    const films = await this.films.find();
    return films;
  }
  // async list(): Promise<Film[]> {
  //   const films = await this.films.find();
  //   return films;
  // }
  async findByName(title: string): Promise<Film> {
    const film = await this.films.findOne({
      where: {
        title: title,
      },
    });
    return film;
  }
}
