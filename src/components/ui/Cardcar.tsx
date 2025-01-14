"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Anton } from "next/font/google";

// Load Anton font
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});


import Image, { StaticImageData } from "next/image";

export function CardCar(props: {
  carName: string;
  carDescription?: string;
  bgImageUrl: StaticImageData;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [dynamicHeight, setDynamicHeight] = useState(300);
  const { carName, carDescription, bgImageUrl } = props;

  useEffect(() => {
    const calculateHeight = () => {
      const newHeight = Math.max(200, window.innerWidth * 0.3);
      setDynamicHeight(newHeight);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div
      className={twMerge(
        cn(
          "cursor-pointer overflow-hidden relative rounded-md shadow-xl flex flex-col justify-end py-8 px-2 md:px-16 border border-transparent",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black/70 hover:after:opacity-50 md:hover:px-32",
          "transition-all duration-500"
        )
      )}
      style={{ height: `${dynamicHeight}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={bgImageUrl}
        alt={carName}
        fill
        style={{ objectFit: "cover" }}
      />
      {isHovered && (
        <div
          className={twMerge(
            "text flex md:flex-col md:justify-start md:text-start relative z-50",
            anton.className
          )}
        >
          <h1 className="font-semibold text-xl md:text-3xl text-gray-50 relative tracking-wide">
            {carName}
          </h1>
          {carDescription && (
            <p className="font-normal text-base text-gray-50 relative">
              {carDescription}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
