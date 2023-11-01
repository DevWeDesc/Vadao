import Image from "next/image";
import React from "react";
import ImageBanner from "../../public/ImageBannerMobile.png";

export const Banner = () => {
  return (
    <div className="bg-redDefault flex flex-col gap-12 py-24 px-5 lg:w-full lg:flex-row-reverse">
      <Image
        alt=""
        className="lg:absolute lg:right-[18%] lg:w-96 lg:h-96"
        src={ImageBanner}
      />
      <div>
        <h2 className="text-[64px] text-white leading-tight opacity-40 font-extraBlack lg:text-9xl">
          Sabor Inigualável
        </h2>
        <div className="lg:px-24">
          <h3 className="text-[1.68rem] text-white font-extrabold lg:mt-16 lg:text-5xl">
            Uma Experiência Culinária que Encanta os Sentidos
          </h3>
        </div>
      </div>
    </div>
  );
};
