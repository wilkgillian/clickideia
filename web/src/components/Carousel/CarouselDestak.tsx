import { Carousel } from 'react-responsive-carousel';
import Destak from '../Hero';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useFilms } from '../../hooks/useFilms';

export default function CarouselDestak() {
  const { dados } = useFilms();
  return (
    <Carousel
      autoPlay={true}
      axis="horizontal"
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      showArrows={false}
    >
      {dados.slice(0, 10).map(films => (
        <Destak
          key={films.id}
          title={films.title}
          genre="Ação"
          movie_banner={films.movie_banner}
        />
      ))}
    </Carousel>
  );
}
