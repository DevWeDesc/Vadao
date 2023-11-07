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
          <a
            title="Link para Perfil do Instagram"
            aria-label="Link para Perfil do Instagram"
            target="_blank"
            href="https://www.instagram.com/restaurantedovadao?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <FiInstagram className="w-8 h-8" />
          </a>
          <a
            title="Link para Perfil do Facebook"
            aria-label="Link para Perfil do Facebook"
            target="_blank"
            href="https://www.facebook.com/vadaorestaurante/?locale=pt_BR"
          >
            <FiFacebook className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-black">Faça seu pedido em Casa!</p>
        <div className="flex gap-3 items-center">
          <a
            title="Link para Loja no Ifood"
            aria-label="Link para Loja no Ifood"
            target="_blank"
            href="https://www.ifood.com.br/delivery/maua-sp/restaurante-do-vadao-jardim-pilar/5e1b84aa-3312-4a6f-be0c-1c758dab8158"
          >
            <Image alt="" src={IconIfood} />
          </a>
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
