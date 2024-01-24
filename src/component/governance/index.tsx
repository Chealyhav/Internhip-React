import { Governnacelist, GovernnacelistProps } from "./card-items";

interface CardGovernanceProps {
  items: GovernnacelistProps[];
}

export const CardGovernance: React.FC<CardGovernanceProps> = ({ items }) => {
  return (
    <div className="mt-10">
      <div className="grid lg:grid-cols-3 gap-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {items.map((value, index) => (
          <div key={index} >
            <Governnacelist {...value} />
          </div>
        ))}
      </div>
    </div>
  );
};
