import { FilmRepository } from "../../repositories/implementations/FilmsRepository";
import { CreateFilmController } from "./createFilmController";
import { CreateFilmUseCase } from "./CreateFilmUseCase";

const filmsRepository = FilmRepository.getInstance();
const createFilmUseCase = new CreateFilmUseCase(filmsRepository);

const createFilmController = new CreateFilmController(createFilmUseCase);

export { createFilmController };
