import { container } from 'tsyringe';
import { CardRepository } from '../../modules/toDos/infra/typeorm/repositories/CardsRepository';
import { ICardsRepository } from '../../modules/toDos/repositories/ICardsRepository';

container.registerSingleton<ICardsRepository>(
  'CardsRepository',
  CardRepository,
);
