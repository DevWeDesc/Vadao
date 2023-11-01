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
import { CardMenu } from "../CardMenu";
import { MenuData } from "../../../data/data";

export default function SwiperFeatured() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiperFeatured"
      >
        {MenuData.map((data, index) => (
          <SwiperSlide key={index} className="bg-redDefault">
            <div className="mx-14 my-7">
              <CardMenu
                isVertical={true}
                content={data.content}
                image={data.image}
                price={data.price}
                title={data.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
