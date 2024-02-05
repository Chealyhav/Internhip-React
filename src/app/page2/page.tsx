import { Follow } from "@/component/follow/follow";
import { follow } from "@/data/data";

export default function PageTest() {
  return (
    <div className="container my-10 ">
      <Follow items={follow} />
    </div>
  );
}
