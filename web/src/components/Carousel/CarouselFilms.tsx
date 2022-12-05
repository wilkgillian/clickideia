import { Box, Text } from '@chakra-ui/react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { useFilms } from '../../hooks/useFilms';
import { Navigation, Pagination } from 'swiper';
import { Card } from '../Cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface CarouselFilmsProps {
  categorie: string;
}

export function CarouselFilms({ categorie }: CarouselFilmsProps) {
  const { dados } = useFilms();
  return (
    <Box width="100%">
      <Text ml={10} fontSize={24} fontWeight="bold" textTransform="uppercase">
        {categorie}
      </Text>
      <SwiperComponent
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1.2
          },
          400: {
            slidesPerView: 1.5
          },
          520: {
            slidesPerView: 2
          },
          600: {
            slidesPerView: 2.5
          },
          660: {
            slidesPerView: 3.1
          },
          820: {
            slidesPerView: 3.5
          },
          900: {
            slidesPerView: 4.1
          },
          1000: {
            slidesPerView: 4.5
          },
          1200: {
            slidesPerView: 5.5
          },
          1500: {
            slidesPerView: 8.5
          }
        }}
      >
        {dados.map(film => (
          <SwiperSlide key={film.id}>
            <Card image={film.image} id={film.id} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Box>
  );
}
