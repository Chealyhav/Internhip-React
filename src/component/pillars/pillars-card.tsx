import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import cl from "classnames";

export interface PillarsCardProps {
  title: string;
  image: string;
  description: string;
  activeIcon?: boolean;
  onSelectCard?: () => void;
}

export const PillarsCard: React.FC<PillarsCardProps> = (props) => {
  const { title, image, activeIcon, onSelectCard } = props;

  return (
    <div
      role="button"
      className="mx-auto h-full clip-cut"
      onClick={onSelectCard}
    >
      <div className="group aspect-h-1 aspect-w-1 relative">
        <Image
          src={image}
          alt=""
          fill
          className={cl(
            "h-full w-full object-cover grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0",
            {
              "grayscale-0": activeIcon,
            },
          )}
        />
        <div className="absolute -top-3 flex h-6 w-full justify-end">
          <div className="hidden h-6 w-6 bg-red-400 clip-cut-tri-sm"></div>
        </div>
        <div
          className={cl(
            "h-full w-full bg-gradient-to-t from-gray-600 to-transparent",
            { "from-green-600": activeIcon },
          )}
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-green-600 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>
        </div>

        <div className="mt-[50%] flex h-1/2 w-full items-end justify-between p-6">
          <h1 className="font-ubuntu text-lg font-semibold text-white">
            {title}
          </h1>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <ChevronDownIcon
              width={35}
              height={35}
              className={cl("text-green-600", {
                "rotate-180 transition-transform duration-0": activeIcon,
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
