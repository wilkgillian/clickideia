import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUserRepository';
import { User } from '../../entities/User';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}
  async execute(data: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.create({
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      tasks: data.tasks,
    });

    return user;
  }
}
export { CreateUserUseCase };
