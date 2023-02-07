import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import { UsersProvider } from "../contexts/usersContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#2500f8"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow
      />
      <ToastContainer />
      <UsersProvider>
        {/* <TasksProvider> */}
        <Component {...pageProps} />
        {/* </TasksProvider> */}
      </UsersProvider>
    </ChakraProvider>
  );
}
