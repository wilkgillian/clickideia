import Head from "next/head";
import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";
import CarouselDestak from "../components/Carousel/CarouselDestak";
import { useFilms } from "../hooks/useFilms";
import { CarouselFilms } from "../components/Carousel/CarouselFilms";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { LoginOrSubscribe } from "./Login";
import { useRouter } from "next/router";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  if (isAuthenticated) {
    router.push("/Home");
  }
  return (
    <Box as="div" w="100%" maxW="1920px" h="100vh" margin="auto">
      <Head>
        <title>FILIMO</title>
      </Head>
      {isAuthenticated ? (
        <Home />
      ) : (
        <LoginOrSubscribe>
          <Button colorScheme="linkedin" w="100%" h={14} _hover={{
            transform: "scale(1.02)"
          }} onClick={() => setIsAuthenticated(true)}>Login</Button>
        </LoginOrSubscribe>
      )}
    </Box>
  );
}
