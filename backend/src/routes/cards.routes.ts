import { Router } from 'express';
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController';
import { DeleteTaskController } from '../modules/tasks/useCases/deleteTask/DeleteTaskController';
import { GetOneTaskController } from '../modules/tasks/useCases/getOneTask/GetOneTaskController';
import { ListTasksController } from '../modules/tasks/useCases/listTask/listTaskController';
import { UpdateTaskController } from '../modules/tasks/useCases/updateTask/UpdateTaskController';

const cardsRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const getOneTaskController = new GetOneTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

cardsRoutes.get('/card', getOneTaskController.handle);
cardsRoutes.get('/', listTasksController.handle);
cardsRoutes.delete('/', deleteTaskController.handle);
cardsRoutes.put('/', updateTaskController.handle);
cardsRoutes.post('/', createTaskController.handle);

export { cardsRoutes };
