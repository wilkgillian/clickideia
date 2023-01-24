import { ICreateToDoDTO } from '../dtos/ICreateToDoDTO';
import { IUpdateToDoDTO } from '../dtos/IUpdateToDoDTO';
import { ToDo } from '../infra/typeorm/entities/ToDo';

export interface IToDosRepository {
  create(data: ICreateToDoDTO): Promise<ToDo>;
  findByName(title: string): Promise<ToDo>;
  // updateDatabase(): Promise<ToDo[]>;
  list(): Promise<ToDo[]>;
  delete(id: string): Promise<string>;
  getOneToDo(id: string): Promise<ToDo>;
  update(data: IUpdateToDoDTO, id: string): Promise<ToDo>;
  // updateMovieBanner({ id, movie_banner }: IUpdateMovieBanner): Promise<void>;
  // updateToDoImage({ id, image }: IUpdateMovieImage): Promise<void>;
}
