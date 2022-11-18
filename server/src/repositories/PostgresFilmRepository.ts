import { IFilmsRepository } from '../@types/types';
import { Film } from '../model/film';
import { ICreateFilmDTO } from './FilmsRepository';

class PostgresFilmRepository implements IFilmsRepository {
  findByName(title: string): Film {
    // throw new Error('Method not implemented.');
    console.log(title);
    const date = new Date();
    return { title: title, description: 'description', created_at: date };
  }
  list(): Film[] {
    // throw new Error('Method not implemented.');
    return [];
  }
  create({ title, description }: ICreateFilmDTO): void {
    // throw new Error('Method not implemented.');
    console.log(title, description);
  }
}
export { PostgresFilmRepository };
