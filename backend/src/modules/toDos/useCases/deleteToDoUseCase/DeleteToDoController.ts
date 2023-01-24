import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteToDoUseCase } from './DeleteToDoUseCase';

export class DeleteToDoController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.body;
    const deleteToDosUseCase = container.resolve(DeleteToDoUseCase);
    await deleteToDosUseCase.execute(id);
    return res.status(201).send({ message: 'ToDoe deletado com sucesso' });
  }
}
