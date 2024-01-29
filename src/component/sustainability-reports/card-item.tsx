import Image from "next/image";
import React from "react";
import cn from "classnames";
import Link from "next/link";

export interface CardSustainabilityProps {
  image: string;
  title: string;
  description: string;
  labelbutton: string;
  link: string;
  type?: "square" | "rectangle";
}

export const CardSustainability: React.FC<CardSustainabilityProps> = ({
  image,
  title,
  description,
  labelbutton,
  link,
  type = "square",
}) => {
  return (
    <div
      className={cn(" ", {
        " flex xl:flex-row-reverse justify-between xl:gap-8 md:my-8 my-8 flex-col":
          type === "rectangle",
      })}
    >
      <div
        className={cn(" w-full h-full", { "w-11/12": type === "rectangle" })}
      >
        <div
          className={cn("relative aspect-w-8 aspect-h-4", {
            "md:aspect-w-8 md:aspect-h-4 aspect-w-8 aspect-h-3 h-[100%]":
              type === "rectangle",
          })}
        >
          <Image src={image} alt="card" fill className="rounded-md" />
        </div>
      </div>

      <div
        className={cn("w-full h-full", { "w-11/12 ": type === "rectangle" })}
      >
        <div className="py-4">
          <h1 className="md:text-2xl text-lg pb-2 font-bold font-ubuntu">
            {title}
          </h1>
          <p className="line-clamp-3 break-words font-ubuntu">{description}</p>
        </div>

        <div className="flex justify-start items-end">
          <Link
            href={link}
            className="md:py-4 md:px-10 px-6 py-2 bg-green-600 text-white border rounded-md font-ubuntu"
          >
            {labelbutton}
          </Link>
        </div>
      </div>
    </div>
  );
};
