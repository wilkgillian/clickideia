import { Box, Text, Textarea, VStack, HStack } from "@chakra-ui/react";
import BgImage from "../../public/assets/bg.jpg";
import Header from "../components/Header";
import Input from "../components/Input";

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
      >
        <Text
          mt={5}
          textAlign="center"
          fontSize={102}
          fontFamily="Road Rage"
          fontWeight="bold"
          textShadow="0.1em 0.1em 0.2em #000"
        >
          ADICIONE SEU FILME
        </Text>
        <Box
          margin="auto"
          w="70%"
          bgColor="#3e3b4959"
          borderRadius={16}
          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(15px)"
          border="1px solid rgba(54, 54, 56, 0.7)"
        >
          <VStack padding="4rem 10rem" as="form">
            <Input type="text" placeholder="Titulo do filme" />
            <Input type="text" placeholder="Genero" />
            <Input type="text" placeholder="Diretor" />
            <Input type="text" placeholder="Produtor" />
            <Input type="number" placeholder="Ano de lançamento" />
            <Input type="number" placeholder="Nota de avaliação" />
            <Input type="number" placeholder="Duração" />
            <HStack w="100%" gap={4}>
              <Input type="file" placeholder="Banner do filme" />
              <Input type="file" placeholder="Poster do filme" />
            </HStack>
            <Input type="file" placeholder="Arquivo do filme" />
            <Textarea placeholder="Sinopse do filme" />
          </VStack>
        </Box>
      </Box>
    </>
  );
}
