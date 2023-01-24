import { Repository } from 'typeorm';
import myDataSource from '../../../../../shared/infra/typeorm';
import { ICreateCardDTO } from '../../../dtos/ICreateCardDTO';
import { v4 as uuidV4 } from 'uuid';
import { ICardsRepository } from '../../../repositories/ICardsRepository';
import { Card } from '../entities/Card';
import { IUpdateCardDTO } from '../../../dtos/IUpdateCardDTO';

export class CardRepository implements ICardsRepository {
  private cards: Repository<Card>;

  constructor() {
    this.cards = myDataSource.getRepository(Card);
  }

  async create({ title, content, list }: ICreateCardDTO): Promise<Card> {
    const card = this.cards.create({
      id: uuidV4(),
      title: title,
      content: content,
      list: list,
      created_at: new Date(),
    });

    await this.cards.save(card);

    return card;
  }

  async list(): Promise<Card[]> {
    try {
      const cards = await this.cards.find({
        order: {
          created_at: 'DESC',
        },
      });
      return cards;
    } catch {
      throw new Error('Falha ao obter dados');
    }
  }
  async findByName(title: string): Promise<Card> {
    const card = await this.cards.findOne({
      where: {
        title: title,
      },
    });
    return card;
  }
  async delete(id: string): Promise<string> {
    try {
      await this.cards
        .createQueryBuilder('cards')
        .delete()
        .from(Card)
        .where({ id: id })
        .execute();
      return 'Card deletado com sucesso';
    } catch {
      throw new Error('Erro ao deletar card');
    }
  }
  async update(data: IUpdateCardDTO, id: string): Promise<Card> {
    // try {
    //   const existentData = await this.cards.findOne({
    //     where: {
    //       id: id,
    //     },
    //   });
    await this.cards
      .createQueryBuilder()
      .update(Card)
      .set({
        title: data.title,
        content: data.content,
        list: data.list,
      })
      .where({
        id: id,
      })
      .execute();

    const card = await this.cards.findOne({
      where: {
        id: id,
      },
    });
    return card;
    // } catch {
    //   throw new Error("Erro ao editar toDo");
    // }
  }
  // async updateMovieBanner({
  //   id,
  //   movie_banner,
  // }: IUpdateMovieBanner): Promise<void> {
  //   await this.cards
  //     .createQueryBuilder()
  //     .update(Film)
  //     .set({
  //       movie_banner: movie_banner,
  //     })
  //     .where({
  //       id: id,
  //     })
  //     .execute();
  // }
  // async updateFilmImage({ id, image }: IUpdateMovieImage): Promise<void> {
  //   await this.toDos
  //     .createQueryBuilder()
  //     .update(Film)
  //     .set({
  //       image: image,
  //     })
  //     .where({
  //       id: id,
  //     })
  //     .execute();
  // }
  async getOneCard(id: string) {
    const card = await this.cards.findOne({
      where: {
        id: id,
      },
    });
    return card;
  }
}
