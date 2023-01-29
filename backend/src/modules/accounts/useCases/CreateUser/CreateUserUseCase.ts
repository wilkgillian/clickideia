import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUserRepository';
import { User } from '../../entities/User';
import { hash } from 'bcryptjs';
import { AppError } from '../../../../errors/AppErrors';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) {}
  async execute(data: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByUsername(
      data.username,
    );
    if (userAlreadyExists) {
      throw new AppError('User Already exists');
    }
    const passwordHash = await hash(data.password, 8);
    const user = await this.userRepository.create({
      name: data.name,
      username: data.username,
      password: passwordHash,
      email: data.email,
      isAdmin: data.isAdmin,
    });

    return user;
  }
}
export { CreateUserUseCase };
