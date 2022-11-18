import { Router } from "express";
import { SpecificationRepository } from "../modules/films/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/films/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/create", (req, res) => {
  const { title, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ title, description });

  return res.status(201).send();
});
specificationRoutes.get("/", (req, res) => {
  const all = specificationRepository.list();

  return res.json(all);
});

export { specificationRoutes };
