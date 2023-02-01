import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateTaskController } from '../modules/tasks/useCases/createTask/CreateTaskController';
import { DeleteTaskController } from '../modules/tasks/useCases/deleteTask/DeleteTaskController';
import { GetOneTaskController } from '../modules/tasks/useCases/getOneTask/GetOneTaskController';
import { ListTasksController } from '../modules/tasks/useCases/listTask/listTaskController';
import { ListTasksByUserController } from '../modules/tasks/useCases/listTasksByUser/listTasksByUserController';
import { UpdateTaskController } from '../modules/tasks/useCases/updateTask/UpdateTaskController';

const cardsRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const listTasksByUserController = new ListTasksByUserController();
const getOneTaskController = new GetOneTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

cardsRoutes.use(ensureAuthenticated);
cardsRoutes.get('/card/:id', getOneTaskController.handle);
cardsRoutes.get('/', listTasksController.handle);
cardsRoutes.get('/cards_user', listTasksByUserController.handle);
cardsRoutes.delete('/:id', deleteTaskController.handle);
cardsRoutes.put('/:id', updateTaskController.handle);
cardsRoutes.post('/', createTaskController.handle);

export { cardsRoutes };
