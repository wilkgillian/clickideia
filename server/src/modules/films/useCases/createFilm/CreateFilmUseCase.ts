import { inject, injectable } from "tsyringe";
import { ICreateFilmDTO } from "../../dtos/ICreateFilmDTO";
import { Film } from "../../infra/typeorm/entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";

@injectable()
export class CreateFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private repository: IFilmsRepository
  ) {}

  async execute({
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
    const filmAlreadyExists = await this.repository.findByName(title);
    if (filmAlreadyExists) {
      throw new Error("Filme já existe");
    }

    const film = await this.repository.create({
      title,
      description,
      image,
      movie_banner,
      director,
      producer,
      release_date,
      rt_score,
      running_time,
    });

    return film;
  }
}
