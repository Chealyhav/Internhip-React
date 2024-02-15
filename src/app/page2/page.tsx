import { ChannelWideSlider, Data} from "@/component/chanel";
import { PackageCard } from "@/component/package/package-card";
import { datatest } from "@/data/data";


export default function PageTest() {
  return <div className="container py-5">
    <PackageCard />

    <ChannelWideSlider items={datatest} />
  </div>
}
