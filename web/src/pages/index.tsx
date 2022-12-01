import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import CarouselDestak from '../components/Carousel/CarouselDestak';
import CarouselCategories from '../components/Carousel/CarouselCategories';

export default function Home() {
  return (
    <Box w="100%" maxW="1920px" h="100vh">
      <Head>
        <title>FILIMO</title>
      </Head>
      <Header />
      <Box paddingTop={20}>
        <CarouselDestak />
      </Box>
      <CarouselCategories categories="Adicionados recentemente" />
      <CarouselCategories categories="Mais assistidos" />
      <CarouselCategories categories="Recomendações para você" />
    </Box>
  );
}
