/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

//
interface TshirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  width?: number;
  height?: number;
}

const Tshirt = ({ className, imgSrc, dark = false, width, height, ...props }: TshirtProps) => {
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

      <div className="absolute inset-0 flex items-center justify-center z-10 p-8">
        <div className="relative flex items-center overflow-clip justify-center" style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}>
          <Image
            src={imgSrc}
            className="object-cover object-center"
            alt="Tshirt image"
            width={width || 150}
            height={height || 150}
          />
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
