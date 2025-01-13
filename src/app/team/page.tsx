'use client';
import { useState, useEffect } from "react";
import { NavbarCommon } from "@/components/sections/NavbarCommon";
import Image from "next/image";
import teamPhoto from '@/assets/team.png';

export default function MeetTheTeam() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on load and resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set dimensions on component mount
    updateDimensions();

    // Add resize event listener
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <NavbarCommon />
      {/* Image Container */}
      <div className="relative">
        <Image
          src={teamPhoto}
          alt="Team Photo"
          className="object-cover w-full h-auto"
          width={dimensions.width}
          height={
            dimensions.width < 768 // Mobile devices
              ? dimensions.height
              : dimensions.width < 1024 // Tablets
              ? Math.min(dimensions.height, 400) // Max height of 600px on tablets
              : Math.min(dimensions.height, 500) // Max height of 800px on laptops
          }
          priority
        />
        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-0">
          <h1 className="text-4xl md:text-9xl font-bold text-center tracking-wider text-white drop-shadow-2xl">
            MEET THE TEAM
          </h1>
        </div>
      </div>
      <div className="pb-96">

      </div>
    </>
  );
}
