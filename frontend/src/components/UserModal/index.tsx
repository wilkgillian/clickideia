import { Avatar, Flex, VStack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import {
  IoIosArrowDown,
  IoIosClose,
  IoIosNotificationsOutline,
} from "react-icons/io";
import { VscGear } from "react-icons/vsc";
import UserNavLinks from "./UserNavLinks";
import { useUser } from "../../hooks/useUser";

interface UserModalProps {
  title: string;
  username: string;
}

export default function UserModal({ title, username }: UserModalProps) {
  const { handleSignOutUser } = useUser();
  const userNavLinks = [
    {
      link: "/Homepage",
      title: "Perfil",
      icon: BiUserCircle,
    },
    {
      link: "/Homepage",
      title: "Notificações",
      icon: IoIosNotificationsOutline,
    },
    {
      link: "/Homepage",
      title: "Configurações",
      icon: VscGear,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <IoIosArrowDown
        cursor="pointer"
        fontSize={25}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <VStack
          position="absolute"
          padding={4}
          right={2}
          top={2}
          w={300}
          h={500}
          borderRadius={10}
          bg="gray.800"
          boxShadow="20px 4px 30px rgba(0, 0, 0, 0.1)"
          backdropFilter="blur(5px)"
          border="1px solid rgba(255, 255, 255, 0.3)"
        >
          <Flex w="100%" h="auto" justifyContent="flex-end">
            <IoIosClose
              cursor="pointer"
              size={42}
              onClick={() => setOpen(!open)}
            />
          </Flex>
          <Avatar w={24} h={24} src="https://github.com/wilkgillian.png" />
          <Text
            as="h1"
            fontSize={22}
            fontWeight="bold"
            textTransform="capitalize"
          >
            {title}
          </Text>
          <Text
            as="h3"
            fontSize={16}
            fontWeight="light"
            color="gray.600"
            lineHeight={0}
          >
            {username}
          </Text>

          <VStack w="100%" padding="2rem 0" gap={2}>
            {userNavLinks.map((links, index) => (
              <UserNavLinks
                key={index}
                link={links.link}
                title={links.title}
                icon={links.icon}
              />
            ))}
            <Button
              colorScheme="none"
              rightIcon={<GoSignOut />}
              onClick={handleSignOutUser}
              color="gray.100"
            >
              Sair
            </Button>
          </VStack>
        </VStack>
      )}
    </>
  );
}
