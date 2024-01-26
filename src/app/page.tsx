import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center container ">
      <div className="my-8">
        <Link
          href="/page1"
          className="border py-4 px-4 bg-blue-400 rounded-lg m-4 text-white"
        >
          Page1
        </Link>

        <Link
          href="/page2"
          className="border py-4 px-4 bg-red-400 rounded-lg m-4 text-white"
        >
          Page2
        </Link>
      </div>
    </div>
  );
}
