import { Router } from 'express';
import { cardsRoutes } from './cards.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use('/cards', cardsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
