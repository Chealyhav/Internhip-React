import Image from "next/image";

export interface PartnersCardProps {
  image: string;
  title: string;
}

export const PartnersCard: React.FC<PartnersCardProps> = ({ image, title }) => {
  return (
    <div className="flex  flex-col place-items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <div className="relative w-full basis-1/2 xl:basis-1/3">
        <div className="aspect-h-1 aspect-w-3 relative sm:aspect-h-1 sm:aspect-w-1">
          <Image
            src={image}
            alt="partners-image"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <h3 className=" break-words text-center font-ubuntu text-base font-semibold text-gray-600 sm:text-start xl:text-lg">
        {title}
      </h3>
    </div>
  );
};
