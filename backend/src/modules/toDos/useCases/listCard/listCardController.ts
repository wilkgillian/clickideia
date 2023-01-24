import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCardUseCase } from './listCardUseCase';

export class ListCardsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCardsUseCase = container.resolve(ListCardUseCase);
    const all = await listCardsUseCase.execute();
    return res.status(201).json(all);
  }
}
