import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCardUseCase } from './CreateCardUseCase';

export class CreateCardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, list } = req.body;

    const createCardUseCase = container.resolve(CreateCardUseCase);

    const card = await createCardUseCase.execute({
      title,
      content,
      list,
    }, res);
    return res.status(201).json(card);
  }
}
