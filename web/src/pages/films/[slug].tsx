import { Box, VStack, Text, Image } from '@chakra-ui/react';
import Head from 'next/head';
import { useFilms } from '../../hooks/useFilms';

interface FilmProps {
  title: string;
  description: string;
  image: string;
  movie_banner: string;
  direction: string;
  producer: string;
  running_time: string;
  rt_score: string;
  duration: string;
}

export function Film() {
  // {title, image, movie_banner, description, direction, producer, running_time, rt_score, duration}: FilmProps
  const { dados } = useFilms();

  return (
    <>
      {dados.map(dados => {
        //   <Head>
        //   {dados.title} | Filimo
        // </Head>
        <Box
          width="100%"
          h="60%"
          backgroundImage={`url(${dados.movie_banner})`}
          backgroundPosition="top center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <VStack>
            <Image src={`url(${dados.image})`} alt={dados.title} />
            <Text>{dados.title}</Text>
          </VStack>
        </Box>;
      })}
    </>
  );
}
