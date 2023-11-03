import React from "react";
import SwiperAbout from "./SwiperAbout/Swiper";

export const About = () => {
  return (
    <div className="pt-24 lg:grid lg:grid-cols-3 lg:pt-0">
      <div className="flex flex-col gap-5 px-5 md:pl-24 lg:justify-center lg:col-span-2 lg:py-12 lg:pl-28 lg:pr-40 2xl:justify-center 2xl:pl-60">
        <h2 className="text-[46px] leading-tight font-extraBlack lg:leading-snug lg:pr-44 lg:text-6xl 2xl:text-8xl 2xl:leading-snug">
          <span className=" border-b-4 border-redDefault opacity-100 ">
            Nossa
          </span>{" "}
          História e Missão
        </h2>
        <p className="font-medium text-base opacity-80 2xl:text-xl 2xl:pr-40">
          Saiba mais sobre o nosso restaurante, desde a nossa rica história
          culinária até a nossa missão de proporcionar experiências
          gastronômicas memoráveis. Descubra o que nos inspira a servir você da
          melhor forma possível.
        </p>
        <a href="#Menu">
          <button className="w-auto px-8 py-3 bg-redDefault rounded-full text-white 2xl:text-xl">
            Ver Cardápio{" "}
          </button>
        </a>
      </div>
      <SwiperAbout />
    </div>
  );
};
