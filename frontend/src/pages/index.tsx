import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Login } from './Login';

export default function Home() {
  return (
    <Box as="div" w="100%" maxW="1920px" h="100vh" margin="auto">
      <Head>
        <title>TaskBook</title>
      </Head>
      <Login />
    </Box>
  );
}
