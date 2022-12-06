import { inject, injectable } from "tsyringe";
import { IUpdateMovieImage } from "../../dtos/IUpdateFilmDTO";
import { IFilmsRepository } from "../../repositories/IFilmsRepository";

@injectable()
export class UpdateMovieImageUseCase {
  constructor(
    @inject("FilmsRepository")
    private repository: IFilmsRepository
  ) {}

  async execute({ id, image }: IUpdateMovieImage): Promise<void> {
    await this.repository.updateFilmImage({
      id: id,
      image: image,
    });
  }
}
