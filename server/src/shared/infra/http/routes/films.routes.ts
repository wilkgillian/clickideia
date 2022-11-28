import { Router } from "express";
import multer from "multer";

import { api } from "../../../../modules/films/services/api";
import { CreateFilmController } from "../../../../modules/films/useCases/createFilm/createFilmController";
import { listFilmController } from "../../../../modules/films/useCases/listFilm";
import { UpdateFilmsController } from "../../../../modules/films/useCases/updateDatabase/UpdateDatabaseController";
import uploadConfig from "../../../../utils/multer";
import { uploadImage } from "../../../../utils/uploadImage";

const filmsRoutes = Router();

const upload = multer(uploadConfig);

const createFilmController = new CreateFilmController();
const updateFilmsController = new UpdateFilmsController();

filmsRoutes.post("/create", upload.single("file"), createFilmController.handle);

filmsRoutes.get("/update", updateFilmsController.handle);

export { filmsRoutes };
