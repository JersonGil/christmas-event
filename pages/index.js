import Head from "next/head";
import { Home } from "../views";
import { Header } from "../components";

export default function App() {
  return (
    <main className="h-screen">
      <Header />
      <Home />
    </main>
  );
}
