import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import Navbar from "../Components/Universal/Navbar/navbar";
import Footer from "../Components/Universal/Footer/footer";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        {<Component {...pageProps} />}
        <Footer/>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
