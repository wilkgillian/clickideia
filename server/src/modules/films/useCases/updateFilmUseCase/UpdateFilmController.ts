import { container } from "tsyringe";
import { Request, Response } from "express";
import { uploadImageOnS3 } from "../../../../utils/uploadImage";
import { UpdateFilmUseCase } from "./UpdateFilmUseCase";

export class UpdateFilmController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title,
      description,
      director,
      producer,
      release_date,
      movie_banner,
      rt_score,
      running_time,
      genre,
      id,
    } = req.body;

    const updateFilmUseCase = container.resolve(UpdateFilmUseCase);

    const image_url = await uploadImageOnS3(req);
    const film = await updateFilmUseCase.execute(id, {
      genre,
      title,
      image: image_url,
      description,
      director,
      producer,
      release_date,
      movie_banner,
      rt_score,
      running_time,
    });

    return res.status(201).json(film);
  }
}
