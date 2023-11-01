import Image from "next/image";
import React from "react";
import IconFeedback from "../../public/IconFeedbacks.png";
import PrimaryFeedback from "../../public/PrimaryComentsImage.png";
import SwiperFeedback from "./SwiperFeedbacks/SwiperFeedbacks";
import { FeedbackData } from "../../data/data";

export const Feedbacks = () => {
  return (
    <div className="pb-24 text-center px-5 flex flex-col items-center">
      <div className="flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-2">
          <p className="font-black text-base">Feedback dos Nossos Clientes</p>
          <h2 className="font-extraBlack text-5xl">
            Ouvindo Você, Aprimorando Sempre
          </h2>
        </div>
        <p className="font-bold text-base">Feedback dos Nossos Clientes</p>
        <Image alt="" className="w-8 h-8" src={IconFeedback} />
      </div>
      <SwiperFeedback dataFeedbackProp={FeedbackData} />
    </div>
  );
};
