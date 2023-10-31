"use client";
import Image from "next/image";
import React, { useState } from "react";
import LogoHeader from "../../public/logoMobile.png";
import { Nav } from "./Nav";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(true);

  const hamdleNavOpen = () => {
    navOpen ? setNavOpen(false) : setNavOpen(true);
  };

  return (
    <div className="bg-redDefault flex items-center justify-between px-5 py-1">
      <Image alt="" src={LogoHeader} />

      <div
        className="z-20 flex flex-col gap-[6px] h-6 w-6"
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
      <Nav navOpen={navOpen} />
    </div>
  );
};
