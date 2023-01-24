import { ICreateTaskDTO } from '../../../dtos/ICreateTask';
import { IUpdateTaskDTO } from '../../../dtos/IUpdateTaskDTO';
import { Task } from '../entities/Task';

export interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
  findByName(title: string): Promise<Task>;
  // updateDatabase(): Promise<Task[]>;
  list(): Promise<Task[]>;
  delete(id: string): Promise<string>;
  getOneTask(id: string): Promise<Task>;
  update(data: IUpdateTaskDTO, id: string): Promise<Task>;
  // updateMovieBanner({ id, movie_banner }: IUpdateMovieBanner): Promise<void>;
  // updateCardImage({ id, image }: IUpdateMovieImage): Promise<void>;
}
