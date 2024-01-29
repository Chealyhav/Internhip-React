import Image from "next/image";
import React from "react";

export interface CardDirectionProps {
  icon: string;
  title: string;
  description: string;
}

export const CardDirection: React.FC<CardDirectionProps> = (props) => {
  const { icon, title, description } = props;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center  ">
        <div className="h-full w-full p-4">
          <div className="px-10 py-8 flex justify-center items-center">
            <Image
              src={icon}
              width={100}
              height={100}
              alt="Icon"
              className="object-contain"
            />
          </div>
          <div className="px-1">
            <h1 className="text-center text-xl md:text-2xl text-green-600 font-bold font-ubuntu ">
              {title}
            </h1>
            <div className="px-5 w-80">
              <p className="pt-2 text-md md:text-xl text-center text-gray-800 font-ubuntu">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
