import { AnimatePresence } from "framer-motion";

// ** COMPONENTS
import { Header } from "../components";

import "../styles/globals.scss";
import "../styles/Home.scss";
import "../styles/header.scss";
import "../styles/service.scss";

function MyApp({ Component, pageProps, router }) {
  const url = `http://localhost:3000${router.route}`;

  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
