import { Router } from 'express';
import { CreateToDoController } from '../../../../modules/toDos/useCases/createToDo/CreateToDoController';
import { ListToDosController } from '../../../../modules/toDos/useCases/listToDo/listToDoController';
import { GetOneToDoController } from '../../../../modules/toDos/useCases/getOneToDo/GetOneToDoController';
import { UpdateToDoController } from '../../../../modules/toDos/useCases/updateToDoUseCase/UpdateToDoController';
import { DeleteToDoController } from '../../../../modules/toDos/useCases/deleteToDoUseCase/DeleteToDoController';

const cardsRoutes = Router();

const createToDoController = new CreateToDoController();
const listToDosController = new ListToDosController();
const getOneToDoController = new GetOneToDoController();
const updateToDoController = new UpdateToDoController();
const deleteToDoController = new DeleteToDoController();

cardsRoutes.get('/toDo', getOneToDoController.handle);
cardsRoutes.get('/', listToDosController.handle);
cardsRoutes.delete('/', deleteToDoController.handle);
cardsRoutes.put('/', updateToDoController.handle);
cardsRoutes.post('/', createToDoController.handle);

export { cardsRoutes };
