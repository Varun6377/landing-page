"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-5 mx-5 md:mx-20 relative">
      {/* Semi-transparent overlay */}
      <div
        className={`overlay ${isMenuOpen ? "block" : "hidden"}`}
        onClick={toggleMenu}
      ></div>
      <div className="container mx-auto relative flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center space-x-4 mb-4 md:mb-0">
          <div className="font-bold text-lg">
            <Image
              src="/assets/logo.png"
              alt="uirfy"
              width="100"
              height="100"
            />
          </div>
          <div className="md:hidden">
            {isMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          <div
            className={`${
              isMenuOpen
                ? "flex flex-col absolute top-full left-0 right-0 bg-white z-10 p-4"
                : "hidden"
            } md:flex md:flex-row text-center md:space-x-10 text-lg font-medium transition-all ease-in-out duration-500`}
          >
            <Link href="/" className="text-customRed">
              Home
            </Link>
            <Link href="/" className="">
              About Us
            </Link>
            <Link href="/" className="">
              Pricing
            </Link>
            <Link href="/" className="">
              Features
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
