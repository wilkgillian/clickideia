import { Router } from 'express';

import { Request, Response } from 'express';
import { Film } from '../model/film';
import { FilmRepository } from '../repositories/FilmsRepository';
import { api } from '../services/api';
import { CreateFilmService } from '../services/CreateFilmService';

const filmsRoutes = Router();
const filmRepository = new FilmRepository();

filmsRoutes.post('/create', (req, res) => {
  const { title, description } = req.body;

  const createFilmService = new CreateFilmService(filmRepository);

  createFilmService.execute({ title, description });
  return res.status(201).send();
});

filmsRoutes.get('/', (req, res) => {
  const all = filmRepository.list();
  return res.json(all);
});

export { filmsRoutes };

// export async function getAllFilms(req: Request, res: Response) {
//   try {
//     const { data } = await api.get('/films');
//     return res.send(data);
//   } catch {
//     return res.send({ message: 'Falha ao obter dados' });
//   }
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
