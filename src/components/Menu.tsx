"use client";
import { CardMenu } from "./CardMenu";
import { MenuData } from "../../data/data";
import { useState, useEffect } from "react";
import { ICardMenu } from "../../types/types";

export const Menu = () => {
  const [MenuVisible, setMenuVisible] = useState<ICardMenu[]>([]);
  const [quantityInitialData, setQuantityInitialData] = useState(8);
  useEffect(() => {
    if (window) {
      window?.innerWidth <= 1620
        ? setQuantityInitialData(8)
        : setQuantityInitialData(10);
    }
  }, []);

  const [quantityData, setQuantityData] = useState(quantityInitialData);

  useEffect(() => {
    let MenuSlicer: ICardMenu[] = MenuData.slice(0, quantityData);
    setMenuVisible(MenuSlicer);
  }, [quantityData]);

  const handleQuantityData = () => {
    if (window) {
      window?.innerWidth <= 1280
        ? setQuantityData(quantityData + 2)
        : setQuantityData(quantityData + 4);
    }
    // if (window) {
    //   if (window.innerWidth <= 1280) {
    //     setQuantityData(quantityData + 2);
    //   } else {
    //     setQuantityData(quantityData + 4);
    //   }
    // }
  };

  return (
    <div className="py-24 px-5 flex flex-col items-center lg:px-16 2xl:px-32">
      <div className="text-center flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-base font-black 2xl:text-xl">Nosso Menu</p>
          <h2 className="text-4xl font-extraBlack 2xl:text-8xl">
            Nosso Delicioso Cardápio
          </h2>
        </div>
        <p className="font-bold text-lg 2xl:text-2xl">
          Uma Viagem de Sabores para Satisfazer Todos os Paladares
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4 lg:gap-5 2xl:grid-cols-5">
        {MenuVisible.map((data, index) => (
          <CardMenu
            isVertical={true}
            colorShadow="#E6D6C8"
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
