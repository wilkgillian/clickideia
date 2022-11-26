import { container } from 'tsyringe';
import { FilmRepository } from '../../modules/films/infra/typeorm/repositories/FilmsRepository';
import { IFilmsRepository } from '../../modules/films/repositories/IFilmsRepository';

container.registerSingleton<IFilmsRepository>(
  'FilmsRepository',
  FilmRepository
);
