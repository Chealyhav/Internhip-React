import { Awardslist, AwardslistProps } from "./card.item";




interface CardAwardsProps {
  items: AwardslistProps[];
}

export const CardAwards: React.FC<CardAwardsProps> = ({ items }) => {
  return (
    <div className="">
      {items.map((value, index) => (
        <div key={index} className=" py-3 flex justify-center">
          <Awardslist {...value} />
        </div>
      ))}
    </div>
  );
};
