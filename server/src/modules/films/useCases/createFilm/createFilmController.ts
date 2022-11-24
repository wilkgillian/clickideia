import { container } from "tsyringe";
import { Request, Response } from "express";
import { uploadImage } from "../../../../utils/uploadImage";
import { CreateFilmUseCase } from "./CreateFilmUseCase";

class CreateFilmController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { title, description } = req.body;
    const createFilmUseCase = container.resolve(CreateFilmUseCase);
    const url_file = await uploadImage(req);
    const film = await createFilmUseCase.execute({
      title,
      description,
      url_file,
    });

    return res.status(201).json(film);
  }
}

export { CreateFilmController };
