import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateFilmUseCase } from "./CreateFilmUseCase";
import { uploadImageOnS3 } from "../../../../utils/uploadImage";

export class CreateFilmController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title,
      description,
      director,
      image,
      movie_banner,
      producer,
      release_date,
      rt_score,
      running_time,
      genre,
    } = req.body;

    const createFilmUseCase = container.resolve(CreateFilmUseCase);

    const movie_url = await uploadImageOnS3(req);
    const film = await createFilmUseCase.execute({
      title,
      description,
      image,
      movie_banner,
      movie_url: movie_url,
      director,
      producer,
      release_date,
      rt_score,
      running_time,
      genre,
    });

    return res.status(201).json(film);
  }
}
