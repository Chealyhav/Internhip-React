import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

export interface BusinessCardProps {
  image: string;
  title: string;
  price: string;
  duration: string;
  labelButton: string;
  linkButton: string;
  recommend: {
    enable: boolean;
    titlerecommed: string;
  };
  listfeature: string;
  features: string[];
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  image,
  title,
  price,
  duration,
  labelButton,
  linkButton,
  recommend,
  features,
  listfeature,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full md:px-4 px-4 pt-4 pb-6 border-2 rounded-lg",
        {
          "border-green-600": recommend.enable,
        }
      )}
    >
      <div className="relative aspect-w-6 aspect-h-5">
        <Image
          src={image}
          alt="card-business"
          className="rounded-md border"
          fill
        />
      </div>
      <div className="pt-2 border-dashed border-b-2 border-gray-700">
        <div
          className={cn("py-2", { "flex justify-between": recommend.enable })}
        >
          <p className="text-md font-semibold py-1 text-gray-500 font-ubuntu">
            {title}
          </p>
          {recommend.enable && (
            <div className="bg-green-100 py-1 px-4 h-fit text-green-600 rounded-2xl font-semibold text-md font-ubuntu">
              {recommend.titlerecommed}
            </div>
          )}
        </div>
        <span className="md:text-4xl text-2xl font-semibold font-ubuntu text-gray-700">
          {price}
        </span>
        <p className="text-gray-500 font-ubuntu">{duration}</p>
        <div className="py-6">
          <Link href={linkButton}>
            <button
              className={cn(
                "py-2 w-full text-center border-2 border-gray-400 rounded-md font-semibold text-gray-700 font-ubuntu",
                {
                  "border-green-600 bg-green-600 text-white": recommend.enable,
                }
              )}
            >
              {labelButton}
            </button>
          </Link>
        </div>
      </div>
      <p className="text-gray-600 pt-6 pb-4 font-ubuntu">{listfeature}</p>
      {features.map((feature, index) => (
        <div key={index} className="flex mb-2">
          <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
          <p className="text-gray-700 pl-2 font-ubuntu">{feature}</p>
        </div>
      ))}
    </div>
  );
};
