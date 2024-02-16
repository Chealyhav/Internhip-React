import cl from "classnames";
import Image from "next/image";

interface ChannelItemProps {
  src: string;
  title: string;
  content: string;
}

export const Channel: React.FC<{ items: ChannelItemProps[] }> = ({
  items,
}) => {
  return (
    <div
      className={cl(
        "mx-auto flex flex-col justify-center sm:flex-row sm:flex-wrap",
        "max-xl:[&>*:nth-child(2n)]:after:bg-transparent xl:[&>*:nth-child(3n)]:after:bg-transparent",
      )}
    >
      {(items || []).map((x, i) => (
        <div
          key={i}
          className="relative flex items-center justify-center after:h-2/4 after:w-0.5 after:bg-gray-500 after:last:bg-transparent sm:basis-1/2 md:justify-end lg:basis-2/5 xl:basis-1/3 "
        >
          <div className="md:p-4 p-2">
            <div className="relative">
              <Image
                src={x.src}
                alt={x.title || x.src}
                fill={false}
                width={64}
                height={64}
                className="mx-auto size-20 rounded-md sm:size-24"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="font-ubuntu text-xl  font-semibold text-green-600 md:text-2xl ">
                {x.title}
              </h3>
              <p className="font-ubuntu text-base">{x.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
