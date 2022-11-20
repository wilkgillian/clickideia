import S3Storage from '../../../../utils/S3Storage';
import { FilmRepository } from '../../repositories/implementations/FilmsRepository';

interface IRequest {
  title: string;
  description: string;
  // image_url: string;
}

class CreateFilmUseCase {
  constructor(private filmRepository: FilmRepository) {}

  async execute({ title, description }: IRequest): Promise<void> {
    // const s3Storage = new S3Storage();
    // const url_file = await s3Storage.saveFile(title);

    const filmAlreadyExists = this.filmRepository.findByName(title);
    if (filmAlreadyExists) {
      throw new Error('Filme já existe');
    }
    const created_at = new Date();
    this.filmRepository.create({ title, description, created_at });
  }
}

export { CreateFilmUseCase };
