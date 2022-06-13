import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appstructure from "../Components/Universal/AppStructure/appstructure";
import { Provider } from "react-redux";
import store from "../app/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Appstructure>{<Component {...pageProps} />}</Appstructure>
    </Provider>
  );
}

export default MyApp;
