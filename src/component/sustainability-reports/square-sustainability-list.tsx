import {
  SustainabilityCard,
  SustainabilityCardProps,
} from "./sustainability-card";

export interface SquareSustainabilityListProps {
  items: SustainabilityCardProps[];
  title: string;
  subtitle: string;
}

export const SquareSustainabilityList: React.FC<
  SquareSustainabilityListProps
> = ({ items, title, subtitle }) => {
  return (
    <>
      <div className="text-center py-12">
        <h1 className="text-2xl text-green-600 font-bold py-4 font-ubuntu">
          {title}
        </h1>
        <h2 className="text-xl font-ubuntu">{subtitle}</h2>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8  ">
        {items.map((x, i) => (
          <div key={i} className="w-full h-full">
            <SustainabilityCard {...x} />
          </div>
        ))}
      </div>
    </>
  );
};
