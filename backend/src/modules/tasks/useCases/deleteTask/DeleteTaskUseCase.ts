import { ITasksRepository } from '../../infra/typeorm/repositories/ITasksRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteTaskUseCase {
  constructor(
    @inject('TasksRepository')
    private tasksRespository: ITasksRepository,
  ) {}
  async execute(id: string): Promise<string> {
    await this.tasksRespository.delete(id);

    return 'success';
  }
}
