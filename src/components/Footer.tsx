import React from "react";
import ImageLogo from "../../public/logoMobile.png";
import IconIfood from "../../public/IconIfood.png";
import Image from "next/image";
import { FiInstagram, FiFacebook, FiPhone, FiMapPin } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="bg-redDefault py-20 flex flex-col items-center gap-10 text-white lg:flex-row lg:justify-between lg:px-40">
      <Image alt="" src={ImageLogo} />
      <div className="flex flex-col items-center gap-2">
        <p className="font-black">Redes Sociais</p>
        <div className="flex gap-3 items-center">
          <FiInstagram className="w-8 h-8" />
          <FiFacebook className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-black">Faça seu pedido em Casa!</p>
        <div className="flex gap-3 items-center">
          <Image alt="" src={IconIfood} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="font-black">Informações de Contato</p>
        <div className="flex flex-col gap-4 items-center font-bold">
          <p className="flex items-center text-center gap-2">
            <FiPhone className="w-6 h-6" /> <span>(11) 4513-6369</span>
          </p>
          <p className="flex items-center ">
            <FiMapPin className="w-6 h-6" />
            <span className="text-center max-w-[300px]">
              Av. Portugal, 119 - Jardim Pilar, Mauá - SP, 09370-000
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
