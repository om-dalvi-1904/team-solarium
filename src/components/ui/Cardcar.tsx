"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Anton } from "next/font/google";
// import { StaticImageData } from "next/image";

// Load Anton font
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

// export function CardCar(props: {
//   carName: string;
//   carDescription?: string;
//   bgImageUrl: StaticImageData; // Prop to receive the imported image URL
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [dynamicHeight, setDynamicHeight] = useState(300); // Default height
//   const { carName, carDescription, bgImageUrl } = props;

//   // Effect to calculate height based on `window.innerWidth`
//   useEffect(() => {
//     const calculateHeight = () => {
//       const newHeight = Math.max(200, window.innerWidth * 0.3); // Minimum height is 200px
//       setDynamicHeight(newHeight);
//     };

//     // Initial calculation
//     calculateHeight();

//     // Add event listener for window resize
//     window.addEventListener("resize", calculateHeight);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("resize", calculateHeight);
//     };
//   }, []);

//   return (
//     <div
//       className={twMerge(
//         cn(
//           "cursor-pointer overflow-hidden relative rounded-md shadow-xl flex flex-col justify-end py-8 px-2 md:px-16 border border-transparent",
//           "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black/70 hover:after:opacity-50 md:hover:px-32",
//           "transition-all duration-500"
//         )
//       )}
//       style={{
//         backgroundImage: `url(${bgImageUrl.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         height: `${dynamicHeight}px`,
//       }}
//       onMouseEnter={() => setIsHovered(true)} // Hover state on mouse enter
//       onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
//     >
//       {isHovered && (
//         <div className={twMerge("text flex md:flex-col md:justify-start md:text-start relative z-50", anton.className)}>
//           <h1 className="font-semibold text-xl md:text-3xl text-gray-50 relative tracking-wide">
//             {carName}
//           </h1>
//           {carDescription && (
//             <p className="font-normal text-base text-gray-50 relative">
//               {carDescription}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

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
      {/* Lazy-loaded background image */}
      <Image
        src={bgImageUrl}
        alt={carName}
        fill
        style={{ objectFit: "cover" }}
      />
      {/* Content */}
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
