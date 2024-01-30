import Image from "next/image";

export interface AwardsCardProps {
  title: string;
  image: string;
}

export const AwardsCard: React.FC<AwardsCardProps> = ({ image, title }) => (
  <div className="grid grid-cols-1 place-items-center  border-b-2 border-gray-400 py-3  md:grid-cols-2  ">
    <div className="m-auto">
      <h2 className="text-center text-lg font-semibold md:text-left md:text-xl font-ubuntu ">
        {title}
      </h2>
    </div>
    <div className="w-full h-full">
      <div className="relative aspect-w-5 aspect-h-3">
        <Image
          src={image}
          alt="Picture"
          fill
          className="object-fit pt-2"
        />
      </div>
    </div>
  </div>
);
