import cl from "classnames";
import Image from "next/image";
import Link from "next/link";

export interface SubscribeCardProps {
  content?: string;
  icon: string;
  url: string;
  textlink: string;
  title: string;
  types: boolean;
}

export const SubscribeCard: React.FC<SubscribeCardProps> = ({
  content,
  icon,
  url,
  textlink,
  title,
  types,
}) => (
  <div className="w-11/12 mx-auto">
    <div className="flex h-full py-8 w-11/12 mx-auto">
      <div className="w-full h-full max-w-16 relative ms-4 md:ms-0">
        <div className="relative aspect-w-3 aspect-h-3 m-2">
          <Image
            src={icon}
            alt="subscribe-image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full h-full px-2">
        <p
          className={cl("break-words text-gray-500 font-ubuntu font-semibold", {
            "pt-4 pb-2": types,
          })}
        >
          {title}
        </p>

        <h1
          className={cl(
            "md:text-2xl text-xl font-semibold text-gray-700 font-ubuntu break-words py-1",
            { hidden: types }
          )}
        >
          {content}
        </h1>

        <Link
          href={types ? `tel:${url}` : url}
          className={cl(
            "text-center  break-words font-semibold  text-green-600 font-ubuntu ",
            { "md:text-2xl text-xl ": types }
          )}
        >
          {textlink}
        </Link>
      </div>
    </div>
  </div>
);
