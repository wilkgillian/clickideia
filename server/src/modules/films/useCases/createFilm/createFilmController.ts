import { Request, Response } from 'express';
import { uploadImage } from '../../../../utils/uploadImage';
import { CreateFilmUseCase } from './CreateFilmUseCase';

class CreateFilmController {
  constructor(private createFilmUseCase: CreateFilmUseCase) {}
  async handle(req: Request, res: Response): Promise<Response<string>> {
    const { title, description } = req.body;
    const url_file = await uploadImage(req);
    this.createFilmUseCase.execute({ title, description, url_file });

    return res.status(201).send();
  }
}

export { CreateFilmController };
