import {
  Text,
  Input,
  VStack,
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
import { motion } from "framer-motion";

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
    <VStack
      w="full"
      as={motion.div}
      initial={{ opacity: 0, x: 50, y: -50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
    >
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
          bgColor="teal"
          w="full"
          h={12}
          as={motion.button}
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Login
        </Button>
      </VStack>
    </VStack>
  );
}
