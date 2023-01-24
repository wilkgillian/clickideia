import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}
  async execute(data: ICreateUserDTO): Promise<void> {
    await this.userRepository.create({
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
    });
  }
}
export { CreateUserUseCase };
