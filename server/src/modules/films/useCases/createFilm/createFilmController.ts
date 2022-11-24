import "reflect-metadata"
import { container } from "tsyringe";
import { Request, Response } from "express";
import { uploadImage } from "../../../../utils/uploadImage";
import { CreateFilmUseCase } from "./CreateFilmUseCase";

class CreateFilmController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { title, description } = req.body;
    const createFilmUseCase = container.resolve(CreateFilmUseCase);
    console.log("\n\nawait 1\n\n")
    const url_file = await uploadImage(req);
    console.log("\n\nawait 2\n\n")
    const film = await createFilmUseCase.execute({
      title,
      description,
      url_file,
    });
    console.log("await 3")

    return res.status(201).json(film);
  }
}

export { CreateFilmController };
