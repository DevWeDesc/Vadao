"use client";
import React from "react";
import { CardMenu } from "./CardMenu";
import { MenuData } from "../../data/data";

export const Menu = () => {
  return (
    <div className="py-24 px-5 flex flex-col items-center">
      <div className="text-center flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-base font-black">Nosso Menu</p>
          <h2 className="text-4xl font-extraBlack">Nosso Delicioso Cardápio</h2>
        </div>
        <p className="font-bold text-lg">
          Uma Viagem de Sabores para Satisfazer Todos os Paladares
        </p>
      </div>
      <div className="mt-16 flex flex-col gap-8">
        {MenuData.map((data, index) => (
          <CardMenu
            key={index}
            image={data.image}
            title={data.title}
            content={data.content}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};
