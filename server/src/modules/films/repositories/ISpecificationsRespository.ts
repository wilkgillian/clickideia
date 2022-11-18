import { Specification } from "../model/Specification";

export interface ICreateSpecificationDTO {
  title: string;
  description: string;
  created_at: Date;
}

export interface ISpecificationsRepository {
  create({ title, description }: ICreateSpecificationDTO): void;
  findByTitle(title: string): Specification;
  list(): Specification[];
}
