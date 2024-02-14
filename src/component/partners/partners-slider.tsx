"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PartnersCard, PartnersCardProps } from "./partners-card";

export const PartnersSlider: React.FC<{ items: PartnersCardProps[] }> = ({
  items,
}) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass:
            "!w-6 md:!w-10 !h-2 !rounded-sm !bg-green-600 !opacity-100",
          bulletClass: "swiper-pagination-bullet ",
        }}
        autoplay={{
          delay: 4200,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((x, i) => (
          <SwiperSlide
            key={i}
            className="mr-6 md:max-w-[calc((100%-24px)/2)] lg:max-w-[calc((100%-48px)/3)]"
          >
            <div className=" mb-20 h-full w-full ">
              <PartnersCard {...x} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
