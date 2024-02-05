import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface FollowCardProps {
  title: string;
  description: string;
  media: {
    icon: string;
    url: string;
  }[];
}

export const FollowCard: React.FC<FollowCardProps> = (props) => {
  const { title, description, media } = props;

  return (
    <div className="relative grid grid-cols-1 bg-green-600 p-8 clip-cut-sm md:grid-cols-2  md:p-12 md:clip-cut-md ">
      <div className=" absolute -top-4  hidden  w-full md:-top-6">
        <div className=" flex justify-end  ">
          <div className="h-8 w-8 bg-red-300 clip-cut-tri-sm md:h-12 md:w-12 md:clip-cut-tri  "></div>
        </div>
      </div>
      <div className="py-2 ">
        <h1 className="font-ubuntu text-2xl font-semibold text-yellow-400 ">
          {title}
        </h1>
        <p className="break-words pt-2 font-ubuntu text-white">{description}</p>
      </div>
      <div className="py-2  md:mx-auto ">
        <div className="flex gap-6 py-4 md:gap-8">
          {media.map((item, i) => (
            <div
              key={i}
              className="relative w-10 rounded-full bg-white md:mx-auto md:w-12 "
            >
              <div className="aspect-h-2 aspect-w-3 m-2">
                <Link href={item.url}>
                  <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    alt="social media icon"
                    className="object-cover "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
