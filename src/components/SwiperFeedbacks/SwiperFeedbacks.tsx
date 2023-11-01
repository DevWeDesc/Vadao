"use client";
import React, { ReactNode } from "react";
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
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {dataFeedbackProp.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-5 items-center text-center mt-5">
              <p className="text-sm">{data.content}</p>
              {/* <SwiperFeedback /> */}
              <div className="flex flex-col items-center gap-3">
                <div>
                  <Image alt="" src={data.image} />
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
