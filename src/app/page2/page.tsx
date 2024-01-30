

import { BusinessList } from "@/component/business-package/business-list";
import { cardBusinessData } from "@/data/data";

export default function PageTest() {
  return (
    <div className="container my-5">
      <BusinessList
        items={cardBusinessData}
        title="Business Solution Packages"
        subtitle="Choose the Right Plan for Your Business"
        description="Get more data to browse the internet, stream videos, update Facebook and a whole lot more with Smart's SurfLikeCrazy! Get as much or as little as your like, from only 10 cents/100MB of data!"
      />
    </div>
  );
}
