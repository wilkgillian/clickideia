import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Destak from '../Hero';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Wrapper from '../Wrapper';
import { useFilms } from '../hooks/useFilms';

export default function CarouselCategories() {
  const { dados } = useFilms();
  return (
    <Carousel autoPlay={true} axis="horizontal" infiniteLoop={true}>
      {dados.map(films => (
        <Wrapper key={films.id} categories="Os mais populares" dados={dados} />
      ))}
    </Carousel>
  );
}
