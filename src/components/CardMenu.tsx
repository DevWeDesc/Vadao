import React from "react";
import { ICardMenu } from "../../types/types";
import Image from "next/image";

export const CardMenu = ({
  image,
  title,
  content,
  price,
  isVertical,
}: ICardMenu) => {
  return (
    <div
      className={`grid gap-4 py-7 px-3 shadow-lg rounded-lg ${
        isVertical
          ? "grid-cols-1 gap-5 bg-transparent shadow-shadowRed"
          : "grid-cols-2 shadow-shadowCard"
      }`}
    >
      <div
        className={`flex items-center justify-center ${isVertical && "px-8"}`}
      >
        <Image alt="" className="w-full" src={image} />
      </div>
      <div
        className={`${
          isVertical
            ? "flex flex-col text-white text-left gap-2"
            : "text-zincCard"
        }`}
      >
        <p
          className={`${
            isVertical ? "text-xl font-bold" : "font-bold text-sm"
          }`}
        >
          {title}
        </p>
        <p
          className={`font-medium opacity-80 ${
            isVertical ? "text-sm" : "text-xs"
          }`}
        >
          {content}
        </p>
        <p
          className={`${
            isVertical ? "text-xl font-bold" : "font-bold text-sm"
          }`}
        >
          {price}
        </p>
      </div>
    </div>
  );
};
