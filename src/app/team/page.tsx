'use client';
import { useState, useEffect } from "react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { NavbarCommon } from "@/components/sections/NavbarCommon";
import Image from "next/image";
import teamPhoto from "@/assets/team.png";
import { twMerge } from "tailwind-merge";
import { Russo_One } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import frameFive from '@/assets/Frame.png';
import { Footer } from "@/components/sections/Footer";

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

export default function MeetTheTeam() {
    useSmoothScroll();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on load and resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <NavbarCommon />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src={teamPhoto}
          alt="Team Photo"
          className="object-cover w-full h-auto"
          width={dimensions.width}
          height={
            dimensions.width < 768
              ? (dimensions.width * 9) / 16  // Maintain 16:9 ratio for small devices
              : dimensions.width < 1024
              ? Math.min(dimensions.height, 400)
              : Math.min(dimensions.height, 500)
          }
          priority
        />
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-end p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className={twMerge(
                "text-4xl sm:text-5xl md:text-9xl font-bold text-center tracking-wider text-white drop-shadow-2xl",
                russoOne.className
              )}
            >
              MEET THE TEAM
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative">
        <Image src={frameFive} alt="haw" className="object-cover w-full" />
        <div className="absolute inset-0 text-white">Nigga</div>
      </div>
      <div className="z-50">
      <Footer />
      </div>
    </>
  );
}
