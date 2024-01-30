import { title } from "process";
import {
  SustainabilityCard,
  SustainabilityCardProps,
} from "./sustainability-card";

export interface SustainabilityListProps {
  items: SustainabilityCardProps[];
  title: string;
  subtitle: string;
}

export const RectangleSustainabilityList: React.FC<SustainabilityListProps> = ({
  items,
  title,
  subtitle,
}) => {
  return (
    <div>
      <div className="text-center py-12">
        <h1 className="text-2xl text-green-600 font-bold py-4 font-ubuntu">
          {title}
        </h1>
        <h2 className="text-xl font-ubuntu">{subtitle}</h2>
      </div>
      {items.map((x, i) => (
        <div key={i}>
          <SustainabilityCard {...x} type="rectangle" />
        </div>
      ))}
    </div>
  );
};
