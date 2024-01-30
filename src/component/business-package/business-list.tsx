import { BusinessCard, BusinessCardProps } from "./business-card";


interface BusinessListProps {
  items: BusinessCardProps[];
  title: string;
  subtitle: string;
  description: string;
}

export const BusinessList: React.FC<BusinessListProps> = (props) => {
  const { items, title, subtitle, description } = props;
  return (
    <>
      <div className="py-4">
        <h2 className="md:text-xl text-md text-green-600 font-semibold text-center font-ubuntu">
          {title}
        </h2>
        <h1 className="md:text-3xl text-xl font-semibold text-center font-ubuntu pb-5">
          {subtitle}
        </h1>
        <p className="text-center py-5 md:text-xl text-sm font-ubuntu">
          {description}
        </p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full h-full">
        {items.map((item, index) => (
          <div key={index}>
            <BusinessCard {...item} />
          </div>
        ))}
      </div>
    </>
  );
};
