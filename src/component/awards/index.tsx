import { Awardslist, AwardslistProps } from "./card.item";

interface CardAwardsProps {
  items: AwardslistProps[];
}

export const CardAwards: React.FC<CardAwardsProps> = ({ items }) => {
  return (
    <div className="w-10/12 mx-auto">
      {items.map((value, index) => (
        <div
          key={index}
          className=""
        >
          <Awardslist {...value} />
        </div>
      ))}
    </div>
  );
};
