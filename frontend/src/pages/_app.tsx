import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { TasksProvider } from "../contexts/tasksContext";
import { theme } from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import { UsersProvider } from "../contexts/usersContext";

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
      <UsersProvider>
        <TasksProvider>
          <Component {...pageProps} />
        </TasksProvider>
      </UsersProvider>
    </ChakraProvider>
  );
}
