import cm from "classnames";
import { DirectionCard, DirectionCardProps } from "./direction-card";


export const Direction: React.FC<{ items: DirectionCardProps[] }> = ({
  items,
}) => {
  return (
    <div className="py-2 px-6">
      <div className="flex flex-wrap items-center justify-center">
        {items.map((x, i) => (
          <div
            key={i}
            className={cm(
              "before:w-[2px] before:h-1/4 before:absolute  before:bg-gray-400 flex justify-start items-center",
              {
                "xl:before:bg-transparent": i % 3 === 0,
                "max-xl:before:bg-transparent ": i % 2 === 0,
                "max-[1015px]:before:bg-transparent": i % 1 === 0,
              }
            )}
          >
            <DirectionCard {...x} />
          </div>
        ))}
      </div>
    </div>
  );
};
