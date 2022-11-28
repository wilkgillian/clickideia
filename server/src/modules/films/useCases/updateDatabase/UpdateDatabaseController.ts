import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateFilmsUseCase } from "./UpdateDatabaseUseCase";


export class UpdateFilmsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateFilmsUseCase = container.resolve(UpdateFilmsUseCase);
    const films = await updateFilmsUseCase.execute();

    return res.status(201).json(films);
  }
}
