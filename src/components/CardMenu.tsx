import React from "react";
import { ICardMenu } from "../../types/types";
import Image from "next/image";

export const CardMenu = ({ image, title, content, price }: ICardMenu) => {
  return (
    <div className="flex gap-4 py-7 px-3 shadow-lg shadow-shadowCard rounded-lg">
      <Image alt="" src={image} />
      <div className="text-zincCard">
        <p className="font-bold text-sm">{title}</p>
        <p className="font-medium text-xs opacity-80">{content}</p>
        <p className="font-bold text-sm">{price}</p>
      </div>
    </div>
  );
};
