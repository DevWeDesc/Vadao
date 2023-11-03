"use client";
import React from "react";
import { ICardMenu } from "../../types/types";
import Image from "next/image";
import { useState } from "react";

export const CardMenu = ({
  image,
  title,
  content,
  price,
  isVertical,
  colorShadow,
}: ICardMenu) => {
  const [opacityImage, setOpacityImage] = useState(70);

  return (
    <div
      onMouseOver={() => setOpacityImage(100)}
      onMouseOut={() => setOpacityImage(70)}
      className={`grid gap-4 py-7 px-3 shadow-md rounded-lg ${
        colorShadow === "#E6D6C8"
          ? "shadow-shadowCard"
          : "shadow-shadowRed px-0 pt-0 "
      } ${
        isVertical
          ? "grid-cols-1 grid-rows-1 place-items-baseline gap-8 pb-8 bg-transparent"
          : "grid-cols-2"
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          colorShadow === "#E6D6C8"
            ? ""
            : `bg-black/5 opacity-${opacityImage} transition-all bg-fixed`
        } ${isVertical && "px-0"}`}
      >
        <Image alt="" className="w-full rounded-lg" src={image} />
      </div>
      <div
        className={`${
          colorShadow === "#E6D6C8" ? "text-zincCard" : "text-white px-3 min-h "
        } ${
          isVertical
            ? "flex flex-col text-white text-left justify-between gap-2 lg:min-h-[160px]"
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
