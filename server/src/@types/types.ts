import { Film } from '../model/film';
import { ICreateFilmDTO } from '../repositories/FilmsRepository';

interface FilmProps {
  title: string;
  // original_title?: string;
  // original_title_romanised?: string;
  // image: string;
  // movie_banner: string;
  description: string;
  // director: string;
  // producer: string;
  // release_date: number;
  // running_time: number;
  // rt_score?: number;
  // people?: number;
  // species?: number;
  // locations?: number;
  // vehicles?: number;
  // url?: number;
}

export interface IFilmsRepository {
  findByName(title: string): Film;
  list(): Film[];
  create({ title, description }: ICreateFilmDTO): void;
}
