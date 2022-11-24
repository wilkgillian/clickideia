import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { Film } from "../../entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { ICreateFilmDTO } from "../../repositories/implementations/FilmsRepository";

@injectable()
export class CreateFilmUseCase {
  constructor(
    @inject("FilmsRepository") private filmsRepository: IFilmsRepository
  ) {}

  async execute({
    title,
    description,
    url_file,
  }: ICreateFilmDTO): Promise<void> {
    const filmAlreadyExists = await this.filmsRepository.findByName(title);
    console.log("\nAwait passou aqui");
    if (filmAlreadyExists) {
      throw new Error("Filme já existe");
    }
    // const created_at = new Date();
    await this.filmsRepository.create({
      title,
      description,
      url_file,
    });
    console.log("\nAwait passou aqui 2");
  }
}
