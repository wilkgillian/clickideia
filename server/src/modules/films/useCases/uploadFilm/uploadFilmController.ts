import { Request, Response } from "express";
import { UploadFilmUseCase } from "./uploadFilmUseCase";

class UploadFilmController {
  constructor(private uploadFilmUseCase: UploadFilmUseCase) {}
  handle(req: Request, res: Response): Response {
    const { file } = req;

    this.uploadFilmUseCase.execute(file);

    return res.send();
  }
}

export { UploadFilmController };
