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

class CreateFilmService {
  execute(props: FilmProps) {
    console.log(props.title, props.description);
  }
}

export default new CreateFilmService();
