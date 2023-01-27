import { Box, Text, Input, VStack, Divider, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

interface LoginProps {
  children: ReactNode;
}

export function Login() {
  const router = useRouter();
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        w={400}
        h={500}
        bg="gray.700"
        borderRadius={10}
        boxShadow={'dark-lg'}
        border="3px solid #454545"
        padding={3}
        gap={3}
      >
        <Text fontSize={24} textAlign="center" color="cyan">
          Faça login:
        </Text>
        <VStack as="form" width="100%" gap={7}>
          <Input placeholder="Senha:" h={14} fontSize={22} />
          <Input placeholder="Password:" h={14} fontSize={22} />
          <Button
            colorScheme="linkedin"
            w="100%"
            h={14}
            _hover={{
              transform: 'scale(1.02)'
            }}
            // onClick={() => }
          >
            Login
          </Button>
        </VStack>
        <Text display="flex">Esqueceu sua senha? Redefina aqui</Text>
      </VStack>
    </Box>
  );
}
