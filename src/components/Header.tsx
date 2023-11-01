"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoHeader from "../../public/logoMobile.png";
import { Nav } from "./Nav";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const hamdleNavOpen = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className="fixed w-screen z-10 bg-redDefault flex items-center justify-between px-5 py-1 lg:w-full lg:px-20 lg:relative">
      <Image alt="" src={LogoHeader} />

      <div
        className="z-20 flex flex-col gap-[6px] h-6 w-6 lg:hidden"
        onClick={hamdleNavOpen}
      >
        <div
          className={`w-full h-[1.2px] bg-white transition-all ${
            navOpen && "rotate-45 relative top-2 transition-all"
          }`}
        />
        {!navOpen && <div className="w-full h-[1.2px] bg-white" />}
        <div
          className={`w-full h-[1.2px] bg-white transition-all ${
            navOpen && "-rotate-45 relative transition-all"
          }`}
        />
      </div>
      <Nav navOpen={navOpen} handleNavOpen={closeNav} />
    </div>
  );
};
