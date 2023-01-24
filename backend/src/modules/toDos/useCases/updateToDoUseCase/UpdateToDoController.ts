import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateToDoUseCase } from './UpdateToDoUseCase';

export class UpdateToDoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, list, id } = req.body;

    const updateToDoUseCase = container.resolve(UpdateToDoUseCase);
    const toDo = await updateToDoUseCase.execute(id, {
      title,
      content,
      list,
    });

    return res.status(201).json(toDo);
  }
}
