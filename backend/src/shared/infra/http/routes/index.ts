import { Router } from 'express';
import { cardsRoutes } from './cards.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/cards', cardsRoutes);
router.use('/users', usersRoutes);

export { router };
