import { Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ElementType } from 'react';

interface UserNavLinksProps {
  link: string;
  title: string;
  icon: ElementType;
}

function UserNavLinks({ link, title, icon }: UserNavLinksProps) {
  return (
    <Flex w="50%" justifyContent="left" alignItems="center" gap={4}>
      <Icon as={icon} color="gray.100" />
      <Link href={link} passHref>
        <Text
          as="a"
          cursor="pointer"
          _hover={{
            textDecoration: 'underline'
          }}
        >
          {title}
        </Text>
      </Link>
    </Flex>
  );
}

export default UserNavLinks;
