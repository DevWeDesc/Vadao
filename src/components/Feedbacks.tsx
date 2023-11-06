import Image from "next/image";
import React from "react";
import IconFeedback from "../../public/IconFeedbacks.png";
import PrimaryFeedback from "../../public/PrimaryComentsImage.png";
import SwiperFeedback from "./SwiperFeedbacks/SwiperFeedbacks";
import { FeedbackData } from "../../data/data";

export const Feedbacks = () => {
  return (
    <div className="pb-24 text-center w-full px-5 flex flex-col items-center lg:px-80">
      <div className="flex flex-col gap-5 items-center w-full">
        <div className="flex flex-col gap-2">
          <p className="font-black text-base 2xl:text-xl w-full">
            Feedback dos Nossos Clientes
          </p>
          <h2 className="font-extraBlack w-full text-4xl 2xl:text-8xl 2xl:px-60 px-20">
            Ouvindo Você, Aprimorando Sempre
          </h2>
        </div>
        <p className="font-bold text-base 2xl:text-xl">
          Feedback dos Nossos Clientes
        </p>
        <Image alt="" className="w-8 h-8" src={IconFeedback} />
      </div>
      <SwiperFeedback dataFeedbackProp={FeedbackData} />
    </div>
  );
};
