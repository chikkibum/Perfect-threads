/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

//
interface TshirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Tshirt = ({ className, imgSrc, dark = false, ...props }: TshirtProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none mt-12 lg:mt-2 z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={dark ? "/tshirt-template-dark-edges.png" : "/t.png"}
        className="pointer-events-none z-50 size-96 object-cover p-2 select-none"
        alt="Tshirt-template"
      />

      <div className="size-20 absolute mt-5 mr-2 z-10 right-36 top-28">
        <img
          src={imgSrc}
          className="object-cover min-w-full min-h-full"
          alt="Tshirt image"
        />
      </div>
    </div>
  );
};

export default Tshirt;
