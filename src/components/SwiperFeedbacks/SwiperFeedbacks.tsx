"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { IFeedbackData } from "../../../types/types";
import Image from "next/image";

type ISwiperFeedback = {
  dataFeedbackProp: IFeedbackData[];
};

export default function SwiperFeedback({ dataFeedbackProp }: ISwiperFeedback) {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (window) {
      if (window.innerWidth >= 1620) {
        setSlidesPerView(2);
      }
    }
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        spaceBetween={slidesPerView === 1 ? 0 : 150}
        className="mySwiperFeed"
      >
        {dataFeedbackProp.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 items-center text-center mt-5 2xl:mt-10">
              <p className="text-sm 2xl:text-lg 2xl:font-medium 2xl:opacity-80">
                {data.content}
              </p>
              {/* <SwiperFeedback /> */}
              <div className="flex flex-col items-center gap-3 2xl:gap-6">
                <div className="2xl:h-24">
                  <Image
                    alt={`Imagem da Cliente ${data.name}`}
                    src={data.image}
                  />
                </div>
                <p className="font-bold text-xl">{data.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
