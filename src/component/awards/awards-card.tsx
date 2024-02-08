import Image from "next/image";

export interface AwardsCardProps {
  title: string;
  image: string;
}

export const AwardsCard: React.FC<AwardsCardProps> = ({ image, title }) => (
  <div className=" grid grid-cols-1 border-b-2 border-gray-400 py-8 md:grid-cols-2 place-items-center gap-y-4">
    <div className="">
      <h2 className="text-center font-ubuntu text-lg font-semibold md:text-left md:text-xl">
        {title}
      </h2>
    </div>
    <div className="h-full w-full max-w-sm ">
      <div className="aspect-h-4 aspect-w-5 relative  ">
        <Image src={image} alt="awards picture " fill className="object-contain" />
      </div>
    </div>
  </div>
);
