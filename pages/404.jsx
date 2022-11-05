import { useRouter } from "next/router";
import Link from "next/link";

import { Layout, SantaClaus } from "../components";

const NotFound = () => {
  const router = useRouter();

  return (
    <Layout>
      <section
        className="container-section
          flex flex-col bg-[url('/assets/cover.jpg')] 
          w-full h-screen bg-cover bg-center bg-no-repeat
          justify-center
          px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-64 pt-24
        "
      >
        <div className="w-[60%] flex flex-col items-center justify-center z-10">
          <h1 className="text-white text-9xl font-bold">404 - Error</h1>
          <div className="text-4xl flex flex-col mt-4 items-center text-white ml-6">
            <span>Santa Saying sorry</span>
            <h3 className="mt-2">Christmas hasnt come yet</h3>
          </div>
          <Link
            href="/"
            className="w-60 mt-4 bg-white h-10 rounded-xl p-1 text-center font-bold text-2xl cursor-pointer shadow-lg hover:shadow-sm hover:bg-slate-100"
          >
            Go Home
          </Link>
        </div>
        <SantaClaus />
      </section>
    </Layout>
  );
};

NotFound.propTypes = {};

export default NotFound;
