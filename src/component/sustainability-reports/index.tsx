import { SustainabilityCard, SustainabilityCardProps } from "./card-item";

export interface SustainabilityListProps {
  items: SustainabilityCardProps[];
}

export const SustainabilityList: React.FC<SustainabilityListProps> = ({
  items,
}) => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-8  ">
      {items.map((x, i) => (
        <div key={i} className="w-full h-full">
          <SustainabilityCard {...x} />
        </div>
      ))}
    </div>
  );
};

export const SustainabilityListRec: React.FC<SustainabilityListProps> = ({
  items,
}) => {
  return (
    <>
      {items.map((x, i) => (
        <div key={i}>
          <SustainabilityCard {...x} type="rectangle" />
        </div>
      ))}
    </>
  );
};


