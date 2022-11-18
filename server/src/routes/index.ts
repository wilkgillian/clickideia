import { Router } from "express";
import { filmsRoutes } from "./films.routes";

const router = Router();

router.use("/films", filmsRoutes);

export { router };
