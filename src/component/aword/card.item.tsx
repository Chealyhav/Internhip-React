import Image from "next/image";

export interface AwardslistProps {
  title: string;
  image: string;
}

export const Awardslist: React.FC<AwardslistProps> = (props) => {
  const { title, image } = props;

  return (
    <>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 border-2 border-gray-300 border-x-0 border-t-0 py-2">
        <div className="flex justify-center items-center">
          <p className="text-md xl:text-xl md:px-5 md:w-1/2 md:text-start text-center font-bold py-4">
            {title}
          </p>
        </div>
        <div className="max-w-sm">
          <div className="relative md:aspect-w-1 md:aspect-h-1">
            <Image src={image} alt="Picture" fill={false} width={320} height={320} className="object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

// export const Awardslist: React.FC<AwardslistProps> = (props) => {
//   const { title, image } = props;
//   return (
//     <>
//       <div className="grid xl:grid-cols-2 md:grid-cols-2   grid-cols-1  border-2 border-gray-300 border-x-0 border-t-0 ">
//         <div className=" aspect-w-7 aspect-h-3 ">
//           <div className=" flex justify-center items-center">
//             <p className="text-md xl:text-xl  md:px-5 w-1/2 md:text-start text-center font-bold">
//               {title}
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//             <div className="my-2">
//             <Image
//               src={image}
//               width={300}
//               height={300}
//               alt="Icon"
//               className="object-cover"
//             />
//             </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export const Awardslist: React.FC<AwardslistProps> = (props) => {
//   const { title, image } = props;
//   return (
//     <>
//       <div className="grid xl:grid-cols-2 md:grid-cols-2   grid-cols-1  border-2 border-gray-300 border-x-0 border-t-0 py-2 ">
//         <div className=" aspect-w-5 aspect-h-2 ">
//           <div className=" flex justify-center items-center">
//             <p className="text-md xl:text-xl  md:px-5 w-1/2 md:text-start text-center font-bold">
//               {title}
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//             <Image
//               src={image}
//               width={300}
//               height={300}
//               alt="Icon"
//               className="object-cover"
//             />

//         </div>
//       </div>
//     </>
//   );
// };
