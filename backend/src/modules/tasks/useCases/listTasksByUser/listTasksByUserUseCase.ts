import { ITasksRepository } from '../../infra/typeorm/repositories/ITasksRepository';
import { Task } from '../../infra/typeorm/entities/Task';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListTasksByUserUseCase {
  constructor(
    @inject('TasksRepository')
    private tasksRespository: ITasksRepository,
  ) {}
  async execute(userId: string): Promise<Task[]> {
    const tasks = await this.tasksRespository.listTasksByUser(userId);

    return tasks;
  }
}
