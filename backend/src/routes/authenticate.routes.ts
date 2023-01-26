import { Router } from 'express';
import { AuthenticateUserController } from '../modules/accounts/useCases/AuthenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const autthenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', autthenticateUserController.handle);

export { authenticateRoutes };
