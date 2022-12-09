import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface InputProps {
  icon?: ReactNode;
  placeholder: string;
  type: string;
}

export default function Input({ icon, placeholder, type }: InputProps) {
  return (
    <InputGroup>
      {icon ? <InputLeftElement pointerEvents="none" children={icon} /> : ""}
      <ChakraInput color="#fff" h={12} type={type} variant="outline" outlineColor="red" placeholder={placeholder} />
    </InputGroup>
  );
}
