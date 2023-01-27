import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTasksByUserUseCase } from './listTasksByUserUseCase';

export class ListTasksByUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.body;

    const listTasksByUserUseCase = container.resolve(ListTasksByUserUseCase);
    const all = await listTasksByUserUseCase.execute(userId);
    return res.status(201).json(all);
  }
}
