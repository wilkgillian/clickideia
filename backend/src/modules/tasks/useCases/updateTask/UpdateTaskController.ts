import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

export class UpdateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const { title, content, list, status } = req.body;

    const updateTaskUseCase = container.resolve(UpdateTaskUseCase);
    const toDo = await updateTaskUseCase.execute(id, {
      title,
      content,
      list,
      status,
    });

    return res.status(201).json(toDo);
  }
}
