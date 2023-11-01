"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Navigation } from "swiper/modules";
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
