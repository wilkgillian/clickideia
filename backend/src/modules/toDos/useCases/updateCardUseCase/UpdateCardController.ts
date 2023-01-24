import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateCardUseCase } from './UpdateCardUseCase';

export class UpdateCardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, list, id } = req.body;

    const updateCardUseCase = container.resolve(UpdateCardUseCase);
    const toDo = await updateCardUseCase.execute(id, {
      title,
      content,
      list,
    });

    return res.status(201).json(toDo);
  }
}
