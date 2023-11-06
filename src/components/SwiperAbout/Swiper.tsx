"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { DataRestaurant } from "../../../data/data";

export default function SwiperAbout() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-12 lg:mt-0"
      >
        {DataRestaurant.map((data, index) => (
          <SwiperSlide key={index}>
            <Image alt="" src={data.photo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
