import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteFilmUseCase } from "./DeleteFilmUseCase";

export class DeleteFilmController {
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { id } = req.body;
    const deleteFilmsUseCase = container.resolve(DeleteFilmUseCase);
    await deleteFilmsUseCase.execute(id);
    return res.status(201).send({ message: "Filme deletado com sucesso" });
  }
}
