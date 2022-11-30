import { inject, injectable } from "tsyringe";
import { IUpdateFilmDTO } from "../../dtos/IUpdateFilmDTO";
import { Film } from "../../infra/typeorm/entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";

@injectable()
export class UpdateFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private repository: IFilmsRepository
  ) {}

  async execute(id: string, data: IUpdateFilmDTO): Promise<Film> {
    const film = await this.repository.update(data, id);

    return film;
  }
}
