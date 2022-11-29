import { Router } from "express";
import multer from "multer";

import { CreateFilmController } from "../../../../modules/films/useCases/createFilm/CreateFilmController";
import { DeleteFilmController } from "../../../../modules/films/useCases/deleteFilmUseCase/DeleteFilmController";
import { ListFilmsController } from "../../../../modules/films/useCases/listFilm/ListFilmController";
import { UpdateFilmsController as UpdateFilmsOnDatabaseController } from "../../../../modules/films/useCases/updateDatabase/UpdateDatabaseController";
import { UpdateFilmController } from "../../../../modules/films/useCases/updateFilmUseCase/UpdateFilmController";
import uploadConfig from "../../../../utils/multer";

const filmsRoutes = Router();

const upload = multer(uploadConfig);

const createFilmController = new CreateFilmController();
const updateFilmsController = new UpdateFilmsOnDatabaseController();
const listFilmsController = new ListFilmsController();
const updateFilmController = new UpdateFilmController();
const deleteFilmController = new DeleteFilmController();

filmsRoutes.get("/", listFilmsController.handle);
filmsRoutes.delete("/", deleteFilmController.handle);
filmsRoutes.put("/", upload.single("file"), updateFilmController.handle);
filmsRoutes.post("/create", upload.single("file"), createFilmController.handle);
filmsRoutes.post(
  "/teste",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "movie_banner", maxCount: 1 },
  ]),
  createFilmController.handle
);

filmsRoutes.get("/update", updateFilmsController.handle);

export { filmsRoutes };
