"use client";
import React from "react";
import { ICardMenu } from "../../types/types";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export const CardMenu = ({
  id,
  image,
  title,
  content,
  price,
  isVertical,
  colorShadow,
  href,
}: ICardMenu) => {
  const [opacityImage, setOpacityImage] = useState(70);
  const idString = id.toString();

  const hrefExists = () => {
    href
      ? null
      : toast.error("O Prato não está Disponível!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };

  return (
    <a
      aria-label={`Link para comprar ${title}`}
      href={href ? href : `#${idString}`}
      id={idString}
      target={href ? "_blank" : "_self"}
      onClick={hrefExists}
      onMouseOver={() => setOpacityImage(100)}
      onMouseOut={() => setOpacityImage(70)}
      className={`flex flex-col lg:grid gap-4 py-7 shadow-md rounded-lg cursor-pointer ${
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
      >
        <Image
          alt={`Imagem ${title}`}
          className={`w-full object-contain rounded-t-lg ${
            colorShadow === "#E6D6C8" &&
            "max-h-[104.58px] sm:max-h-[13.8rem] lg:max-h-[170px] xl:max-h-[195px] 2xl:max-h-[175px]"
          }`}
          src={image}
        />
      </div>
      <div
        className={`px-6 flex h-full flex-col w-full text-left justify-between gap-2  ${
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
            {content.length >= 41
              ? content.substring(0, 41).concat("...")
              : content.substring(0, 41)}
          </p>
        </div>
        <p
          className={`py-2 w-full ${
            colorShadow != "#E6D6C8" && "bg-white hover:bg-zinc-200"
          } ${
            href
              ? `font-extrabold bg-redDefault ${
                  colorShadow != "#E6D6C8" ? "text-redDefault" : "text-white"
                } text-center rounded-full hover:bg-shadowRed transition-all`
              : "font-normal"
          } ${isVertical ? "text-sm" : "text-xs"}`}
        >
          {!href ? "Prato Indisponível!" : "Comprar"}
        </p>
        <p
          className={` font-bold ${
            isVertical ? "text-base lg:text-lg" : "text-sm"
          }`}
        >
          {price}
        </p>
      </div>
    </a>
  );
};
