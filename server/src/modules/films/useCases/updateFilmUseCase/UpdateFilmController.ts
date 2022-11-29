import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { uploadImageOnS3 } from '../../../../utils/uploadImage';
import { UpdateFilmUseCase } from './UpdateFilmUseCase';

export class UpdateFilmController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title,
      description,
      director,
      producer,
      release_date,
      rt_score,
      running_time,
      genre,
      id
    } = req.body;

    const updateFilmUseCase = container.resolve(UpdateFilmUseCase);
    if (req.file && req.file != null) {
      const image_url = await uploadImageOnS3(req);
      await updateFilmUseCase.execute(id, {
        image: image_url
      });
    }
    const film = await updateFilmUseCase.execute(id, {
      genre,
      title,
      description,
      director,
      producer,
      release_date,
      rt_score,
      running_time
    });

    return res.status(201).json(film);
  }
}
