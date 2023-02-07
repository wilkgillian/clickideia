import Head from "next/head";
import { Box, Text, Divider, VStack } from "@chakra-ui/react";
import { Login } from "../components/Auth/Login";
import LoginAnimation from "../components/Animations/Login";
import { useEffect, useState } from "react";
import { Register } from "../components/Auth/Register";
import { useUser } from "../hooks/useUser";

export default function Home() {
  const [isUser, setIsUser] = useState(false);
  const { loadUser } = useUser();
  function handleIsUser() {
    setIsUser(!isUser);
  }
  useEffect(() => {
    loadUser();
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
        <VStack w="full" h="full" justifyContent="center" padding="1.2rem 4rem">
          <Box w="70%">
            <Text as="h2" fontSize={24}>
              Bem vindo ao{" "}
            </Text>
            <Text
              as="h1"
              fontSize={42}
              fontWeight="bold"
              lineHeight={0.5}
              color="teal"
              mb={4}
            >
              TaskBook
            </Text>
          </Box>
          {isUser ? (
            <VStack w="70%" alignItems="center">
              <Register />
              <Text>
                Já tem conta?{" "}
                <Text as="button" color="teal" onClick={handleIsUser}>
                  Faça login
                </Text>
              </Text>
            </VStack>
          ) : (
            <VStack w="70%" alignItems="center">
              <Login />
              <Text>
                Não tem conta?{" "}
                <Text as="button" color="teal" onClick={handleIsUser}>
                  Cadastre-se
                </Text>
              </Text>
            </VStack>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
