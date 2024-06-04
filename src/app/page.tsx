import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { Check } from "lucide-react";


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
            Your Image is a <span className=" bg-orange-500 px-2 text-white "> Custom </span> Tshirt 
            </h1>
          <p className="mt-6 text-lg text-gray-600 lg:pr-10 max-w-prose 
          text-center lg:text-left text-balance md:text-wrap" >
            Combine your favorite memories and turn them into a <span>Unique</span> t-shirt.
            Perfectthreads is the best place to get your custom t-shirt.
          </p>
          <ul className=" mt-6 space-y-2 text-left font-medium flex flex-col 
          items-center sm:items-start ">
            <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-orange-500' />
                    High-quality, 240 gsm fabric
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-orange-500' />5 year
                    print guarantee
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-orange-500' />
                    Free shipping worldwide
                  </li>
                </div>

          </ul>
        </div>
        </div>
      </MaxWidthWrapper>
      </section>
    </div>
  );
}
