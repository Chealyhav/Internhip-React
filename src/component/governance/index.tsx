import { CardGovernance, CardGovernanceProps } from "./card-items";

export const Governance: React.FC<{ items: CardGovernanceProps[] }> = ({
  items,
}) => {
  return (
    <div className="mt-4">
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 xl:grid-cols-4  md:grid-cols-2 grid-cols-1 ">
        {items.map((value, index) => (
          <div key={index}>
            <CardGovernance {...value} />
          </div>
        ))}
      </div>
    </div>
  );
};
