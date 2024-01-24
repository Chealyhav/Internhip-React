import Image from "next/image";

export interface AwardslistProps {
  title: string;
  image: string;
}

export const Awardslist: React.FC<AwardslistProps> = (props) => {
  const { title, image } = props;

  return (
    <>
      <div className="md:max-w-screen-lg md:max-auto ">
        <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 border-2 border-gray-300 border-x-0 border-t-0 py-2">
          <div className="flex justify-center items-center px-3">
            <div className="md:text-start text-center w-2/3 md:w-11/12 break-words">
              <p className="text-md xl:text-xl md:px-5  md:text-start text-center font-bold py-4   ">
                {title}
              </p>
            </div>
          </div>
          <div className="px-20 md:px-4">
            <div className="max-w-sm ">
              <div className="relative md:aspect-w-1 md:aspect-h-1 ">
                <Image
                  src={image}
                  alt="Picture"
                  fill={false}
                  width={320}
                  height={320}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
