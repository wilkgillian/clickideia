import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRespository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  list(): Specification[] {
    return this.specifications;
  }

  create({ title, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      title,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }
  findByTitle(title: string): Specification {
    const specification = this.specifications.find((specification) => {
      specification.title === title;
    });

    return specification;
  }
}
export { SpecificationRepository };
