import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

export default function Home() {
  return (
    <Box w="100%" maxW="1920px" h="100vh">
      <Head>
        <title>FILIMO</title>
      </Head>
      <Header />
      <Hero
        title="John Wick:"
        subtitle="Chapter 3 - Parabellum"
        genre="Ação | Suspense - 2h 12min"
      />
      <Wrapper categories="Os mais populares" />
      <Wrapper categories="Coleções em destaque" />
    </Box>
  );
}
