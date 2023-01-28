import Head from 'next/head';
import { Box, Text, Divider, VStack } from '@chakra-ui/react';
import { Login } from '../components/Login';
import LoginAnimation from '../components/Animations/Login';
import { useState } from 'react';
import { Register } from '../components/Register';

export default function Home() {
  const [register, setRegister] = useState(false);
  function handleRegister() {
    setRegister(!register);
  }
  return (
    <Box as="div" w="100%" maxW="1920px" h="100vh" margin="auto">
      <Head>
        ../components/Login/Login
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
              Bem vindo ao{' '}
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
          {register ? (
            <>
              <Register />
              <Text>
                Já tem conta?{' '}
                <Text as="button" color="teal" onClick={handleRegister}>
                  Faça login
                </Text>
              </Text>
            </>
          ) : (
            <>
              <Login />
              <Text>
                Não tem conta?{' '}
                <Text as="button" color="teal" onClick={handleRegister}>
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
