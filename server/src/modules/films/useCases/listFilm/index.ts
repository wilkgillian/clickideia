import { FilmRepository } from "../../repositories/implementations/FilmsRepository";
import { ListFilmController } from "./listFilmController";
import { ListFilmUseCase } from "./listFilmUseCase";

const filmRepository = null;
const listFilmUseCase = new ListFilmUseCase(filmRepository);
const listFilmController = new ListFilmController(listFilmUseCase);

export { listFilmController };
