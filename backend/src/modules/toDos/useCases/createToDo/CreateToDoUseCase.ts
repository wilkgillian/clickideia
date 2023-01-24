import { inject, injectable } from 'tsyringe';
import { IToDosRepository } from '../../repositories/IToDosRepository';
import { ICreateToDoDTO } from '../../dtos/ICreateToDoDTO';
import { ToDo } from '../../infra/typeorm/entities/ToDo';

@injectable()
export class CreateToDoUseCase {
  constructor(
    @inject('ToDosRepository')
    private repository: IToDosRepository,
  ) {}

  async execute({ title, content, list }: ICreateToDoDTO): Promise<ToDo> {
    const toDoAlreadyExists = await this.repository.findByName(title);
    if (toDoAlreadyExists) {
      throw new Error('ToDo já existe');
    }

    const toDo = await this.repository.create({
      title,
      content,
      list,
    });

    return toDo;
  }
}
