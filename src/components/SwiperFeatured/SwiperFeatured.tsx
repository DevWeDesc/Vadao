"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { CardMenu } from "../CardMenu";
import { highlightsData } from "../../../data/data";
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
        setSlidesPerView(3.5);
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
        spaceBetween={slidesPerView > 1 ? 40 : 0}
      >
        {highlightsData.map((data, index) => (
          <SwiperSlide className="bg-redDefault cursor-pointer" key={index}>
            <div className={`${slidesPerView === 1 ? "mx-14" : "mx-0"} my-7`}>
              <CardMenu
                href={data.href}
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
