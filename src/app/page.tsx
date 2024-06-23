/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Check } from "lucide-react";
import { Star } from "lucide-react";
import Tshirt from "@/components/Tshirt";
import { Icons } from "@/components/Icons";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50 max-w-screen  max-h-screen overflow-auto">
      <section className="lg:pr-20">
        <MaxWidthWrapper
          className="pb-20 pt-10 lg:grid lg:grid-cols-3 
      sm:pb-20 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-40"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className=" relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-36 -left-6 -top-12 hidden lg:block">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img
                  src="/logo-minimal.png"
                  alt="brandlogo"
                  className="w-full "
                />
              </div>
              <h1
                className="relative w-fit tracking-tight text-balance mt-16 font-bold font-customFont
          !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"
              >
                Your Image is a{" "}
                <span className=" bg-orange-500 px-2 text-white font-customFont ">
                  {" "}
                  Custom{" "}
                </span>{" "}
                Tshirt
              </h1>
              <p
                className="mt-6 text-md font-medium text-gray-600 lg:pr-10 max-w-prose 
          text-center lg:text-left text-pretty md:text-wrap "
              >
                Combine your favorite memories and turn them into a{" "}
                <span className="font-bold">Unique</span> t-shirt.
                PerfectThreads is the best place to get your custom t-shirt.
              </p>
              <ul
                className=" mt-6 space-y-2 text-left font-medium flex flex-col 
          items-center sm:items-start "
              >
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-500" />
                    High-quality, 240 gsm fabric
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-500" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-orange-500" />
                    Free shipping worldwide
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                    <Star className="h-4 w-4 text-orange-500 fill-orange-500" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-20 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="your-image"
                className="absolute w-40 pt-20 lg:pt-4 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                alt="line"
                className="absolute w-20 left-6 -bottom-6 select-none"
              />
              <Tshirt className="w-96" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 py-12">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ">
            <h2 className="order-1 mt-1 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our{""}{" "}
              <span className="relative px-2">
                customers{""}{" "}
                <Icons.Underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-orange-500" />
              </span>
              {""} say
            </h2>
            <img
              src="/logo-minimal.png"
              alt=""
              className="w-28 order-0 lg:order-2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The t-shirt feels durable and I even got a compliment on the
                  design. Had the t-shirt for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the print is super clear
                  </span>
                  , on the t-shirt I had before, the print started fading and
                  cracking after a couple weeks. Love it."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Another user review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
              </div>
              <div className="text-lg leading-8">
                <p className=" text-pretty">
                  "I&apos;m really impressed with the quality of this
                  customizable t-shirt. I&apos;ve had it for over two months,
                  and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the colors are still vibrant
                  </span>
                  . Unlike other t-shirts I&apos;ve owned, this one hasn&apos;t
                  shown any signs of wear or fading. Plus, I&apos;ve gotten
                  several compliments on the unique design.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-2.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Angelina</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-orange-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div>
          <Reviews />
        </div>
        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="order-1 mt-1 tracking-tight text-center text-balance !leading-tight font-bold text-3xl md:text-5xl text-gray-900">
                  Buy Amazing Tshirts at{""}
                  <span className="relative px-2 bg-orange-500 texct-white">
                    PerfectThreads{""}
                  </span>
                  {""} say
                </h2>
              </div>
            </div>
            <div
              // style={{ backgroundColor: "#ff5e8c" }}
              className=" rounded-xl bg-purple"
            >
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-24">
                  <img
                    src="/arrow.png"
                    className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                  />
                  <div className="relative h-80 md:h-full md:scale-75 w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                    <img
                      src="/testimonials/1.jpg"
                      className="rounded-md border-4 rounded-lg border-black object-cover hover:scale-105  transition-transform duration-500 ease-in-out h-full bg-white shadow-2xl ring-1 ring-gray-900/10 w-full"
                    />
                  </div>
                  <div className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl">
                    <Tshirt className="w-96 " imgSrc="/testimonials/1.jpg" />
                  </div>
                </div>
              </div>
            </div>

            <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
              <li className="w-fit">
                <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
                High-quality Cotton material
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
                240 GSM great quality material
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />
                Machine washable
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-orange-600 inline mr-1.5" />5
                year print warranty
              </li>

              <div className="flex justify-center">
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto mt-8",
                  })}
                  href="/configure/upload"
                >
                  Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            </ul>
          </MaxWidthWrapper>
        </section>
      </section>
    </div>
  );
}
