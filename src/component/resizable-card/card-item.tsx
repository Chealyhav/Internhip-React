import Image from "next/image";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export const CardItem: React.FC<CardProps> = (props) => {
  const { title, icon, description } = props;
  return (
    <article className="w-full bg-gray-200 h-full border border-gray-300 rounded-xl p-9 ">
      <Image src={icon} width={50} height={50} alt="Icon" className="object-cover"/>
      <h1 className="md:text-2xl text-xl mt-6 mb-2 font-bold text-green-600 ">
        {title}
      </h1>
      <div
        className="[&>ul]:list-disc px-3 [&>ul>li]:text-gray-700"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </article>
  );
};
