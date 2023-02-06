import { Flex, Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";

interface NavlinksProps {
  icon: ElementType;
  title: string;
  link: string;
}

function NavLinks({ icon, title, link }: NavlinksProps) {
  const router = useRouter();
  return (
    <Flex
      _hover={{
        color: "teal",
      }}
      justifyContent="space-between"
      alignItems="center"
      color={router.pathname == link ? "teal" : ""}
      borderBottom={router.pathname == link ? "1px solid teal" : ""}
    >
      <Link passHref href={link}>
        <Icon as={icon} />
        <Text ml={2} fontWeight={router.pathname == link ? "bold" : "normal"}>
          {title}
        </Text>
      </Link>
    </Flex>
  );
}

export default NavLinks;
