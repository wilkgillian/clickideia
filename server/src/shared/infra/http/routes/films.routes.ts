import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/multer";

import { DeleteFilmController } from "../../../../modules/films/useCases/deleteFilmUseCase/DeleteFilmController";
import { UpdateFilmsController as UpdateFilmsOnDatabaseController } from "../../../../modules/films/useCases/updateDatabase/UpdateDatabaseController";
import { UpdateFilmController } from "../../../../modules/films/useCases/updateFilmUseCase/UpdateFilmController";
import { UpdateMovieBannerController } from "../../../../modules/films/useCases/updateMovieBanner/UpdateMovieBannerController";
import { GetOneFilmController } from "../../../../modules/films/useCases/getOneFilm/GetOneFilmController";
import { UpdateMovieImageController } from "../../../../modules/films/useCases/updateMovieImage/UpdateMovieImageController";
import { CreateFilmController } from "../../../../modules/films/useCases/createFilm/CreateFilmController";
import { ListFilmsController } from "../../../../modules/films/useCases/listFilm/ListFilmController";

const filmsRoutes = Router();

const upload = multer(uploadConfig);

const createFilmController = new CreateFilmController();
const updateFilmsController = new UpdateFilmsOnDatabaseController();
const listFilmsController = new ListFilmsController();
const getOneFilmController = new GetOneFilmController();
const updateFilmController = new UpdateFilmController();
const updateMovieBannerController = new UpdateMovieBannerController();
const updateMovieImageController = new UpdateMovieImageController();
const deleteFilmController = new DeleteFilmController();

filmsRoutes.get("/", listFilmsController.handle);
filmsRoutes.get("/film", getOneFilmController.handle);
filmsRoutes.delete("/", deleteFilmController.handle);
filmsRoutes.put("/", upload.single("file"), updateFilmController.handle);
filmsRoutes.post("/create", upload.single("file"), createFilmController.handle);
filmsRoutes.patch(
  "/movie_banner",
  upload.single("movie_banner"),
  updateMovieBannerController.handle
);
filmsRoutes.patch(
  "/image",
  upload.single("image"),
  updateMovieImageController.handle
);

filmsRoutes.get("/update", updateFilmsController.handle);

export { filmsRoutes };
