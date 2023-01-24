import { Card } from '../../infra/typeorm/entities/Card';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetOneCardUseCase } from './GetOneCardUseCase';

export class GetOneCardController {
  async handle(req: Request, res: Response): Promise<Response<Card>> {
    const { id } = req.body;
    const getOneCardsUseCase = container.resolve(GetOneCardUseCase);
    const card = await getOneCardsUseCase.execute(id);
    return res.status(201).json(card);
  }
}
