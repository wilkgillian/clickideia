import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private filmsRespository: IFilmsRepository
  ) {}
  async execute(id: string): Promise<string> {
    await this.filmsRespository.delete(id);

    return "success";
  }
}
