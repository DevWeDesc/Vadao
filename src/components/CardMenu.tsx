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
  href,
}: ICardMenu) => {
  const [opacityImage, setOpacityImage] = useState(70);

  return (
    <div
      onMouseOver={() => setOpacityImage(100)}
      onMouseOut={() => setOpacityImage(70)}
      className={`flex flex-col lg:grid gap-4 py-7 shadow-md rounded-lg ${
        colorShadow === "#E6D6C8"
          ? "shadow-shadowCard px-0 pt-0"
          : "shadow-shadowRed px-0 pt-0"
      } ${
        isVertical
          ? "grid-cols-1 grid-rows-1 place-items-baseline gap-8 pb-8 bg-transparent"
          : "grid-cols-2"
      }`}
    >
      <div
        className={`flex items-center w-full justify-center bg-black/5 opacity-${opacityImage} transition-all bg-fixed rounded-t-lg ${
          colorShadow === "#E6D6C8" &&
          "max-h-[104.58px] sm:max-h-[13.8rem] lg:max-h-[170px] xl:max-h-[185px]"
        }`}
        // max-h-[6.5rem]
      >
        <Image
          alt=""
          className={`w-full object-contain rounded-t-lg ${
            colorShadow === "#E6D6C8" &&
            "max-h-[104.58px] sm:max-h-[13.8rem] lg:max-h-[170px] xl:max-h-[195px] 2xl:max-h-[175px]"
          }`}
          // max-h-[6.5rem]
          src={image}
        />
      </div>
      <div
        className={`px-6 flex h-full flex-col text-left justify-between gap-2  ${
          colorShadow === "#E6D6C8" ? "text-zincCard" : "text-white"
        } ${isVertical ? "text-white" : "text-zincCard"}`}
      >
        <div className="flex flex-col gap-2 min-h-[160px]">
          <p
            className={`font-bold ${
              isVertical ? "text-base lg:text-lg" : "text-sm"
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
        </div>
        <p
          className={` font-bold ${
            isVertical ? "text-base lg:text-lg" : "text-sm"
          }`}
        >
          {price}
        </p>
      </div>
    </div>
  );
};
