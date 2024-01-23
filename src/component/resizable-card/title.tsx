interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="p-2">
      <h2 className="text-center text-green-600 font-bold text-xl md:text-2xl mb-6">
        {title}
      </h2>
      <h1 className="text-center text-black font-bold text-3xl md:text-4xl mb-6">
        {subtitle}
      </h1>
    </div>
  );
};

interface GetTitleProps {
  items: TitleProps[];
}

export const GetTitle: React.FC<GetTitleProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Title key={index} title={item.title} subtitle={item.subtitle} />
      ))}
    </div>
  );
};
