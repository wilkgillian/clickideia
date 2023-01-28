import { Flex, Text, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { ElementType } from 'react';

interface NavlinksProps {
  icon: ElementType;
  title: string;
  link: string;
}

function NavLinks({ icon, title, link }: NavlinksProps) {
  return (
    <Flex
      _hover={{
        color: 'teal'
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Link passHref href={link}>
        <Icon as={icon} />
        <Text ml={2}>{title}</Text>
      </Link>
    </Flex>
  );
}

export default NavLinks;
