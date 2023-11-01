import Image from "next/image";
import React from "react";
import IconFeedback from "../../public/IconFeedbacks.png";
import PrimaryFeedback from "../../public/PrimaryComentsImage.png";
import SwiperFeedback from "./SwiperFeedbacks/SwiperFeedbacks";

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
      <SwiperFeedback>
        <div className="flex flex-col gap-5 items-center text-center mt-5">
          <p className="text-sm">
            Self-service com bastante opção, massas, comida japonesa,
            etc...Poderia melhorar a estrutura do local e banheiros.Poderia ter
            mais opções de sobremesas.O caldo também é bom.Resumindo é um Ótimo
            lugar pra almoçar com a família e amigos.
          </p>
          {/* <SwiperFeedback /> */}
          <div className="flex flex-col items-center gap-3">
            <div>
              <Image alt="" src={PrimaryFeedback} />
            </div>
            <p className="font-bold text-xl">cintialelis rubio</p>
          </div>
        </div>
      </SwiperFeedback>
    </div>
  );
};
