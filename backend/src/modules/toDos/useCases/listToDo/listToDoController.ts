import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListToDoUseCase } from './listToDoUseCase';

export class ListToDosController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listToDosUseCase = container.resolve(ListToDoUseCase);
    const all = await listToDosUseCase.execute();
    return res.status(201).json(all);
  }
}
