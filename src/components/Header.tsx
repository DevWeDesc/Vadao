import Image from "next/image";
import React from "react";
import LogoHeader from "../../public/logoMobile.png";

export const Header = () => {
  return (
    <div className="bg-redDefault flex items-center justify-between px-5 py-1">
      <Image alt="" src={LogoHeader} />

      <div className=" flex flex-col gap-[6px] h-6 w-6">
        <div className="w-full h-[1.2px] bg-white" />
        <div className="w-full h-[1.2px] bg-white" />
        <div className="w-full h-[1.2px] bg-white" />
      </div>
    </div>
  );
};
