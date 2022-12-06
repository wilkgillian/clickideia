import { Repository } from "typeorm";
import myDataSource from "../../../../../shared/infra/typeorm";
import { ICreateFilmDTO } from "../../../dtos/ICreateFilmDTO";
import { v4 as uuidV4 } from "uuid";
import { IFilmsRepository } from "../../../repositories/IFilmsRepository";
import { Film } from "../entities/Film";
import { api } from "../../../services/api";
import {
  IUpdateFilmDTO,
  IUpdateMovieBanner,
  IUpdateMovieImage,
} from "../../../dtos/IUpdateFilmDTO";

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
    movie_url,
    director,
    producer,
    release_date,
    rt_score,
    running_time,
    genre,
  }: ICreateFilmDTO): Promise<Film> {
    const film = this.films.create({
      title,
      description,
      image,
      movie_banner,
      movie_url,
      director,
      producer,
      release_date,
      rt_score,
      running_time,
      genre: genre ? genre : "Estrangeiro",
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
          movie_url:
            "https://www.youtube.com/watch?v=Y9TL_43X3Lc&ab_channel=FullStackMastery",
          director: dat.director,
          producer: dat.producer,
          release_date: dat.release_date,
          rt_score: dat.rt_score,
          running_time: dat.running_time,
          genre: "Estrangeiro",
        });
        this.films.save(film);
      });
    } catch {
      throw new Error("Falha ao obter dados");
    }
    const films = await this.films.find();
    return films;
  }
  async list(): Promise<Film[]> {
    try {
      const films = await this.films.find({
        order: {
          created_at: "DESC",
        },
      });
      return films;
    } catch {
      throw new Error("Falha ao obter dados");
    }
  }
  async findByName(title: string): Promise<Film> {
    const film = await this.films.findOne({
      where: {
        title: title,
      },
    });
    return film;
  }
  async delete(id: string): Promise<string> {
    try {
      await this.films
        .createQueryBuilder("films")
        .delete()
        .from(Film)
        .where({ id: id })
        .execute();
      return "Filme deletado com sucesso";
    } catch {
      throw new Error("Erro ao deletar filme");
    }
  }
  async update(data: IUpdateFilmDTO, id: string): Promise<Film> {
    try {
      const existentData = await this.films.findOne({
        where: {
          id: id,
        },
      });
      await this.films
        .createQueryBuilder()
        .update(Film)
        .set({
          title: data.title ? data.title : existentData.title,
          description: data.description
            ? data.description
            : existentData.description,
          director: data.director ? data.director : existentData.director,
          producer: data.producer ? data.producer : existentData.producer,
          genre: data.genre ? data.genre : existentData.genre,
          image: data.image ? data.image : existentData.image,
          movie_banner: data.movie_banner
            ? data.movie_banner
            : existentData.movie_banner,
          movie_url: data.movie_url ? data.movie_url : existentData.movie_url,
          release_date: data.release_date
            ? data.release_date
            : existentData.release_date,
          rt_score: data.rt_score ? data.rt_score : existentData.rt_score,
          running_time: data.running_time
            ? data.running_time
            : existentData.running_time,
        })
        .where({
          id: id,
        })
        .execute();

      const film = await this.films.findOne({
        where: {
          id: id,
        },
      });
      return film;
    } catch {
      throw new Error("Erro ao editar filme");
    }
  }
  async updateMovieBanner({
    id,
    movie_banner,
  }: IUpdateMovieBanner): Promise<void> {
    await this.films
      .createQueryBuilder()
      .update(Film)
      .set({
        movie_banner: movie_banner,
      })
      .where({
        id: id,
      })
      .execute();
  }
  async updateFilmImage({ id, image }: IUpdateMovieImage): Promise<void> {
    await this.films
      .createQueryBuilder()
      .update(Film)
      .set({
        image: image,
      })
      .where({
        id: id,
      })
      .execute();
  }
  async getOneFilm(id: string) {
    const film = await this.films.findOne({
      where: {
        id: id,
      },
    });
    return film;
  }
}
