"use client";
import React from "react";
import { CardMenu } from "./CardMenu";
import { MenuData } from "../../data/data";
import { useState, useEffect } from "react";
import { ICardMenu } from "../../types/types";

export const Menu = () => {
  const [MenuVisible, setMenuVisible] = useState<ICardMenu[]>([]);
  const [quantityData, setQuantityData] = useState(8);

  useEffect(() => {
    let MenuSlicer: ICardMenu[] = MenuData.slice(0, quantityData);
    setMenuVisible(MenuSlicer);
  }, [quantityData]);

  const handleQuantityData = () => {
    setQuantityData(quantityData + 2);
  };

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
      <div className="mt-16 flex flex-col gap-8 mb-8">
        {MenuVisible.map((data, index) => (
          <CardMenu
            key={index}
            image={data.image}
            title={data.title}
            content={data.content}
            price={data.price}
          />
        ))}
      </div>
      {quantityData === MenuVisible.length && (
        <button
          className="w-auto px-8 py-3 bg-redDefault rounded-full text-white"
          onClick={handleQuantityData}
        >
          Ver Mais{" "}
        </button>
      )}
    </div>
  );
};
