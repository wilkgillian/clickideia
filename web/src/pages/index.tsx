import Head from "next/head";
import { Box, Spinner, Flex, HStack } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import CarouselDestak from "../components/Carousel/CarouselDestak";
import CarouselCategories from "../components/Carousel/CarouselCategories";
import Wrapper from "../components/Wrapper";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  return (
    <Box w="100%" maxW="1920px" h="100vh">
      <Head>
        <title>FILIMO</title>
      </Head>
      <Header />
      {/* {loading ? (
        <Spinner />
      ) : (
        <> */}
      <Box>
        <CarouselDestak />
      </Box>
      <CarouselCategories categories="Filmes em destaque" />
      {/* <Wrapper categories="ba babab" /> */}
      {/* <CarouselCategories /> */}
    </Box>
  );
}
