import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTaskUseCase } from './listTaskUseCase';

export class ListTasksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listTasksUseCase = container.resolve(ListTaskUseCase);
    const all = await listTasksUseCase.execute();
    return res.status(201).json(all);
  }
}
