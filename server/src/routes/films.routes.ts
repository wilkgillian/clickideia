import { Router } from "express";
import multer from "multer";

import { api } from "../modules/films/services/api";
import { CreateFilmController } from "../modules/films/useCases/createFilm/createFilmController";
import { listFilmController } from "../modules/films/useCases/listFilm";
import uploadConfig from "../utils/multer";
import { uploadImage } from "../utils/uploadImage";

const filmsRoutes = Router();

const upload = multer(uploadConfig);

const createFilmController = new CreateFilmController();

filmsRoutes.patch("/create", upload.single("file"), createFilmController.handle);

filmsRoutes.post("/upload", upload.single("file"), async (req, res) => {
  uploadImage(req);

  return res.status(201).send({ message: "Success" });
});

filmsRoutes.get("/", (req, res) => {
  return listFilmController.handle(req, res);
});

filmsRoutes.get("/searchfilms", async (req, res) => {
  try {
    const { data } = await api.get("/films");
    return res.send(data);
  } catch {
    return res.send({ message: "Falha ao obter dados" });
  }
});

export { filmsRoutes };
