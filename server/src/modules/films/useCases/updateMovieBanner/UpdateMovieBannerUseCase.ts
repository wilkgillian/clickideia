import { inject, injectable } from 'tsyringe';
import { IUpdateMovieBanner } from '../../dtos/IUpdateFilmDTO';
import { IFilmsRepository } from '../../repositories/IFilmsRepository';

@injectable()
export class UpdateMovieBannerUseCase {
  constructor(
    @inject('FilmsRepository')
    private repository: IFilmsRepository
  ) {}

  async execute({ id, movie_banner }: IUpdateMovieBanner): Promise<void> {
    await this.repository.updateMovieBanner({
      id: id,
      movie_banner: movie_banner
    });
  }
}
