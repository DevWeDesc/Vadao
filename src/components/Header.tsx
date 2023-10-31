import Image from "next/image";
import React from "react";
import LogoHeader from "../../public/logoMobile.png";

export const Header = () => {
  return (
    <div className="bg-redDefault flex items-center justify-between px-5">
      <Image alt="" src={LogoHeader} />

      <div className=" flex flex-col gap-2 h-8 w-8">
        <div className="w-full h-[2px] bg-white" />
        <div className="w-full h-[2px] bg-white" />
        <div className="w-full h-[2px] bg-white" />
      </div>
    </div>
  );
};
