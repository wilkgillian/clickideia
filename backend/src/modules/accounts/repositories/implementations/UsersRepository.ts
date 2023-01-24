import { Repository } from 'typeorm';
import myDataSource from '../../../../shared/infra/typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = myDataSource.getRepository(User);
  }
  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name: data.name,
      username: data.username,
      password: data.password,
      isAdmin: data.isAdmin,
      email: data.email,
      created_at: data.created_at,
    });

    await this.repository.save(user);

    return user;
  }
}

export { UsersRepository };
