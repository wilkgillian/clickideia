import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

export class DeleteTaskController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.body;
    const deleteTasksUseCase = container.resolve(DeleteTaskUseCase);
    await deleteTasksUseCase.execute(id);
    return res.status(201).send({ message: 'Task deletado com sucesso' });
  }
}
