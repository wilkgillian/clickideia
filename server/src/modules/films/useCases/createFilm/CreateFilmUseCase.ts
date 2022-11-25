import { inject, injectable } from "tsyringe";
import { Film } from "../../entities/Film";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { ICreateFilmDTO } from "../../repositories/implementations/FilmsRepository";


interface IRequest {
  title: string;
  description: string;
  url_file: string
}
@injectable()
export class CreateFilmUseCase {
  constructor(
    @inject("FilmsRepository")
    private repository: IFilmsRepository
    ) {}
    
    async execute({
      title,
      description,
      url_file,
    }: IRequest): Promise<Film> {
      // const filmAlreadyExists = await this.filmsRepository.findByName(title);
      // if (filmAlreadyExists) {
        //   throw new Error("Filme já existe");
        // }
        console.log("chegou aqui")
        const film = await this.repository.create({
          title: title,
          description: description,
          url_file: url_file,
        });
        console.log(film)

    console.log("\nAwait passou aqui 2");
    return film
  }
}
