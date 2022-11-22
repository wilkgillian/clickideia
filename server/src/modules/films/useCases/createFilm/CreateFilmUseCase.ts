import { FilmRepository } from "../../repositories/implementations/FilmsRepository";

interface IRequest {
  title: string;
  description: string;
  url_file: string;
}

class CreateFilmUseCase {
  constructor(private filmRepository: FilmRepository) {}

  async execute({ title, description, url_file }: IRequest): Promise<void> {
    const filmAlreadyExists = await this.filmRepository.findByName(title);
    if (filmAlreadyExists) {
      throw new Error("Filme já existe");
    }
    const created_at = new Date();
    this.filmRepository.create({
      title,
      description,
      created_at,
      url_file: url_file,
    });
  }
}

export { CreateFilmUseCase };
