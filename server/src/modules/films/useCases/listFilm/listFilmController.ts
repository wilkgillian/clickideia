import { Request, Response } from "express";
import { ListFilmUseCase } from "./listFilmUseCase";

class ListFilmController {
  constructor(private listFilmsUseCase: ListFilmUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listFilmsUseCase.execute();
    return res.json(all);
  }
}

export { ListFilmController };
