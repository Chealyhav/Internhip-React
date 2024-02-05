import { FollowCard, FollowCardProps } from "./follow-card";

export const Follow: React.FC<{ items: FollowCardProps[] }> = ({ items }) => {
  return (
    <div>
      {items.map((x, i) => (
        <FollowCard {...x} key={i} />
      ))}
    </div>
  );
};
