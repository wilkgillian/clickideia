import { Router } from 'express';
import multer from 'multer';

import { FilmRepository } from '../modules/films/repositories/implementations/FilmsRepository';
import { api } from '../modules/films/services/api';
import { createFilmController } from '../modules/films/useCases/createFilm';
import { listFilmController } from '../modules/films/useCases/listFilm';
import { uploadFilmController } from '../modules/films/useCases/uploadFilm';
import uploadConfig from '../utils/multer';

const filmsRoutes = Router();

const upload = multer(uploadConfig);

filmsRoutes.post('/create', upload.single('file'), (req, res) => {
  // try{
  //   uploadFilmController.handle(req, res);

  // }catch(err){
  //   return new Error(err)
  // }
  return createFilmController.handle(req, res);
});
filmsRoutes.post('/upload', upload.single('file'), (req, res) => {
  uploadFilmController.handle(req, res);
});

filmsRoutes.get('/', (req, res) => {
  return listFilmController.handle(req, res);
});

filmsRoutes.get('/searchfilms', async (req, res) => {
  try {
    const { data } = await api.get('/films');
    return res.send(data);
  } catch {
    return res.send({ message: 'Falha ao obter dados' });
  }
});

export { filmsRoutes };

// export async function getAllFilms(req: Request, res: Response) {
// }
// export function getFilm(req: Request, res: Response) {
//   if (req.body.id === '1') {
//     return res.send({ message: 'encontrado' });
//   }
// }
// export function createFilm(req: Request, res: Response) {
//   const data = req.body;
//   const infos = {
//     title: 'filme bom',
//     description: 'Filme bom demais'
//   };
//   CreateFilmService.execute(infos);

//   return res.send({ data });
// }
// export function updateFilm(req: Request, res: Response) {
//   const infos = {
//     title: 'filme bom',
//     description: 'Filme bom demais'
//   };
//   CreateFilmService.execute(infos);

//   return res.send();
// }
// export function deleteFilm(req: Request, res: Response) {
//   const infos = {
//     title: 'filme bom',
//     description: 'Filme bom demais'
//   };
//   CreateFilmService.execute(infos);

//   return res.send();
// }
