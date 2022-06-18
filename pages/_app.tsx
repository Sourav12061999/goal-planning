import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import Navbar from "../Components/Universal/Navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        {<Component {...pageProps} />}
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
