import { Flex, Avatar, Text, HStack } from '@chakra-ui/react';
import ModalTask from '../ModalTask';

import UserModal from '../UserModal';

export default function Header() {
  // const {}
  return (
    <HStack
      w="full"
      h={16}
      p={10}
      alignItems="center"
      justifyContent="space-between"
    >
      <ModalTask type="Criar" />
      <Flex
        alignItems="center"
        w="20%"
        maxW={200}
        justifyContent="space-between"
      >
        <Avatar ml={5} w={10} h={10} src="https://github.com/wilkgillian.png" />
        <Text>Wilk Gillian</Text>

        <UserModal title="Wilk Gillian" username="@wilkgillian" />
      </Flex>
    </HStack>
  );
}
