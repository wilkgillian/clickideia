import { container } from "tsyringe";
import { Request, Response } from "express";
import { uploadImage } from "../../../../utils/uploadImage";
import { CreateFilmUseCase } from "./CreateFilmUseCase";
import Multer from "multer";
import uploadConfig from "../../../../utils/multer";

// const multer = Multer(uploadConfig);

// const upload = multer.single("file");
class CreateFilmController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const createFilmUseCase = container.resolve(CreateFilmUseCase);
    const { title, description } = req.body;
    const url_file = await uploadImage(req);
    await createFilmUseCase.execute({ title, description, url_file });

    return res.status(201).send();
  }
}

export { CreateFilmController };
