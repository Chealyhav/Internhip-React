import Image from "next/image";

export interface AwardslistProps {
  title: string;
  image: string;
}

export const Awardslist: React.FC<AwardslistProps> = (props) => {
  const { title, image } = props;

  return (
    <>
      <div className="grid grid-cols-1 place-items-center  border-b-2 border-gray-800 py-3  md:grid-cols-2 ">
        <div className="m-auto">
          <h2 className="text-center text-lg font-semibold md:text-left md:text-xl">
            {title}
          </h2>
        </div>
        <div className="md:min-w-80 min-w-64 ">
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src={image}
              alt="Picture"
              fill={false}
              width={320}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};
