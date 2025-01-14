'use client';
import { useState, useEffect } from "react";
import { NavbarCommon } from "@/components/sections/NavbarCommon";
import Image from "next/image";
import teamPhoto from "@/assets/team.png";
import { twMerge } from "tailwind-merge";
import { Russo_One } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import frameFive from '@/assets/Frame.png';
import { Footer } from "@/components/sections/Footer";
import { MemberCard } from "@/components/ui/MemberCard";
import teamLead from '@/assets/malhar_patil.png';
import teamCoLead from '@/assets/shivani_teli.png';
import marketingLead from '@/assets/aishwarya_more.png';

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

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
        {/* <div className="relative h-screen bg-center bg-repeat-y" style={{backgroundImage:`url(${frameFive.src})`}}>

        </div> */}
        <Image src={frameFive} alt="haw" className="object-cover w-full" />
        <Image src={frameFive} alt="haw" className="object-cover w-full md:hidden" />
        
        <div className="absolute inset-0 text-white">
           <div className="grid grid-cols-2 pt-24 lg:pt-48 px-2 justify-center">
                <MemberCard memberPosition="Team Lead" memberImage={teamLead} memberName="MALHAR PATIL" isBorder isPositionBlack />
                <MemberCard memberPosition="Team Co-Lead" memberImage={teamCoLead} memberName="SHIVANI TELI" isBorder isPositionBlack />
           </div>
           <div className="grid grid-cols-3 gap-5 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-40">
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
           </div>
           <div className="grid grid-cols-2 gap-4 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-44">
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
           </div>
           <div className="grid grid-cols-3 gap-5 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-44">
           <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
           </div>
           <div className="grid grid-cols-2 gap-4 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-44">
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
           </div>
           <div className="grid grid-cols-2 gap-4 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-44">
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
           </div>
           <div className="grid grid-cols-3 gap-5 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-44">
           <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder />
           </div>
        </div>
      </div>
      <div className="z-50">
      <Footer />
      </div>
    </>
  );
}
