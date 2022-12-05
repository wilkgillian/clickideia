import { Film } from "./../../infra/typeorm/entities/Film";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetOneFilmUseCase } from "./GetOneFilmUseCase";

export class GetOneFilmController {
  async handle(req: Request, res: Response): Promise<Response<Film>> {
    const { id } = req.body;
    const getOneFilmsUseCase = container.resolve(GetOneFilmUseCase);
    const film = await getOneFilmsUseCase.execute(id);
    return res.status(201).json(film);
  }
}
