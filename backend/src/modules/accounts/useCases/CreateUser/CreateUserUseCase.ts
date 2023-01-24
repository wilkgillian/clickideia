import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}
  async execute({
    name,
    username,
    password,
    isAdmin,
    email,
    created_at,
  }: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name,
      username,
      password,
      isAdmin,
      email,
      created_at,
    });
  }
}
export { CreateUserUseCase };
