import { container } from 'tsyringe';
import { TaskRepository } from '../../modules/tasks/infra/typeorm/repositories/implementations/TasksRepository';
import { ITasksRepository } from '../../modules/tasks/infra/typeorm/repositories/ITasksRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUserRepository';
import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';

container.registerSingleton<ITasksRepository>(
  'TasksRepository',
  TaskRepository,
);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
