
import { Awards } from "@/component/awards";
import { Direction } from "@/component/direction";
import { Governance } from "@/component/governance";

import ResizableCardList from "@/component/resizable";
import {
  SustainabilityList,
  SustainabilityListRec,
} from "@/component/sustainability-reports";
import { data1, dataSustainability } from "@/data/data";
import { data2, data3 } from "@/data/data2";
import { data } from "@/data/mockup-data";
import React from "react";

export default function Home() {
  return (
    <div className="my-16 container">
      <ResizableCardList
        title="Our Core Value"
        subtitle="We are driven by"
        items={data}
      />
      <Direction items={data1} />

      <Awards items={data2} />

      <Governance items={data3} />

      <SustainabilityList
        items={dataSustainability}
        title="Latest Sustainability Report"
        subtitle="We aim to provide transparency year to show where we`ve been and where
          we`re going."
      />

      <SustainabilityListRec
        items={dataSustainability}
        title="Sustainability Report"
        subtitle="We aim to provide transparency year to show where we`ve been and where
          we`re going. Those reports show our progress as we climb the mountain
          toward a better world and future for Smart Team."
      />
    </div>
  );
}
