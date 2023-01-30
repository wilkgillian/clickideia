import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUserRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppErrors';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
  };
  token: string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRespository: IUsersRepository,
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRespository.findByUsername(username);

    if (!user) {
      throw new AppError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }
    const token = sign({}, '6624b4d3fefc7c3cee76d3549bf858ad', {
      subject: user.id,
      expiresIn: '1d',
    });
    const tokenReturn: IResponse = {
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        createdAt: user.created_at,
        isAdmin: user.isAdmin,
      },
    };
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
