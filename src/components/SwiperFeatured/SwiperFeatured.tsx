"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { CardMenu } from "../CardMenu";
import { MenuData } from "../../../data/data";
import { useState, useEffect } from "react";

export default function SwiperFeatured() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    if (window) {
      if (window.innerWidth <= 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    }
  }, []);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiperFeatured"
        slidesPerView={slidesPerView}
        spaceBetween={slidesPerView > 1 ? 87 : 0}
      >
        {MenuData.map((data, index) => (
          <SwiperSlide key={index} className="bg-redDefault">
            <div className={`${slidesPerView === 1 ? "mx-14" : "mx-0"} my-7`}>
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
