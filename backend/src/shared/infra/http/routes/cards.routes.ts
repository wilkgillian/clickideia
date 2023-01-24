import { Router } from 'express';
import { CreateCardController } from '../../../../modules/toDos/useCases/createCard/CreateCardController';
import { ListCardsController } from '../../../../modules/toDos/useCases/listCard/listCardController';
import { GetOneCardController } from '../../../../modules/toDos/useCases/getOneCard/GetOneCardController';
import { UpdateCardController } from '../../../../modules/toDos/useCases/updateCardUseCase/UpdateCardController';
import { DeleteCardController } from '../../../../modules/toDos/useCases/deleteCardUseCase/DeleteCardController';

const cardsRoutes = Router();

const createCardController = new CreateCardController();
const listCardsController = new ListCardsController();
const getOneCardController = new GetOneCardController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();

cardsRoutes.get('/card', getOneCardController.handle);
cardsRoutes.get('/', listCardsController.handle);
cardsRoutes.delete('/', deleteCardController.handle);
cardsRoutes.put('/', updateCardController.handle);
cardsRoutes.post('/', createCardController.handle);

export { cardsRoutes };
