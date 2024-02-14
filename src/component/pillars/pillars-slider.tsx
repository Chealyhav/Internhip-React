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
  const [activeCard, setActiveCard] = useState<{
    activeIndex: number | null;
    activeDes: boolean;
  }>({ activeIndex: 0, activeDes: true });

  const handleSelectCard = (index: number) => {
    const { activeIndex, activeDes } = activeCard;
    if (activeIndex === index)
      setActiveCard((card) => ({ ...card, activeDes: !activeDes }));
    else {
      setActiveCard((card) => ({ ...card, activeDes: false }));
      setTimeout(
        () =>
          setActiveCard({
            activeIndex: index,
            activeDes: true,
          }),
        300,
      );
    }
  };
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
            className="mr-6 sm:max-w-[calc((100%-24px)/2)] md:max-w-[calc((100%-24px)/2)] lg:max-w-[calc((100%-48px)/3)]   xl:max-w-[calc((100%-96px)/4)]"
          >
            <div className="mb-20 h-full w-full">
              <div>
                <PillarsCard
                  {...x}
                  activeIcon={
                    activeCard.activeIndex === i && activeCard.activeDes
                  }
                  onSelectCard={() => handleSelectCard(i)}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeCard.activeIndex !== null && (
        <AnimateHeight
          height={activeCard.activeDes ? "auto" : 0}
          contentClassName="auto-content"
          duration={300}
        >
          <p className="text-center font-ubuntu font-light md:text-lg">
            {items[activeCard.activeIndex].description}
          </p>
        </AnimateHeight>
      )}
    </>
  );
};
