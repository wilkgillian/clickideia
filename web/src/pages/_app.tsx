import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FilmsProvider } from "../contexts/filmsContext";
import { theme } from "../styles/theme";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FilmsProvider>
        <Component {...pageProps} />
      </FilmsProvider>
    </ChakraProvider>
  );
}
