import S3Storage from '../../../../utils/S3Storage';
import { Film } from '../../model/Film';

export interface ICreateFilmDTO {
  id?: string;
  title: string;
  created_at: Date;
  url_file: string;
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

class FilmRepository {
  private films: Film[];

  private static INSTANCE: FilmRepository;

  private constructor() {
    this.films = [];
  }

  public static getInstance(): FilmRepository {
    if (!FilmRepository.INSTANCE) {
      FilmRepository.INSTANCE = new FilmRepository();
    }
    return FilmRepository.INSTANCE;
  }

  async create({
    title,
    description,
    url_file
  }: ICreateFilmDTO): Promise<void> {
    const film = new Film();
    Object.assign(film, {
      title,
      description,
      created_at: new Date(),
      url_file: url_file
    });
    this.films.push(film);
  }
  list(): Film[] {
    return this.films;
  }
  findByName(film_title: string) {
    const title = this.films.find(title => title.title === film_title);
    return title;
  }
}

export { FilmRepository };
