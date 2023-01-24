import { ToDo } from '../../infra/typeorm/entities/ToDo';
import { IToDosRepository } from '../../repositories/IToDosRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetOneToDoUseCase {
  constructor(
    @inject('ToDosRepository')
    private toDosRespository: IToDosRepository,
  ) {}
  async execute(id: string): Promise<ToDo> {
    const toDo = await this.toDosRespository.getOneToDo(id);

    return toDo;
  }
}
