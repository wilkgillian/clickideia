import { Request, Response } from "express";
import { container } from "tsyringe";
import { deleteImageFromS3 } from "../../../../utils/deleteImage";
import { DeleteFilmUseCase } from "./DeleteFilmUseCase";

export class DeleteFilmController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.body;
    const deleteFilmsUseCase = container.resolve(DeleteFilmUseCase);
    await deleteFilmsUseCase.execute(id);
    // await deleteImageFromS3()
    return res.status(201).send({ message: "Filme deletado com sucesso" });
  }
}
