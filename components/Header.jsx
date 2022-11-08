import { useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdMenu } from "react-icons/md";
import { TbChristmasTree } from "react-icons/tb";

import { LINKS } from "../public/data";

const Header = () => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const linkId = useId();

  const togleMenu = () => {
    console.log("aw");
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav
        className={`fixed z-10 top-0 left-0 flex items-center justify-center w-full h-16 sm:py-0 sm:pr-0 sm:pl-4 sm:justify-between ${
          route.pathname !== "/" && "bg-black"
        }`}
      >
        <div
          className={`fixed z-10 top-0 left-0 w-full h-full ${
            isOpen ? "visible" : "invisible"
          } opacity-0 transition delay-75 bg-black/[.05] navbar-overlay sm:hidden`}
          onClick={togleMenu}
        />
        <button
          className="absolute t-0 left-0 grid place-items-center w-16 h-16 p-0 sm:hidden text-white text-2xl"
          onClick={togleMenu}
        >
          <MdMenu />
        </button>
        <h1 className="m-0 flex gap-3 text-3xl font-bold text-white sm:translate-x-[100%]">
          <TbChristmasTree /> Christmas Shop
        </h1>
        <nav
          className={`fixed z-10 top-0 left-0 navbar-menu w-52 h-full gap-4 p-1 flex flex-col 
            items-center bg-black invisible sm:static 
            sm:w-auto sm:bg-transparent sm:flex-row sm:visible ${
              isOpen ? "open" : ""
            }`}
        >
          {LINKS.map((link, index) => (
            <Link
              key={`${linkId}-${index}`}
              className="text-white text-lg hover:underline hover:underline-offset-1 bg-transparent py-0 px-2 font-bold mt-5 sm:mt-0"
              href={link.url}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </nav>
    </header>
  );
};

export default Header;
