import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListFilmUseCase } from "./ListFilmUseCase";

export class ListFilmsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listFilmsUseCase = container.resolve(ListFilmUseCase);
    const all = await listFilmsUseCase.execute();
    return res.status(201).json(all);
  }
}
