import Image from "next/image";
import Link from "next/link";
import cl from "classnames";
export interface PackageCardProps {
  src: string;
  /**
   * Background
   */
  tagline?: string;
  title: string;
  price?: string;
  plantitle?: string;
  planprice?: string;
  duration?: string;

  items: Array<{
    label?: string;
    value?: string;
  }>;
  icon?: string;
  label?: string;
  desc?: string;
  bandwidth?: string;

  content: string;
  labelbutton: string;
  href: string;
  type?: "PlanPackage" | "InternetPackage";
}

export const PackageCard: React.FC<PackageCardProps> = (props) => {
  const {
    src,
    tagline,
    title,
    price,
    plantitle,
    planprice,
    duration,
    items,
    icon,
    label,
    bandwidth,
    desc,
    content,
    href,
    labelbutton,
    type = "PlanPackage",
  } = props;
  return (
    <div className="relative mx-auto flex max-w-lg flex-col md:max-w-5xl md:flex-row md:place-items-center">
      <div className="basis-1/2 ">
        <div className="aspect-h-2 aspect-w-3 relative md:aspect-h-4 md:aspect-w-4">
          <Image
            src={src}
            alt="background-plan"
            fill
            className="rounded-md border object-cover"
          />
        </div>
      </div>
      <div className="relative mx-[4%] -mt-[20%] rounded-md border  bg-white md:mx-0 md:-ms-[20%] md:mt-0 md:basis-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="break-words p-4 xl:p-8">
            {type === "PlanPackage" && (
              <p className="text-base text-green-600 ">{tagline}</p>
            )}
            <h3
              className={cl(
                "font-ubuntu text-lg font-semibold text-gray-600 md:text-xl",
                {
                  "text-base": type === "PlanPackage",
                },
              )}
            >
              {type === "PlanPackage" ? plantitle : title}
            </h3>
            <div className="mt-2 md:mt-4">
              <span className="font-ubuntu text-3xl font-semibold text-green-600 md:text-4xl">
                {type === "PlanPackage" ? planprice : price}
              </span>
              <span className="self-end ps-2 font-ubuntu text-sm text-green-600">
                {duration}
              </span>
            </div>
          </div>

          {type === "InternetPackage" && (
            <div className=" p-4  text-center xl:p-8">
              <div className="aspect-h-1 aspect-w-4 relative">
                <Image
                  src={icon as string}
                  alt="background-plan"
                  fill
                  className="mx-auto object-contain"
                />
              </div>

              <h4 className="font-ubuntu  text-gray-600">{label}</h4>
              <h2 className="py-2 font-ubuntu text-3xl font-semibold text-gray-600 md:text-4xl">
                {bandwidth}
              </h2>
              <p className="py-2 text-gray-600">{desc}</p>
            </div>
          )}
          {type === "PlanPackage" && (
            <div className="p-6 xl:p-12">
              {items.map((x, i) => (
                <div
                  key={i}
                  className="flex items-center border-b py-4 xl:py-4"
                >
                  <p className="flex-1 font-ubuntu font-light">{x.label}</p>
                  <p className="font-ubuntu font-semibold text-gray-600">
                    {x.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-around rounded-b-md bg-green-100 px-6  py-3 md:flex-row">
          <p className="pb-4 text-center font-ubuntu text-base font-semibold text-gray-600 md:pb-0">
            {content}
          </p>
          <Link
            href={href}
            role="button"
            className="w-10/12 rounded-md bg-green-600  py-2 text-center font-ubuntu font-semibold text-white  md:w-1/5"
          >
            {labelbutton}
          </Link>
        </div>
      </div>
    </div>
  );
};
