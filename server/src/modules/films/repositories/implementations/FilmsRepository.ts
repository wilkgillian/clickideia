import { IFilmsRepository } from "./../IFilmsRepository";
import { getRepository, Repository } from "typeorm";
import S3Storage from "../../../../utils/S3Storage";
import { Film } from "../../entities/Film";
import myDataSource from "../../../../database";

export interface ICreateFilmDTO {
  id?: string;
  title: string;
  created_at: Date;
  url_file: string;
  // original_title?: string;
  // original_title_romanised?: string;
  // image: string;
  // movie_banner: string;
  description: string;
  // director: string;
  // producer: string;
  // release_date: number;
  // running_time: number;
  // rt_score?: number;
  // people?: number;
  // species?: number;
  // locations?: number;
  // vehicles?: number;
  // url?: number;
}

class FilmRepository implements IFilmsRepository {
  private films: Repository<Film>;

  // private static INSTANCE: FilmRepository;

  constructor() {
    this.films = myDataSource.getRepository(Film);
  }

  // public static getInstance(): FilmRepository {
  //   if (!FilmRepository.INSTANCE) {
  //     FilmRepository.INSTANCE = new FilmRepository();
  //   }
  //   return FilmRepository.INSTANCE;
  // }

  async create({
    title,
    description,
    url_file,
  }: ICreateFilmDTO): Promise<void> {
    const film = this.films.create({
      title,
      description,
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
