import Head from "next/head";
import { Box, Text, Divider, VStack, SlideFade } from "@chakra-ui/react";
import { Login } from "../components/Auth/Login";
import LoginAnimation from "../components/Animations/Login";
import { useEffect, useState } from "react";
import { Register } from "../components/Auth/Register";
import { useUser } from "../hooks/useUser";
import Aos from "aos";

export default function Home() {
  const [isUser, setIsUser] = useState(false);
  const { loadUser } = useUser();
  function handleIsUser() {
    setIsUser(!isUser);
  }
  useEffect(() => {
    loadUser();
    // Aos.init({
    //   duration: 1000,
    // });
  }, []);
  return (
    <Box as="div" w="100%" maxW="1920px" h="100vh" margin="auto">
      <Head>
        <title>TaskBook</title>
      </Head>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={20}
      >
        <Box w="full" h="full">
          <LoginAnimation />
        </Box>
        <Divider orientation="vertical" />
        <VStack w="full" h="full" padding="1.2rem 4rem">
          <Box w="100%">
            <Text as="h2" fontSize={24}>
              Bem vindo ao{" "}
            </Text>
            <Text
              as="h1"
              fontSize={36}
              fontWeight="bold"
              lineHeight={0.5}
              color="teal"
              mb={4}
            >
              TaskBook
            </Text>
          </Box>
          {isUser ? (
            <>
              <Register />
              <Text>
                Já tem conta?{" "}
                <Text as="button" color="teal" onClick={handleIsUser}>
                  Faça login
                </Text>
              </Text>
            </>
          ) : (
            <>
              <Login />
              <Text>
                Não tem conta?{" "}
                <Text as="button" color="teal" onClick={handleIsUser}>
                  Cadastre-se
                </Text>
              </Text>
            </>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
