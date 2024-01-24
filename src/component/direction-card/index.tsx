import cm from "classnames";
import { DirectionList, DirectionListProps } from "./card-list";



interface DirectionCardProps {
  items: DirectionListProps[];
}


export const DirectionCard: React.FC<DirectionCardProps> = ({ items }) => {
  return (
    <div className="py-2 px-6">
      <div className="flex flex-wrap items-center justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={cm(
              "before:w-[2px] before:h-1/4 before:absolute before:bg-gray-400 flex justify-start items-center ",
              {
                "xl:before:bg-transparent": index % 3 === 0,
                "max-xl:before:bg-transparent": index % 2 === 0,
                "max-[1015px]:before:bg-transparent": index % 1 === 0,
              }
            )}
          >
            <DirectionList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
