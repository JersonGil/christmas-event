import Head from "next/head";

// ** COMPONENTS
import { Layout } from "../components";

// ** VIEWS
import { Home } from "../views";

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
