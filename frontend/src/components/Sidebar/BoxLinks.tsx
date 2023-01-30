import { Box, Text, VStack } from "@chakra-ui/react";
import { ElementType } from "react";
import NavLinks from "./NavLinks";

interface BoxLinksProps {
  title: string;
  data: NavlinksProps[];
}

interface NavlinksProps {
  link: string;
  title: string;
  icon: ElementType;
}

function BoxLinks({ data, title }: BoxLinksProps) {
  return (
    <Box w="full">
      <Text as="h1" color="teal" ml={2} fontWeight="bold" fontSize={22}>
        {title}
      </Text>

      <VStack w="full" alignItems="left" padding={4}>
        {data.map((navlink) => (
          <NavLinks
            key={navlink.title}
            title={navlink.title}
            icon={navlink.icon}
            link={navlink.link}
          />
        ))}
      </VStack>
    </Box>
  );
}

export default BoxLinks;
