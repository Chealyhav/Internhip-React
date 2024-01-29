import Image from "next/image";

export interface CardAwardsProps {
  title: string;
  image: string;
}

export const CardAwards: React.FC<CardAwardsProps> = ({ image, title }) => (
  <div className="grid grid-cols-1 place-items-center  border-b-2 border-gray-800 py-3  md:grid-cols-2  ">
    <div className="m-auto">
      <h2 className="text-center text-lg font-semibold md:text-left md:text-xl font-ubuntu ">
        {title}
      </h2>
    </div>
    <div className="md:min-w-80 min-w-64">
      <div className="relative aspect-w-1 aspect-h-1">
        <Image
          src={image}
          alt="Picture"
          fill={false}
          width={320}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  </div>
);
