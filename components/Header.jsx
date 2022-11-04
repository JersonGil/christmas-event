import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { TbChristmasTree } from "react-icons/tb";

const Header = () => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav
        className={`fixed z-10 top-0 left-0 flex items-center justify-center w-full h-16 sm:py-0 sm:pr-0 sm:pl-4 sm:justify-between ${
          route.pathname !== "/" && "bg-black"
        }`}
      >
        <div
          className="fixed z-10 top-0 left-0 w-full h-full invisible opacity-0 transition delay-75 bg-black/[.05] navbar-overlay sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />
        <button
          className="absolute t-0 left-0 grid place-items-center w-16 h-16 p-0 sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu />
        </button>
        <Link href="/">
          <h1 className="m-0 flex gap-3 text-2xl font-bold text-white sm:translate-x-[100%]">
            <TbChristmasTree /> Christmas Shop
          </h1>
        </Link>
        <nav
          className={`fixed z-10 top-0 left-0 navbar-menu w-52 h-full gap-4 p-5 flex flex-col items-center bg-black invisible sm:static sm:w-auto sm:bg-transparent sm:flex-row sm:visible ${
            isOpen ? "open" : ""
          }`}
        >
          <Link
            className="text-white text-lg bg-transparent py-0 px-2"
            href="/services"
          >
            Services
          </Link>
          <button className="text-white text-lg bg-transparent py-0 px-2">
            Contact
          </button>
          <button className="text-white text-lg bg-transparent py-0 px-2">
            Clients
          </button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
