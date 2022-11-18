import { FilmRepository } from "../../repositories/implementations/FilmsRepository";
import { ListFilmController } from "./listFilmController";
import { ListFilmUseCase } from "./listFilmUseCase";

const filmRepository = FilmRepository.getInstance();
const listFilmUseCase = new ListFilmUseCase(filmRepository);
const listFilmController = new ListFilmController(listFilmUseCase);

export { listFilmController };
