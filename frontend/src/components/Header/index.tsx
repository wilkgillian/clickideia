import { Flex, Avatar, Text, HStack } from "@chakra-ui/react";
import ModalTask from "../ModalTask";

import UserModal from "../UserModal";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "next/router";

export default function Header() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <HStack
      w="full"
      h={16}
      p={10}
      alignItems="center"
      justifyContent={
        router.pathname == "/Users" ? "flex-end" : "space-between"
      }
    >
      {router.pathname == "/Homepage" ? <ModalTask type="Criar" /> : ""}
      <Flex
        alignItems="center"
        w="20%"
        maxW={200}
        justifyContent="space-between"
      >
        <Avatar ml={5} w={10} h={10} src="https://github.com/wilkgillian.png" />
        <Text textTransform="capitalize">{user.name}</Text>

        <UserModal title={user.name} username={user.username} />
      </Flex>
    </HStack>
  );
}
