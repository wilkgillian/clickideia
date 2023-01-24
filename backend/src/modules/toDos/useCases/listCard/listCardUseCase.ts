import { ICardsRepository } from '../../repositories/ICardsRepository';
import { Card } from '../../infra/typeorm/entities/Card';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRespository: ICardsRepository,
  ) {}
  async execute(): Promise<Card[]> {
    const cards = await this.cardsRespository.list();

    return cards;
  }
}
