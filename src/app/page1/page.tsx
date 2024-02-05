import { Awards } from "@/component/awards/awards";
import { BusinessList } from "@/component/business-package/business-list";
import { Direction } from "@/component/direction/direction";
import { Governance } from "@/component/governance/governance";
import { ResizableList } from "@/component/resizable/resizable-list";
import { SubscribeList } from "@/component/subscribe/subscribe-list";
import { RectangleSustainabilityList } from "@/component/sustainability-reports/rectangle-sustainability-list";
import { SquareSustainabilityList } from "@/component/sustainability-reports/square-sustainability-list";
import { cardBusinessData, data1, dataSustainability } from "@/data/data";
import { data2, data3 } from "@/data/data2";
import { data, subscribeddata } from "@/data/mockup-data";
import React from "react";

export default function Home() {
  return (
    <div className="my-16 container">
      <ResizableList
        title="Our Core Value"
        subtitle="We are driven by"
        items={data}
      />
      <Direction items={data1} />

      <Awards items={data2} />

      <Governance items={data3} />

      <SquareSustainabilityList
        items={dataSustainability}
        title="Latest Sustainability Report"
        subtitle="We aim to provide transparency year to show where we`ve been and where
          we`re going."
      />

      <RectangleSustainabilityList
        items={dataSustainability}
        title="Sustainability Report"
        subtitle="We aim to provide transparency year to show where we`ve been and where
          we`re going. Those reports show our progress as we climb the mountain
          toward a better world and future for Smart Team."
      />

      <BusinessList
        items={cardBusinessData}
        title="Business Solution Packages"
        subtitle="Choose the Right Plan for Your Business"
        description="Get more data to browse the internet, stream videos, update Facebook and a whole lot more with Smart's SurfLikeCrazy! Get as much or as little as your like, from only 10 cents/100MB of data!"
      />

      <SubscribeList
        items={subscribeddata}
        title="Subscribe Now"
        subtitle="Join Now for a Connected Tomorrow!"
      />
    </div>
  );
}
