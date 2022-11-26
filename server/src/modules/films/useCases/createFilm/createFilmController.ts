import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { CreateFilmUseCase } from './CreateFilmUseCase';

export class CreateFilmController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;

    const createFilmUseCase = container.resolve(CreateFilmUseCase);

    console.log('\n\nesse await 1\n\n');
    // const url_file = await uploadImage(req);

    const film = await createFilmUseCase.execute({
      title,
      description
    });
    console.log('await 3');

    return res.status(201).json(film);
  }
}
