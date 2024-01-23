import Image from "next/image";
import React from "react";

export interface DirectionListProps {
  icon: string;
  title: string;
  description: string;
}

export const DirectionList: React.FC<DirectionListProps> = (props) => {
  const { icon, title, description } = props;
  return (
    <div>

        <div className="flex flex-wrap items-center justify-center  ">
          <div className="h-full w-full p-5">
            <div className="px-10 py-8 flex justify-center items-center">
              <Image src={icon} width={100} height={100} alt="Icon" className="object-cover" />
            </div>
            <div className="px-1">
              <h1 className="text-center text-xl md:text-2xl text-green-600 font-bold ">
                {title}
              </h1>
              <div className="px-5 w-80">
                <p className="pt-2 text-md md:text-xl text-center text-gray-800">{description}</p>
              </div>
            </div>
          </div>
        </div>
  
    </div>
  );
};
