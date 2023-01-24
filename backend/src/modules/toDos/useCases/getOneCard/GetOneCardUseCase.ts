import { Card } from '../../infra/typeorm/entities/Card';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class GetOneCardUseCase {
  constructor(
    @inject('CardsRepository')
    private CardosRespository: ICardsRepository,
  ) {}
  async execute(id: string): Promise<Card> {
    const card = await this.CardosRespository.getOneCard(id);

    return card;
  }
}
