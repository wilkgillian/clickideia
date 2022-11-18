import { SpecificationRepository } from "../repositories/implementations/SpecificationRepository";

interface IRequest {
  title: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ title, description }: IRequest): void {
    const specificationAlreadyExistis =
      this.specificationRepository.findByTitle(title);
    if (specificationAlreadyExistis) {
      throw new Error("Speficação já existe");
    }
    const created_at = new Date();
    this.specificationRepository.create({ title, description, created_at });
  }
}

export { CreateSpecificationService };
