import React from "react";

export const About = () => {
  return (
    <div className="py-24 px-5">
      <div className="flex flex-col gap-5">
        <h2 className="text-[46px] leading-tight font-extraBlack">
          <span className=" border-b-4 border-redDefault opacity-100">
            Nossa
          </span>{" "}
          História e Missão
        </h2>
        <p className="font-medium text-base opacity-80 ">
          Saiba mais sobre o nosso restaurante, desde a nossa rica história
          culinária até a nossa missão de proporcionar experiências
          gastronômicas memoráveis. Descubra o que nos inspira a servir você da
          melhor forma possível.
        </p>
        <button className="w-auto px-8 py-3 bg-redDefault rounded-full text-white">
          Ver Cardápio{" "}
        </button>
      </div>
    </div>
  );
};
