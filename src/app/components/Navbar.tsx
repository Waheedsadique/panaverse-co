"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  let Navitems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact Us", link: "/" },
  ];
  const [navbar, setNavber] = useState(false);

  const handlenavbar = () => {
    setNavber(!navbar);
  };
  return (
    <div className="bg-[#000235] ">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <div className="flex  ">
          <Image src="/logo.png" height={50} width={50} alt="logo" />
          <span className="text-2xl flex items-end text-white font-[poppins] ">
            Panaverse
          </span>
        </div>
        <ul className="hidden md:flex items-center  ">
          {Navitems.map((i) => (
            <li
              key={i.name}
              className=" font-[poppins]  p-4 hover:bg-[#B8162D]  hover:rounded-2xl cursor-pointer text-white"
            >
              <Link href={i.link}>{i.name}</Link>
            </li>
          ))}
          <div>
            <button  className="m-4 p-4 font-[poppins] text-xl bg-[#B8162D]  hover:bg-blue-500 flex rounded-2xl  ">
            <a
            href="https://portal.piaic.org/signup"
            
          >
              Apply
              </a>
            </button>
          </div>
        </ul>
        <div onClick={handlenavbar} className="block md:hidden">
          {navbar ? (
            <Image src={"/redclose.svg"} width={"50"} height={"50"} alt="close" />
          ) : (
            <Image
              src={"/hamburger-red.svg"}
              width={"50"}
              height={"50"}
              alt="hamburger"
              className="focus:border-none active:border-none"
            />
          )}
        </div>
        <ul
          className={
            navbar
              ? "fixed left-0 top-0 w-[80%] h-auto border-auto border-r-gray-900 bg-[#000235] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="flex pt-6">
          <Image src="/logo.png" height={50} width={50} alt="logo" />
          <span className="text-2xl flex items-end text-white font-[poppins] ">
            Panaverse
          </span>
        </div>
          {Navitems.map((i) => (
            <li key={i.name} className="p-4 border-b-2 border-gray-500">
              <Link href={i.link}> {i.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
