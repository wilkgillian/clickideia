import { IFilmsRepository } from '../../repositories/IFilmsRepository';
import { Film } from '../../infra/typeorm/entities/Film';

class ListFilmUseCase {
  constructor(private filmsRespository: IFilmsRepository) {}
  async execute(): Promise<Film[]> {
    const films = await this.filmsRespository.list();

    return films;
  }
}

export { ListFilmUseCase };
