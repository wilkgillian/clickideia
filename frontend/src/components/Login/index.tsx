import {
  Text,
  Input,
  VStack,
  Divider,
  Button,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineUser,
  AiOutlineKey
} from 'react-icons/ai';
import { MdVisibility } from 'react-icons/md';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export function Login() {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  function handleClick() {
    setShow(!show);
  }
  function handleAuthenticated(event: FormEvent) {
    event.preventDefault();
    setIsAuthenticated(true);
    if (isAuthenticated) {
      router.push('/Homepage');
    }
  }
  return (
    <>
      <VStack w="full" gap={2}>
        <Button w="full" disabled={true} h={12} gap={4}>
          <Icon as={AiOutlineGoogle} />{' '}
          <Text fontWeight="normal">Faça login com o google</Text>
        </Button>
        <Button w="full" disabled={true} h={12} gap={4}>
          <Icon as={AiFillFacebook} />
          <Text fontWeight="normal">Faça login com o facebook</Text>
        </Button>
      </VStack>
      <Text>ou</Text>
      <Divider orientation="horizontal" />
      <VStack
        as="form"
        onSubmit={event => handleAuthenticated(event)}
        spacing={4}
        w="full"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineUser />}
          />
          <Input type="text" placeholder="Nome de usuario" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineKey />}
          />
          <Input type={show ? 'text' : 'password'} placeholder="Senha" />
          <InputRightElement>
            <Icon as={MdVisibility} onClick={handleClick} />
          </InputRightElement>
        </InputGroup>
        <Button
          type="submit"
          variant="solid"
          colorScheme="teal"
          w="full"
          h={12}
        >
          Login
        </Button>
      </VStack>
    </>
  );
}
