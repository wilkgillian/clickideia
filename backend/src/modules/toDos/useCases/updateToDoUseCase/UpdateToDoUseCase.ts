import { inject, injectable } from 'tsyringe';
import { IUpdateToDoDTO } from '../../dtos/IUpdateToDoDTO';
import { ToDo } from '../../infra/typeorm/entities/ToDo';
import { IToDosRepository } from '../../repositories/IToDosRepository';

@injectable()
export class UpdateToDoUseCase {
  constructor(
    @inject('ToDosRepository')
    private repository: IToDosRepository,
  ) {}

  async execute(id: string, data: IUpdateToDoDTO): Promise<ToDo> {
    const toDo = await this.repository.update(data, id);

    return toDo;
  }
}
