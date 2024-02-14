"use client";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimateHeight from "react-animate-height";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PillarsCard, PillarsCardProps } from "./pillars-card";

export const PillarsSlider: React.FC<{ items: PillarsCardProps[] }> = ({
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeDes, setActiveDes] = useState(true);

  const handleSelectCard = (index: number) => {
    if (activeIndex === index) {
      setActiveDes(!activeDes);
    } else {
      setActiveDes(false);
      setTimeout(() => {
        setActiveIndex(index);
        setActiveDes(true);
      }, 300);
    }
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
          delay: 5000,
          pauseOnMouseEnter: true,
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
            className="max-w-[calc(100%-20px)/2] lg:max-w-[calc(100%-20px)/3] xl:max-w-[calc((100%-20px)/4)]"
          >
            <div className="mb-20 h-full w-full">
              <div>
                <PillarsCard
                  {...x}
                  activeIcon={activeIndex === i && activeDes}
                  onSelectCard={() => handleSelectCard(i)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeIndex !== null && (
        <AnimateHeight
          height={activeDes ? "auto" : 0}
          contentClassName="auto-content"
          duration={300}
        >
          <p className="text-center font-ubuntu font-light md:text-lg">
            {items[activeIndex].description}
          </p>
        </AnimateHeight>
      )}
    </>
  );
};
