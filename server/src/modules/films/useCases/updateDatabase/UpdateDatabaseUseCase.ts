import { inject, injectable } from "tsyringe";
import { Film } from "../../infra/typeorm/entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";

@injectable()
export class UpdateFilmsUseCase {
  constructor(
    @inject("FilmsRepository")
    private repository: IFilmsRepository
  ) {}

  async execute(): Promise<Film[]> {
    const films = await this.repository.updateDatabase();

    return films;
  }
}
