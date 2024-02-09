"use client";
import React, { useEffect, useState } from "react";
import cl from "classnames";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export interface PillarsCardProps {
  title: string;
  image: string;
  description: string;
  index?: number;
  activeIndex?: number;
  onSelectCard?: (activeIndex: number, activeIcon: boolean) => void;
}

export const PillarsCard: React.FC<PillarsCardProps> = (props) => {
  const { title, image, onSelectCard, activeIndex, index } = props;
  const [activeIcon, setActiveIcon] = useState(false);

  const handleToggleIcon = () => {
    setActiveIcon(!activeIcon);
    onSelectCard && onSelectCard(index as number, !activeIcon);
  };
  useEffect(() => {
    setActiveIcon(activeIndex === index);
  }, [activeIndex, index]);

  return (
    <div
      className="mx-auto h-full max-w-md  clip-cut "
      onClick={handleToggleIcon}
    >
      <div className="group aspect-h-1 aspect-w-1 relative ">
        <Image
          src={image}
          alt=""
          fill
          className={cl(
            "h-full w-full object-cover grayscale transition  duration-500 group-hover:scale-110 group-hover:grayscale-0  ",
            {
              "grayscale-0": activeIndex === index && activeIcon,
            },
          )}
        />
        <div className="absolute -top-3 flex h-6 w-full justify-end">
          <div className="hidden h-6 w-6 bg-red-400 clip-cut-tri-sm"></div>
        </div>
        <div
          className={cl(
            "flex h-full w-full items-end justify-center   bg-gradient-to-t    to-transparent  group-hover:from-green-600",
            {
              " from-green-600 ": activeIndex === index && activeIcon,
              "from-gray-600": activeIndex !== index || !activeIcon,
            },
          )}
        ></div>
        <div className="mt-[50%] flex h-1/2  w-full items-end justify-between p-6">
          <h1 className="font-ubuntu text-lg font-semibold text-white ">
            {title}
          </h1>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <ChevronDownIcon
              width={35}
              height={35}
              className={cl(" text-green-600", {
                "rotate-180 transition-transform duration-0":
                  activeIndex === index && activeIcon,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
