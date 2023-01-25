import { inject, injectable } from 'tsyringe';
import { ITasksRepository } from '../../infra/typeorm/repositories/ITasksRepository';
import { ICreateTaskDTO } from '../../dtos/ICreateTask';
import { Task } from '../../infra/typeorm/entities/Task';
import { Response } from 'express';

@injectable()
export class CreateTaskUseCase {
  constructor(
    @inject('TasksRepository')
    private repository: ITasksRepository,
  ) {}

  async execute(
    { title, content, list, userId, status }: ICreateTaskDTO,
    res: Response,
  ): Promise<Task | Response> {
    const taskAlreadyExists = await this.repository.findByName(title);
    if (taskAlreadyExists) {
      return res.status(500).send({ message: 'task já existe' });
    }

    const task = await this.repository.create({
      title,
      content,
      list,
      status,
      userId,
    });
    return task;
  }
}
