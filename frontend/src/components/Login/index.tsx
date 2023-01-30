import {
  Text,
  Input,
  VStack,
  Divider,
  Button,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineUser,
  AiOutlineKey,
} from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { FormEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";

export function Login() {
  const { handleSignInUser } = useUser();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleClick() {
    setShow(!show);
  }
  async function handleAuthenticated(event: FormEvent) {
    event.preventDefault();
    await handleSignInUser(username, password);
  }

  return (
    <>
      <VStack w="full" gap={2}>
        <Button w="full" disabled={true} h={12} gap={4}>
          <Icon as={AiOutlineGoogle} />{" "}
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
        onSubmit={(event) => handleAuthenticated(event)}
        spacing={4}
        w="full"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineUser />}
          />
          <Input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nome de usuario"
          />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<AiOutlineKey />}
          />
          <Input
            required
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
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
