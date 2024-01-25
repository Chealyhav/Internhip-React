

import { SustainabilityList, SustainabilityList1 } from "@/component/sustainability-reports";
import { data1, data3 } from "@/data/data";
import { data } from "@/data/mockup-data";

export default function Page() {
  return (
    <div className="my-16 container  ">
        

        <div className="text-center py-12">
            <h1 className="text-2xl text-green-600 font-bold py-4">Latest Sustainability Report</h1>
            <h2 className="text-xl">We aim to provide transparency year to show where we`ve been and where we`re going.</h2>
       </div>
      <SustainabilityList items={data3} />

      <div className="text-center py-12">
            <h1 className="text-2xl text-green-600 font-bold py-4">Sustainability Report</h1>
            <h2 className="text-xl">We aim to provide transparency year to show where we`ve been and where we`re going.
              Those reports show our progress as we climb the mountain toward a better world and future for Smart Team.
            </h2>
       </div>
      <SustainabilityList1 items={data3}/>
    </div>
  );
}
