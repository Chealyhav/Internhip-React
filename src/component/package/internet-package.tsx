import { PackageProps } from "./interface";
import { PackageCard } from "./package-card";

export const InternetPackage: React.FC<PackageProps> = ({
  items,
  title,
  subtitle,
  description,
}) => {
  return (
    <>
      <div className="py-8 text-center">
        <h3 className="font-ubuntu text-lg font-semibold text-green-600 md:text-xl ">
          {title}
        </h3>
        <h2 className="py-2 font-ubuntu  text-2xl font-semibold text-gray-600 md:text-3xl">
          {subtitle}
        </h2>

        <p className="md:pt-8 pt-4 font-ubuntu text-gray-600">{description}</p>
      </div>
      {items.map((x, i) => (
        <PackageCard key={i} {...x} type="InternetPackage" />
      ))}
    </>
  );
};
