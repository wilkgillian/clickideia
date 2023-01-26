import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';

const usersRoutes = Router();

const createUsersController = new CreateUserController();

usersRoutes.use(ensureAuthenticated);
usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
