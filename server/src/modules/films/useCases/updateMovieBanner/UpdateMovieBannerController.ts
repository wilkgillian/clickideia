import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { uploadImageOnS3 } from '../../../../utils/uploadImage';
import { UpdateMovieBannerUseCase } from './UpdateMovieBannerUseCase';

export class UpdateMovieBannerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const updateMovieBannerUseCase = container.resolve(
      UpdateMovieBannerUseCase
    );

    const image_url = await uploadImageOnS3(req);
    // console.log(image_url);
    const film = await updateMovieBannerUseCase.execute({
      id: id,
      movie_banner: image_url
    });

    return res.status(201).json(film);
  }
}
