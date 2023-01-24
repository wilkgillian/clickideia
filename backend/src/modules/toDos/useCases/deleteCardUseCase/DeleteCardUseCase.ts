import { ICardsRepository } from '../../repositories/ICardsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRespository: ICardsRepository,
  ) {}
  async execute(id: string): Promise<string> {
    await this.cardsRespository.delete(id);

    return 'success';
  }
}
