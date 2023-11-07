import Image from "next/image";
import React from "react";
import ImageBanner from "../../public/ImageBannerMobile.png";
import ImageBanner2 from "../../public/ImgBannerAtt.png";

export const Banner = () => {
  return (
    <div className="bg-redDefault flex flex-col gap-12 py-24 px-5 md:items-center lg:w-full lg:flex-row-reverse">
      <Image
        alt="Imagem do Prato do Vadão para Banner"
        className="lg:absolute lg:right-[10%] lg:w-[80vh] lg:h-[60vh]"
        src={ImageBanner2}
      />
      <div>
        <h2 className="text-[60px] text-white leading-tight opacity-60 font-extraBlack md:text-8xl lg:text-9xl 2xl:text-[12rem] 2xl:pl-16">
          Sabor Inigualável
        </h2>
        <div className="md:px-20 lg:px-24 2xl:px-60">
          <h3 className="text-[1.68rem] text-white font-extrabold md:text-4xl md:mt-8 lg:mt-16 lg:text-5xl 2xl:text-6xl">
            Uma Experiência Culinária que Encanta os Sentidos
          </h3>
        </div>
      </div>
    </div>
  );
};
