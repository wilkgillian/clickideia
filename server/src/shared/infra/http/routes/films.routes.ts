import { Router } from 'express';
import multer from 'multer';
import { CreateFilmController } from '../../../../modules/films/useCases/createFilm/createFilmController';

import { DeleteFilmController } from '../../../../modules/films/useCases/deleteFilmUseCase/DeleteFilmController';
import { ListFilmsController } from '../../../../modules/films/useCases/listFilm/listFilmController';
import { UpdateFilmsController as UpdateFilmsOnDatabaseController } from '../../../../modules/films/useCases/updateDatabase/UpdateDatabaseController';
import { UpdateFilmController } from '../../../../modules/films/useCases/updateFilmUseCase/UpdateFilmController';
import { UpdateMovieBannerController } from '../../../../modules/films/useCases/updateMovieBanner/UpdateMovieBannerController';
import uploadConfig from '../../../../utils/multer';

const filmsRoutes = Router();

const upload = multer(uploadConfig);

const createFilmController = new CreateFilmController();
const updateFilmsController = new UpdateFilmsOnDatabaseController();
const listFilmsController = new ListFilmsController();
const updateFilmController = new UpdateFilmController();
const updateMovieBannerController = new UpdateMovieBannerController();
const deleteFilmController = new DeleteFilmController();

filmsRoutes.get('/', listFilmsController.handle);
filmsRoutes.delete('/', deleteFilmController.handle);
filmsRoutes.put('/', upload.single('file'), updateFilmController.handle);
filmsRoutes.post('/create', upload.single('file'), createFilmController.handle);
filmsRoutes.patch(
  '/create',
  upload.single('file'),
  updateMovieBannerController.handle
);
// filmsRoutes.post(
//   '/teste',
//   upload.fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'movie_banner', maxCount: 1 }
//   ]),
//   (req, res) => {
//     console.log(req.files);
//   }
//   // createFilmController.handle
// );

filmsRoutes.get('/update', updateFilmsController.handle);

export { filmsRoutes };
