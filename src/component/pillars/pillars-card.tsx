"use client";

import React, { useState } from "react";
import cl from "classnames";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export interface PillarsCardProps {
  title: string;
  image: string;
  description: string;
  index?: number;
  activeIndex?: number;
  onSelectCard?: (activeIndex: number) => void;
}

export const PillarsCard: React.FC<PillarsCardProps> = (props) => {
  const { title, image, onSelectCard, activeIndex, index } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleIcon = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && onSelectCard && index) {
      onSelectCard(index);
    } else if (isExpanded && onSelectCard) {
      onSelectCard(0);
    }
  };

  return (
    <div className="mx-auto h-full max-w-md overflow-hidden bg-no-repeat ">
      <div className="group aspect-h-1 aspect-w-1 relative clip-cut">
        <Image
          src={image}
          alt=""
          fill
          className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-110"
        />
        <div className="absolute -top-3 flex h-6 w-full justify-end">
          <div className="hidden h-6 w-6 bg-red-400 clip-cut-tri-sm"></div>
        </div>
        <div className="flex h-full w-full items-end justify-center ">
          <div className="h-2/3 w-full bg-gradient-to-t  from-green-600 to-transparent transition-transform  duration-500 group-hover:h-5/6 group-hover:scale-110"></div>
        </div>
        <div className="mt-[50%] flex h-1/2  w-full items-end justify-between p-6  ">
          <h1 className="font-ubuntu text-lg font-semibold text-white ">
            {title}
          </h1>
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
            onClick={handleToggleIcon}
          >
            <ChevronDownIcon
              width={35}
              height={35}
              className={cl("text-green-600", {
                "rotate-180 transition-transform duration-0":
                  isExpanded && activeIndex === index,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
