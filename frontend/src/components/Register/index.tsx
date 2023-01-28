import {
  Input,
  VStack,
  Button,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineKey, AiOutlineMail } from 'react-icons/ai';
import { MdVisibility } from 'react-icons/md';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

export function Register() {
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
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineUser />}
          />
          <Input h={12} type="text" placeholder="Nome" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineMail />}
          />
          <Input h={12} type="email" placeholder="Email" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineUser />}
          />
          <Input h={12} type="text" placeholder="Nome de usuário" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineKey />}
          />
          <Input h={12} type={show ? 'text' : 'password'} placeholder="Senha" />
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
          onClick={event => handleAuthenticated(event)}
        >
          Cadastrar
        </Button>
      </VStack>
    </>
  );
}
