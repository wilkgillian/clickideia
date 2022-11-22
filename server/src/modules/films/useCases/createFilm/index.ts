import { FilmRepository } from "../../repositories/implementations/FilmsRepository";
import { CreateFilmController } from "./createFilmController";
import { CreateFilmUseCase } from "./CreateFilmUseCase";

export default (): CreateFilmController => {
  const filmsRepository = new FilmRepository();
  const createFilmUseCase = new CreateFilmUseCase(filmsRepository);
  const createFilmController = new CreateFilmController(createFilmUseCase);

  return createFilmController;
};
