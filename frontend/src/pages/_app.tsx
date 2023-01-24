import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { FilmsProvider } from "../contexts/filmsContext";
import { theme } from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#7817f7"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
        showOnShallow
      />
      <FilmsProvider>
        <Component {...pageProps} />
      </FilmsProvider>
    </ChakraProvider>
  );
}
