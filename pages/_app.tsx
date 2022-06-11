import "../styles/globals.css";
import type { AppProps } from "next/app";
import Appstructure from "../Components/Universal/AppStructure/appstructure";
function MyApp({ Component, pageProps }: AppProps) {
  return <Appstructure>{<Component {...pageProps} />}</Appstructure>;
}

export default MyApp;
