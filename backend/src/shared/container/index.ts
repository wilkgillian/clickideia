import { container } from 'tsyringe';
import { TaskRepository } from '../../modules/tasks/infra/typeorm/repositories/implementations/TasksRepository';
import { ITasksRepository } from '../../modules/tasks/infra/typeorm/repositories/ITasksRepository';

container.registerSingleton<ITasksRepository>(
  'TasksRepository',
  TaskRepository,
);
