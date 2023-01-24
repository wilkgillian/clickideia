import { ToDo } from '../../infra/typeorm/entities/ToDo';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetOneToDoUseCase } from './GetOneToDoUseCase';

export class GetOneToDoController {
  async handle(req: Request, res: Response): Promise<Response<ToDo>> {
    const { id } = req.body;
    const getOneToDosUseCase = container.resolve(GetOneToDoUseCase);
    const toDo = await getOneToDosUseCase.execute(id);
    return res.status(201).json(toDo);
  }
}
