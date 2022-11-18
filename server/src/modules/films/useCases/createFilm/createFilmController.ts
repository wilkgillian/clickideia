import { Request, Response } from "express";
import { CreateFilmUseCase } from "./CreateFilmUseCase";

class CreateFilmController {
  constructor(private createFilmUseCase: CreateFilmUseCase) {}
  handle(req: Request, res: Response): Response {
    const { title, description } = req.body;

    this.createFilmUseCase.execute({ title, description });

    return res.status(201).send();
  }
}

export { CreateFilmController };
