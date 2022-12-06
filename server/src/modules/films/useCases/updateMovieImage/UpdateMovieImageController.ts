import { container } from "tsyringe";
import { Request, Response } from "express";
import { uploadImageOnS3 } from "../../../../utils/uploadImage";
import { UpdateMovieImageUseCase } from "./UpdateMovieImageUseCase";

export class UpdateMovieImageController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const updateMovieImageUseCase = container.resolve(UpdateMovieImageUseCase);

    const image_url = await uploadImageOnS3(req);

    const film = await updateMovieImageUseCase.execute({
      id: id,
      image: image_url,
    });

    return res.status(201).json(film);
  }
}
