import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setUpStore } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  const initialReduxState = setUpStore();

  return (
    <Provider store={initialReduxState}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
