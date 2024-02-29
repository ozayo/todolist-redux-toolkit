import store from "../store";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="container">
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
