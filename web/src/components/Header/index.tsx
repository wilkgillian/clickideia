import {
  Flex,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications, IoIosArrowDown } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

import Logo from "../../../public/assets/logo.svg";

export default function Header() {
  return (
    <Flex
      w="100%"
      h={16}
      bg="gray.900"
      p={10}
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      zIndex={1}
    >
      <Link passHref href="/">
        <Image src={Logo} width="100" height="100" alt="logo"></Image>
      </Link>
      <InputGroup w="30%" color="gray.500" fontSize={18}>
        <Input
          placeholder="Encontre seu filmes favoritos..."
          borderRadius={20}
          border="none"
          bg="gray.800"
        />
        <InputRightElement width="4.5rem">
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
      <Flex display="flex" alignItems="center" gap={3}>
        <Link href="/Cadastro" passHref>
          <IoAdd fontSize={25} cursor="pointer" />
        </Link>
        {/* </Button> */}
        <IoMdNotifications fontSize={20} />
        <Avatar ml={5} w={10} h={10} src="https://github.com/wilkgillian.png" />
        <Text>Wilk Gillian</Text>
        <IoIosArrowDown fontSize={25} />
      </Flex>
    </Flex>
  );
}
