import { Film } from "./../../infra/typeorm/entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GetOneFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private filmsRespository: IFilmsRepository
  ) {}
  async execute(id: string): Promise<Film> {
    const film = await this.filmsRespository.getOneFilm(id);

    return film;
  }
}
