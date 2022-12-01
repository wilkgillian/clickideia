import Head from "next/head";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import CarouselDestak from "../components/Carousel/CarouselDestak";
import CarouselCategories from "../components/Carousel/CarouselCategories";
import { useFilms } from "../components/hooks/useFilms";
import { CarouselWithSwiper } from "../components/Carousel/CarouselWithSwiper";

export default function Home() {
  const { loading } = useFilms();
  return (
    <Box w="100%" maxW="1920px" h="100vh" margin="auto">
      <Head>
        <title>FILIMO</title>
      </Head>
      <Header />
      {loading ? (
        <Flex
          width="100%"
          height="100%"
          color="red"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          <Box paddingTop={20}>
            <CarouselDestak />
          </Box>
          <CarouselCategories categories="Adicionados recentemente" />
          <CarouselCategories categories="Mais assistidos" />
          <CarouselCategories categories="Recomendações para você" />
          <CarouselWithSwiper />
        </>
      )}
    </Box>
  );
}
