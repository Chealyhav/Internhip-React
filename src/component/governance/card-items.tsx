import Image from "next/image";


export interface GovernnacelistProps{
   image:string;
   title:string;
}

export const Governnacelist: React.FC<GovernnacelistProps> = (props) => {
  const { image, title } = props;

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 border-2 border-green-600 rounded-xl shadow-lg bg-clip-border aspect-w-6 aspect-h-2 px-2 ">
      <div className=" relative -mt-6 border rounded-lg shadow-lg aspect-w-3 aspect-h-2 ">
  
        <Image
          src={image}
          alt="card-image"
          width={200}
          height={300}
          className="border rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-center items-center mt-20 break-words ">
      <p className=" text-center mt-5 md:py-4 px-3 text-md md:text-lg font-bold text-green-600">{title}</p>
      </div>


    </div>

  );
}; 




























