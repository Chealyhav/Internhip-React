import cn from "classnames";
import { CardItem, CardProps } from "./card-item";

type Item = CardProps & { size?: number };

interface ResizableCardProps {
  title: string;
  subtitle: string;
  items: Item[];
}

const ResizableCardList: React.FC<ResizableCardProps> = (props) => {
  const { title, subtitle, items } = props;

  return (
    <div className="my-16 flex flex-col items-center">
      <div className="p-2">
        <h2 className="text-center text-green-600 font-bold text-xl md:text-2xl mb-6">
        {title}
        </h2>
        <h1 className="text-center text-black font-bold text-3xl md:text-4xl mb-6">
          {subtitle}
        </h1>
      </div>
      <CardItemList items={items} />
    </div>
  );
};

const CardItemList: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <div className="">
        <div className="grid gap-5 grid-cols-12">
          {items.map((x, i) => (
            <div
              key={i}
              className={cn("col-span-12 md:col-span-6", {
                "xl:col-span-4": x.size === 33,
                "xl:col-span-8": x.size === 66,
              })}
            >
              <CardItem {...x} />
            </div>
          ))}
        </div>
    </div>
  );
};

export default ResizableCardList;