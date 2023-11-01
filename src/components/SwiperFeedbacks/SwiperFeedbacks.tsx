"use client";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper/modules";

type ISwiperFeedback = {
  children: ReactNode;
};

export default function SwiperFeedback({ children }: ISwiperFeedback) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
    </>
  );
}
