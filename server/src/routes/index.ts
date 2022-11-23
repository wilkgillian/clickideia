import { Router } from "express";
import { filmsRoutes } from "./films.routes";
import { usersRoutes } from "./users.routes";


const router = Router();

router.use("/films", filmsRoutes);
router.use("/users", usersRoutes);

export { router };
