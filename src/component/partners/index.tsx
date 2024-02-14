import { partnersData } from "@/data/data";
import { PartnersSlider } from "./partners-slider";

export const PartnersList: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <div className="py-12 text-center">
        <h1 className="font-ubuntu text-xl font-semibold text-green-600 md:text-3xl ">
          {title}
        </h1>
        <p className="py-2 font-ubuntu  text-xl text-gray-600">{subtitle}</p>
      </div>
      <PartnersSlider items={partnersData} />
    </>
  );
};
