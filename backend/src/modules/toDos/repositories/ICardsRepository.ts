import { ICreateCardDTO } from '../dtos/ICreateCardDTO';
import { IUpdateCardDTO } from '../dtos/IUpdateCardDTO';
import { Card } from '../infra/typeorm/entities/Card';

export interface ICardsRepository {
  create(data: ICreateCardDTO): Promise<Card>;
  findByName(title: string): Promise<Card>;
  // updateDatabase(): Promise<Card[]>;
  list(): Promise<Card[]>;
  delete(id: string): Promise<string>;
  getOneCard(id: string): Promise<Card>;
  update(data: IUpdateCardDTO, id: string): Promise<Card>;
  // updateMovieBanner({ id, movie_banner }: IUpdateMovieBanner): Promise<void>;
  // updateCardImage({ id, image }: IUpdateMovieImage): Promise<void>;
}
