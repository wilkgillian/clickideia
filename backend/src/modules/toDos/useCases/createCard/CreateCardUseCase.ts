import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { ICreateCardDTO } from '../../dtos/ICreateCardDTO';
import { Card } from '../../infra/typeorm/entities/Card';
import { Response } from 'express';

@injectable()
export class CreateCardUseCase {
  constructor(
    @inject('CardsRepository')
    private repository: ICardsRepository,
  ) {}

  async execute(
    { title, content, list }: ICreateCardDTO,
    res: Response,
  ): Promise<Card | Response> {
    const cardAlreadyExists = await this.repository.findByName(title);
    if (cardAlreadyExists) {
      return res.status(500).send({ message: 'Card já existe' });
    }

    const card = await this.repository.create({
      title,
      content,
      list,
    });
    return card;
  }
}
