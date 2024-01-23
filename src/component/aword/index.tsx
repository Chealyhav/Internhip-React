import { Awardslist, AwardslistProps } from "./card.item";




interface CardAwardsProps {
  items: AwardslistProps[];
}

export const CardAwards: React.FC<CardAwardsProps> = ({ items }) => {
  return (
    <div className="my-2">
      {items.map((value, index) => (
        <div key={index} className="container mx-auto ">
          <Awardslist {...value} />
        </div>
      ))}
    </div>
  );
};
