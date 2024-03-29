import { AwardsCard, AwardsCardProps } from "./awards-card";


export const Awards: React.FC<{ items: AwardsCardProps[] }> = ({ items }) => (
  <div className="w-10/12 mx-auto">
    {items.map((x, i) => (
      <div key={i} className="">
        <AwardsCard  {...x} />
      </div>
     
    ))}

  </div>
);
