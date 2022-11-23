import { Repository } from "typeorm";
import myDataSource from "../../../../database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = myDataSource.getRepository(User);
  }
  async create({
    name,
    username,
    password,
    isAdmin,
    email,
    created_at,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      isAdmin,
      email,
      created_at,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
