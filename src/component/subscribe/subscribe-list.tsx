import cl from "classnames";
import { SubscribeCard, SubscribeCardProps } from "./subscribe-card";

export const SubscribeList: React.FC<{
  items: SubscribeCardProps[];
  title: string;
  subtitle: string;
}> = ({ items, title, subtitle }) => {
  return (
    <>
      <div className="text-center py-5">
        <h2 className="md:text-xl text-md font-semibold font-ubuntu text-green-600">
          {title}
        </h2>
        <h1 className="md:text-3xl text-xl text-gray-700 font-semibold font-ubuntu">
          {subtitle}
        </h1>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 max-w-2xl xl:max-w-none mx-auto grid-cols-1">
        {items.map((x, i) => (
          <div
            key={i}
            className={cl(
              "before:w-0.5 before:h-2/4 before:bg-gray-400 flex items-center relative",
              {
                "xl:before:bg-transparent ": i % 4 === 0,
                "max-xl:before:bg-transparent ": i % 2 === 0,
                "max-sm:before:bg-transparent max-sm:after:bg-gray-400 max-sm:after:w-3/4 max-sm:after:h-0.5  max-sm:after:absolute max-sm:after:bottom-0 max-sm:after:left-1/2 max-sm:after:transform max-sm:after:-translate-x-1/2":
                  i % 1 === 0,
                "max-sm:after:bg-transparent ": i === items.length - 1,
              }
            )}
          >
            <SubscribeCard {...x} />
          </div>
        ))}
      </div>
    </>
  );
};
