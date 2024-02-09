"use client";

import React, { Fragment, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PillarsCard, PillarsCardProps } from "./pillars-card";
import { Transition } from "@headlessui/react";

export const PillarsSlider: React.FC<{ items: PillarsCardProps[] }> = ({
  items,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [activeDes, setActiveDes] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSelectedCard = (index: number, icon: boolean) => {
    setActiveIndex(index);
    setActiveDes(icon);
  };

  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass:
            "!w-6 md:!w-10 !h-2 !rounded-sm !bg-green-600 !opacity-100",
          bulletClass: "swiper-pagination-bullet ",
        }}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((x, i) => (
          <SwiperSlide
            key={i}
            className="max-w-[calc(100%-10px)/2] xl:max-w-[calc((100%-10px)/4)]"
          >
            <div className="mb-20 h-full w-full">
              <PillarsCard
                {...x}
                index={i}
                activeIndex={activeIndex}
                onSelectCard={handleSelectedCard}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => {
          setIsShowing(false);
          setTimeout(() => setIsShowing(true), 500);
        }}
      >
        Toggle
      </button>
      <div className="py-5 ">
        {activeDes ? (
          <Transition
            show={isShowing}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0 bg-red-300 ease-in-out"
            enterTo="opacity-100"
            leave="transition-opacity duration-150 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="text-center font-ubuntu text-sm font-light md:text-lg">
              {items[activeIndex].description}
            </p>
          </Transition>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
