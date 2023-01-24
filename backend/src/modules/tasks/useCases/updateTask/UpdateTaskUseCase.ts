import { inject, injectable } from 'tsyringe';
import { IUpdateTaskDTO } from '../../dtos/IUpdateTaskDTO';
import { Task } from '../../infra/typeorm/entities/Task';
import { ITasksRepository } from '../../infra/typeorm/repositories/ITasksRepository';

@injectable()
export class UpdateTaskUseCase {
  constructor(
    @inject('TasksRepository')
    private repository: ITasksRepository,
  ) {}

  async execute(id: string, data: IUpdateTaskDTO): Promise<Task> {
    const task = await this.repository.update(data, id);

    return task;
  }
}
