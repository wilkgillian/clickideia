import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateToDoUseCase } from './CreateToDoUseCase';

export class CreateToDoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, list } = req.body;

    const createToDoUseCase = container.resolve(CreateToDoUseCase);

    const toDo = await createToDoUseCase.execute({
      title,
      content,
      list,
    });

    return res.status(201).json(toDo);
  }
}
