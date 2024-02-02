import { GovernanceCard, GovernanceCardProps } from "./governance-card";


export const Governance: React.FC<{ items: GovernanceCardProps[] }> = ({
  items,
}) => {
  return (
    <div className="mt-4">
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 xl:grid-cols-4  md:grid-cols-2 grid-cols-1 ">
        {items.map((x, i) => (
          <div key={i}>
            <GovernanceCard {...x} />
          </div>
        ))}
      </div>
    </div>
  );
};
