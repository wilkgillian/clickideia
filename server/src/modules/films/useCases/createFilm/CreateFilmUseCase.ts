import { FilmRepository } from "../../repositories/implementations/FilmsRepository";

interface IRequest {
  title: string;
  description: string;
}

class CreateFilmUseCase {
  constructor(private filmRepository: FilmRepository) {}

  execute({ title, description }: IRequest): void {
    const filmAlreadyExists = this.filmRepository.findByName(title);
    if (filmAlreadyExists) {
      throw new Error("Filme já existe");
    }
    const created_at = new Date();
    this.filmRepository.create({ title, description, created_at });
  }
}

export { CreateFilmUseCase };
