import { Router } from 'express';
import multer from 'multer';

import { api } from '../modules/films/services/api';
import { createFilmController } from '../modules/films/useCases/createFilm';
import { listFilmController } from '../modules/films/useCases/listFilm';
import uploadConfig from '../utils/multer';

const filmsRoutes = Router();

const upload = multer(uploadConfig);

filmsRoutes.post('/create', upload.single('file'), (req, res) => {
  return createFilmController.handle(req, res);
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

