import { Box, HStack, Text, VStack, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import CreateFilmModal from "../components/ModalCreateFilm";
// import Image from '../../public/assets/poster.jpg'

export default function Cadastro() {
  return (
    <>
      <Header />
      <Box
        padding={20}
        height="100vh"
        backgroundImage={"url(/assets/bg.jpg)"}
        backgroundPosition="top center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <HStack
          w="60%"
          bg="gray.800"
          border="3px solid rgba(255, 255, 255, 0.3)"
          alignItems="center"
          borderRadius={20}
          overflow="hidden"
          padding={10}
        >
          <VStack gap={4}>
            <Text
              fontSize={24}
              fontWeight="bold"
              textAlign="center"
              textShadow="0.1em 0.1em 0.2em #000"
              mb={4}
            >
              Nosso cátalogo conta com mais de 15k filmes e séries, mas você
              ainda por de adicionar o seu clicando no botão abaixo.
            </Text>
            <CreateFilmModal />
          </VStack>

          <Image
            src="assets/poster.jpg"
            alt="poster.jpg"
            width={300}
            borderRadius={10}
          />
        </HStack>
      </Box>
    </>
  );
}
