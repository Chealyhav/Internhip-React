import { CardAwards, CardAwardsProps } from "./card-awards";

export const Awards: React.FC<{ items: CardAwardsProps[] }> = ({ items }) => (
  <div className="w-10/12 mx-auto">
    {items.map((x, i) => (
      <div key={i}>
        <CardAwards {...x} />
      </div>
    ))}
  </div>
);
