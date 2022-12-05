import { Box, Text, Input, VStack, Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface LoginProps {
  children: ReactNode;
}

export function Login({ children }: LoginProps) {
  const [first, setFirst] = useState(false);
  return (
    // <>
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      // onClick={() => setFirst(false)}
      // zIndex={first ? 2 : 0}
      // position={first ? 'absolute' : 'fixed'}
      // marginLeft={-10}
      // marginTop={20}
      // visibility={first ? 'hidden' : 'visible'}
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
          {children}
        </VStack>
        <Text display="flex">
          Esqueceu sua senha?
          {/* <Text color="cyan" ml={2}>
            <Link href="/forgot-password" passHref> */}
          Redefina aqui
          {/* </Link>
          </Text> */}
        </Text>
      </VStack>
    </Box>
    //   {/* <Box
    //     w="100%"
    //     h="100%"
    //     display="flex"
    //     alignItems="center"
    //     justifyContent="center"
    //     onClick={() => setFirst(true)}
    //     zIndex={first ? 0 : 1}
    //   >
    //     <VStack
    //       w={400}
    //       h={500}
    //       bg="gray.700"
    //       borderRadius={10}
    //       boxShadow={"dark-lg"}
    //       border="3px solid #454545"
    //       padding={3}
    //       gap={3}
    //     >
    //       <Text fontSize={24} textAlign="center" color="cyan">
    //         Cadastre-se
    //       </Text>
    //       <VStack as="form" width="100%" gap={7}>
    //         <Input placeholder="Senha:" h={14} fontSize={22} />
    //         <Input placeholder="Password:" h={14} fontSize={22} />
    //         {children}
    //       </VStack>
    //       <Text display="flex">
    //         Esqueceu sua senha?
    //         <Text color="cyan" ml={2}>
    //           <Link href="/forgot-password" passHref>
    //             Redefina aqui
    //           </Link>
    //         </Text>
    //       </Text>
    //     </VStack>
    //   </Box> */}
    // // </>
  );
}
