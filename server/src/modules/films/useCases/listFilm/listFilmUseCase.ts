import { IFilmsRepository } from "../../repositories/IFilmsRepository";
import { Film } from "../../model/Film";

class ListFilmUseCase {
  constructor(private filmsRespository: IFilmsRepository) {}
  execute(): Film[] {
    const films = this.filmsRespository.list();

    return films;
  }
}

export { ListFilmUseCase };
