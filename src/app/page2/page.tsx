import { SubscribeList } from "@/component/subscribe/subscribe-list";
import { subscribeddata } from "@/data/mockup-data";

export default function PageTest() {
  return (
    <div className="container my-10">
      <SubscribeList
        items={subscribeddata}
        title="Subscribe Now"
        subtitle="Join Now for a Connected Tomorrow!"
      />
    </div>
  );
}
