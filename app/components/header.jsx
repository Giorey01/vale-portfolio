"use client";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Navbar per versioni desktop e mobile */}
      <div className="flex justify-between m-5 mx-10 items-center">
        <div>
          <p className="text-3xl font-bold">Valentina Soldano</p>
          <p>Collage Illust. & Editorial Design</p>
        </div>
        <div className="hidden md:flex gap-8 text-2xl">
          <Link
            href="/"
            className="hover:scale-110 transition-all duration-110"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:scale-110 transition-all duration-110"
          >
            About me
          </Link>
        </div>
        <button
          aria-expanded={isNavOpen}
          className="md:hidden scale-150 cursor-pointer hover:opacity-45 transition-all"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Hamburger menu per mobile */}
      <div
        className={`fixed inset-0 bg-inherit flex flex-col justify-center items-center z-50 transform transition-transform duration-300 md:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute top-0 flex items-center justify-between px-7 mt-4 w-full h-10"
          onClick={() => setIsNavOpen(false)}
        >
          <Link
            href="https://www.instagram.com/_jojifilm_/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="scale-150 cursor-pointer" />
          </Link>
          <button
            className="scale-150 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <RxCross2 />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center min-h-[250px] text-2xl">
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link href="/" onClick={() => setIsNavOpen(false)}>
              Home
            </Link>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <Link href="/About" onClick={() => setIsNavOpen(false)}>
              About me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
