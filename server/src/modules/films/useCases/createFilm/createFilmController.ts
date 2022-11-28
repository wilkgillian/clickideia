import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateFilmUseCase } from "./CreateFilmUseCase";
import { uploadImage } from "../../../../utils/uploadImage";

export class CreateFilmController {
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
    } = req.body;

    const createFilmUseCase = container.resolve(CreateFilmUseCase);

    const image_url = await uploadImage(req);
    const film = await createFilmUseCase.execute({
      title,
      description,
      image: image_url,
      movie_banner,
      director,
      producer,
      release_date,
      rt_score,
      running_time,
    });

    return res.status(201).json(film);
  }
}
