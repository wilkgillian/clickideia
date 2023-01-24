import { IToDosRepository } from '../../repositories/IToDosRepository';
import { ToDo } from '../../infra/typeorm/entities/ToDo';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListToDoUseCase {
  constructor(
    @inject('ToDosRepository')
    private toDosRespository: IToDosRepository,
  ) {}
  async execute(): Promise<ToDo[]> {
    const toDos = await this.toDosRespository.list();

    return toDos;
  }
}
