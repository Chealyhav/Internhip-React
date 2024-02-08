"use client";
import React, { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PillarsCard, PillarsCardProps } from "./pillars-card";

export const PillarsSlider: React.FC<{ items: PillarsCardProps[] }> = ({
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="">
      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass: "!w-8 !h-2 !bg-green-600 !opacity-100",
          bulletClass: "swiper-pagination-bullet !rounded-sm",
        }}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        slidesPerView={1}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
      >
        {items.map((x, i) => (
          <SwiperSlide key={i}>
            <div className="mb-20 h-full w-full ">
              <PillarsCard
                {...x}
                index={i}
                activeIndex={activeIndex}
                onSelectCard={(index) => setActiveIndex(index)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="py-5">
        <p className="text-center font-ubuntu text-sm font-light md:text-lg ">
          {items[activeIndex].description}
        </p>
      </div>
    </div>
  );
};
