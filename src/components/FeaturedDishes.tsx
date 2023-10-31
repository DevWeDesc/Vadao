import Image from "next/image";
import React from "react";
import ExampleSwiper from "../../public/ExampleSwiper.png";
import SwiperFeatured from "./SwiperFeatured/SwiperFeatured";

export const FeaturedDishes = () => {
  return (
    <div className="bg-redDefault">
      <div className="bg-redDefault text-white pt-24 px-5">
        <div>
          <div className="flex flex-col gap-3">
            <p className="font-black text-center">Nossos Pratos em Destaque</p>
            <h2 className="font-black text-5xl text-center">
              Sabor, Criatividade e Experiências Únicas
            </h2>
          </div>
          <p className="text-lg font-semibold text-center mt-5">
            Explore nossa seleção de pratos em destaque, cuidadosamente
            preparados para surpreender seu paladar.
          </p>
        </div>
      </div>
      <div className="flex items-center pb-24 justify-center mt-9">
        <SwiperFeatured />
        {/* <Image alt="" src={ExampleSwiper} /> */}
      </div>
    </div>
  );
};
