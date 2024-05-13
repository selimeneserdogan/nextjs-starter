import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-slate-200 h-screen w-full flex items-center justify-center pb-44">
      <div className="shadow-xl p-6 rounded-lg">
        <h1 className="text-xl font-bold">Hepsipay Demo Skeleton</h1>
        <div className="mt-6">
          <Link
            href="/kampanyalar/wellness-practices-2024"
            className="font-semibold italic underline"
          >
            Subpage 1
          </Link>
        </div>
      </div>
    </div>
  );
}
