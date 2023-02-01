import { Task } from '../../infra/typeorm/entities/Task';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetOneTaskUseCase } from './GetOneTaskUseCase';

export class GetOneTaskController {
  async handle(req: Request, res: Response): Promise<Response<Task>> {
    const id = req.params.id;
    const getOneTasksUseCase = container.resolve(GetOneTaskUseCase);
    const task = await getOneTasksUseCase.execute(id);
    return res.status(201).json(task);
  }
}
