import { container } from 'tsyringe';
import { ToDoRepository } from '../../modules/toDos/infra/typeorm/repositories/ToDosRepository';
import { IToDosRepository } from '../../modules/toDos/repositories/IToDosRepository';

container.registerSingleton<IToDosRepository>(
  'ToDosRepository',
  ToDoRepository,
);
