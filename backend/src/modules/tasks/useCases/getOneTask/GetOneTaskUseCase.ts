import { Task } from '../../infra/typeorm/entities/Task';
import { ITasksRepository } from '../../infra/typeorm/repositories/ITasksRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetOneTaskUseCase {
  constructor(
    @inject('TasksRepository')
    private TasksRespository: ITasksRepository,
  ) {}
  async execute(id: string): Promise<Task> {
    const task = await this.TasksRespository.getOneTask(id);

    return task;
  }
}
