import { Repository } from 'typeorm';
import myDataSource from '../../../../shared/infra/typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { v4 as uuidV4 } from 'uuid';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUserRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = myDataSource.getRepository(User);
  }
  async create(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      id: uuidV4(),
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
