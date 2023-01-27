import { ICreateTaskDTO } from '../../../dtos/ICreateTask';
import { IUpdateTaskDTO } from '../../../dtos/IUpdateTaskDTO';
import { Task } from '../entities/Task';

export interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<Task>;
  findByName(title: string, userId: string): Promise<Task>;
  list(): Promise<Task[]>;
  listTasksByUser(userId: string): Promise<Task[]>;
  delete(id: string): Promise<string>;
  getOneTask(id: string): Promise<Task>;
  update(data: IUpdateTaskDTO, id: string): Promise<Task>;
}
