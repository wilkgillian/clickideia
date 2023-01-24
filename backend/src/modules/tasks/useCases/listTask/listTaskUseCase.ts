import { ITasksRepository } from '../../infra/typeorm/repositories/ITasksRepository';
import { Task } from '../../infra/typeorm/entities/Task';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListTaskUseCase {
  constructor(
    @inject('TasksRepository')
    private tasksRespository: ITasksRepository,
  ) {}
  async execute(): Promise<Task[]> {
    const tasks = await this.tasksRespository.list();

    return tasks;
  }
}
