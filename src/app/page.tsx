import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid-cols-3 
      sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pv-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
        <div className= ' relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
          <div className="absolute w-28 left-0 -top-20 hidden lg:block">
            <img src="/logo.png" alt="brandlogo" className="w-full" />
          </div>
          <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold
           !leading-tight O text-gray-900 text-5x1 md:text-6xl lg:text-7xl  ">
            Your Image is a <span> Custom </span> Tshirt 
            </h1>
        </div>
        </div>
      </MaxWidthWrapper>
      </section>
    </div>
  );
}
