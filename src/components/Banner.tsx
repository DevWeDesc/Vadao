import Image from "next/image";
import React from "react";
import ImageBanner from "../../public/ImageBannerMobile.png";

export const Banner = () => {
  return (
    <div className="bg-redDefault flex flex-col gap-12 py-24 px-5">
      <Image alt="" src={ImageBanner} />
      <h2 className="text-[64px] text-white leading-tight opacity-40 font-extraBlack">
        Sabor Inigualável
      </h2>
      <h3 className="text-[1.68rem] text-white font-extrabold">
        Uma Experiência Culinária que Encanta os Sentidos
      </h3>
    </div>
  );
};
