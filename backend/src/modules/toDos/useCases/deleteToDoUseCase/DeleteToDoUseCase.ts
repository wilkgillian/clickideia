import { IToDosRepository } from '../../repositories/IToDosRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteToDoUseCase {
  constructor(
    @inject('ToDosRepository')
    private toDosRespository: IToDosRepository,
  ) {}
  async execute(id: string): Promise<string> {
    await this.toDosRespository.delete(id);

    return 'success';
  }
}
