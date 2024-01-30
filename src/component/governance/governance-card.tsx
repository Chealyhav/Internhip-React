import Image from "next/image";

export interface GovernanceCardProps {
  image: string;
  title: string;
}

export const GovernanceCard: React.FC<GovernanceCardProps> = (props) => {
  const { image, title } = props;

  return (
    <>
      <div className="border w-full h-full px-2 mt-6 relative border-green-300 rounded-xl shadow-lg ">
        <div className="relative border rounded-lg shadow-lg aspect-w-4 aspect-h-3 min-w-56 -mt-6 ">
          <Image
            src={image}
            alt="card-image"
            fill
            className="border rounded-lg"
          />
        </div>

        <h2 className=" break-words p-4 text-center font-semibold text-green-600 text-lg md:text-xl font-ubuntu">
          {title}
        </h2>
      </div>
    </>
  );
};
