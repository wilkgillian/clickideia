import { inject, injectable } from 'tsyringe';
import { Film } from '../../infra/typeorm/entities/Film';
import { IFilmsRepository } from '../../repositories/IFilmsRepository';

interface IRequest {
  title: string;
  description: string;
}
@injectable()
export class CreateFilmUseCase {
  constructor(
    @inject('FilmsRepository')
    private repository: IFilmsRepository
  ) {}

  async execute({ title, description }: IRequest): Promise<Film> {
    const filmAlreadyExists = await this.repository.findByName(title);
    if (filmAlreadyExists) {
      throw new Error('Filme já existe');
    }
    console.log('chegou aqui');

    const film = await this.repository.create({
      title: title,
      description: description
    });
    console.log(film);

    console.log('\nAwait passou aqui 2');
    return film;
  }
}
