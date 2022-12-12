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
      <ChakraInput
        color="#fff"
        h={12}
        type={type}
        variant="flushed"
        placeholder={placeholder}
        _focus={{
          bg: "rgba(101, 19, 252, 0.4)",
          color: "cyan",
          paddingLeft: 2,
          fontSize: 18,
          borderRadius: 5,
          _placeholder: {
            opacity: 1,
          },
        }}
        _placeholder={{
          color: "cyan",
          fontWeight: "normal",
          opacity: 0.4,
        }}
      />
    </InputGroup>
  );
}
