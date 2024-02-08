import { Pillarsdata } from "@/data/data";
import { PillarsSlider } from "./pillars-slider";

export interface PillarsList {
  title: string;
  subtitle: string;
  description: string;
}

export const PillarsList: React.FC<PillarsList> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="text-center ">
          <h2 className="text-md font-ubuntu text-xl text-green-600 md:text-2xl ">
            {title}
          </h2>
          <h1 className="font-ubuntu text-2xl font-semibold md:text-3xl ">
            {subtitle}
          </h1>
        </div>
      </div>
      <div className="py-8">
        <p className="text-center font-ubuntu text-sm font-light  text-gray-700 md:text-lg">
          {description}
        </p>
      </div>
      <PillarsSlider items={Pillarsdata} />
    </div>
  );
};
