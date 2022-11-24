import { inject, injectable } from "tsyringe";
import { Film } from "../../entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { ICreateFilmDTO } from "../../repositories/implementations/FilmsRepository";


@injectable()
class CreateFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private filmRepository: IFilmsRepository
  ) {}

  async execute({
    title,
    description,
    url_file,
  }: ICreateFilmDTO): Promise<void> {
    const filmAlreadyExists = await this.filmRepository.findByName(title);
    if (filmAlreadyExists) {
      throw new Error("Filme já existe");
    }
    // const created_at = new Date();
    await this.filmRepository.create({
      title,
      description,
      url_file: url_file,
    });

  }
}

export { CreateFilmUseCase };
