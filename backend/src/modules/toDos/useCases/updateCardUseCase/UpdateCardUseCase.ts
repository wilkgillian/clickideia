import { inject, injectable } from 'tsyringe';
import { IUpdateCardDTO } from '../../dtos/IUpdateCardDTO';
import { Card } from '../../infra/typeorm/entities/Card';
import { ICardsRepository } from '../../repositories/ICardsRepository';

@injectable()
export class UpdateCardUseCase {
  constructor(
    @inject('CardsRepository')
    private repository: ICardsRepository,
  ) {}

  async execute(id: string, data: IUpdateCardDTO): Promise<Card> {
    const card = await this.repository.update(data, id);

    return card;
  }
}
