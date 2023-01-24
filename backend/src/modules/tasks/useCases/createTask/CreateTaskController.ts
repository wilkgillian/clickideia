import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateTaskUseCase } from './CreateTaskUseCase';

export class CreateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, content, list, status } = req.body;

    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    const task = await createTaskUseCase.execute(
      {
        title,
        content,
        list,
        status,
      },
      res,
    );
    return res.status(201).json(task);
  }
}
