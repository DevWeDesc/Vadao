"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSwiper from "../../../public/ImageSwiper.png";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function SwiperAbout() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-12"
      >
        <SwiperSlide>
          <Image alt="" src={ImageSwiper}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={ImageSwiper}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="" src={ImageSwiper}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}