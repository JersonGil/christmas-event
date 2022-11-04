import { AnimatePresence } from "framer-motion";

// ** COMPONENTS
import { Header } from "../components";

import "../styles/globals.scss";
import "../styles/Home.scss";
import "../styles/header.scss";

function MyApp({ Component, pageProps, router }) {
  const url = `http://localhost:3000${router.route}`;

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Header />
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
  );
}

export default MyApp;
