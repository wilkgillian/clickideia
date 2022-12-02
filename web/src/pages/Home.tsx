import { Box, Flex, Spinner } from "@chakra-ui/react";
import CarouselDestak from "../components/Carousel/CarouselDestak";
import { CarouselFilms } from "../components/Carousel/CarouselFilms";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { useFilms } from "../hooks/useFilms";

export default function Home() {
  const { loading } = useFilms();
  return (
    <>
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
          <CarouselFilms categorie="Adicionados recentemente" />
          <CarouselFilms categorie="Mais assistidos" />
          <CarouselFilms categorie="Recomendados para você" />
          <CarouselFilms categorie="Premiados" />
        </>
      )}
      <Footer />
    </>
  );
}
