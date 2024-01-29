import { title } from "process";
import { CardSustainability, CardSustainabilityProps } from "./card-item";

export interface SustainabilityListProps {
  items: CardSustainabilityProps[];
  title: string;
  subtitle: string;
}

export const SustainabilityList: React.FC<SustainabilityListProps> = ({
  items,
  title,
  subtitle,
}) => {
  return (
    <>
      <div className="text-center py-12">
        <h1 className="text-2xl text-green-600 font-bold py-4 font-ubuntu">
          {title}
        </h1>
        <h2 className="text-xl font-ubuntu">{subtitle}</h2>
      </div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8  ">
        {items.map((x, i) => (
          <div key={i} className="w-full h-full">
            <CardSustainability {...x} />
          </div>
        ))}
      </div>
    </>
  );
};

export const SustainabilityListRec: React.FC<SustainabilityListProps> = ({
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
          <CardSustainability {...x} type="rectangle" />
        </div>
      ))}
    </div>
  );
};
