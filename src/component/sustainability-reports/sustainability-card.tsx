import Image from "next/image";
import React from "react";
import cn from "classnames";
import Link from "next/link";

export interface SustainabilityCardProps {
  image: string;
  title: string;
  description: string;
  labelbutton: string;
  link: string;
  type?: "square" | "rectangle";
}

export const SustainabilityCard: React.FC<SustainabilityCardProps> = ({
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
        " my-8 flex flex-col justify-between md:my-8 xl:flex-row-reverse xl:gap-8":
          type === "rectangle",
      })}
    >
      <div className="h-full w-full">
        <div
          className={cn("aspect-h-4 aspect-w-8 relative", {
            "aspect-h-3 aspect-w-8 h-[100%] md:aspect-h-4 md:aspect-w-8":
              type === "rectangle",
          })}
        >
          <Image src={image} alt="card" fill className="rounded-md" />
        </div>
      </div>

      <div className="h-full w-full">
        <div className="py-4">
          <h1 className="pb-2 font-ubuntu text-lg font-bold md:text-2xl">
            {title}
          </h1>
          <p className="line-clamp-3 break-words font-ubuntu">{description}</p>
        </div>

        <div className="flex items-end justify-start">
          <Link
            href={link}
            className="rounded-md border bg-green-600 px-6 py-2 font-ubuntu text-white md:px-10 md:py-4"
          >
            {labelbutton}
          </Link>
        </div>
      </div>
    </div>
  );
};
