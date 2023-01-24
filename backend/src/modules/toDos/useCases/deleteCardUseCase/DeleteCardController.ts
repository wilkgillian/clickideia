import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCardUseCase } from './DeleteCardUseCase';

export class DeleteCardController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.body;
    const deleteCardsUseCase = container.resolve(DeleteCardUseCase);
    await deleteCardsUseCase.execute(id);
    return res.status(201).send({ message: 'Carddeletado com sucesso' });
  }
}
