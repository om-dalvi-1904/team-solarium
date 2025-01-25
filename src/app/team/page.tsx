'use client';
import { useState, useEffect, useRef } from "react";
import { NavbarCommon } from "@/components/sections/NavbarCommon";
import Image from "next/image";
import teamPhoto from "@/assets/team.png";
import { twMerge } from "tailwind-merge";
import { Russo_One } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/sections/Footer";
import { MemberCard } from "@/components/ui/MemberCard";
import teamLead from '@/assets/malhar_patil.png';
import teamCoLead from '@/assets/shivani_teli.png';
import marketingLead from '@/assets/aishwarya_more.png';
import chassisLead from '@/assets/team_mem/yash_wabhal.png';
import testPlanLead from '@/assets/team_mem/mihir_pala.png';
import aeroLead from '@/assets/team_mem/aditi_salunkhe.png';
import lowVoltLead from '@/assets/team_mem/vedant_joshi.png';
import aeroEngg from '@/assets/team_mem/nishwas_deva.png';
import structEngg from '@/assets/team_mem/darshan_shenkar.png';
import suspensionEngg from '@/assets/team_mem/om_vishnu.png';
import suspensionEngg2 from '@/assets/team_mem/raj_dan.png';
import steeringEngg from '@/assets/team_mem/aryan_jadhav.png';
import brakesEngg from '@/assets/team_mem/amey_tambe.png';
import brakesEngg2 from '@/assets/team_mem/shruti_jadhav.png';
import voltEngg from '@/assets/team_mem/rohan_patil.png';
import solarEngg from '@/assets/team_mem/adwait_kul.png';
import autoEngg from '@/assets/team_mem/sanika_bhalge.png';

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

export default function MeetTheTeam() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const cardsRef = useRef<HTMLDivElement>(null);

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

  const cardsHeight = cardsRef.current ? cardsRef.current.offsetHeight : 0;

  return (
    <>
      <NavbarCommon />

      <div className="relative">
        <Image
          src={teamPhoto}
          alt="Team Photo"
          className="object-cover w-full h-auto"
          width={dimensions.width}
          height={
            dimensions.width < 768
              ? (dimensions.width * 9) / 16  
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
        {/* <Image src={frameFive} alt="haw" className="object-cover w-full" 
          style={{
            height: cardsHeight > 0 ? `${cardsHeight}px` : '2000px'
          }}
        /> */}
         <div className="grid grid-cols-10 grid-rows-20 bg-[#262626] w-full"
                    style={{
                      height: cardsHeight > 0 ? `${cardsHeight}px` : '2000px'
                    }}
         >
        {[...Array(200)].map((_, index) => (
          <div
            key={index}
            className=" border border-white"
          ></div>
        ))}
      </div>
        <div className="absolute block inset-0 text-white">
          <div ref={cardsRef}>
           <div className="grid grid-cols-2 pt-24 lg:pt-48 px-2 justify-center items-center">
                <MemberCard memberPosition="Team Lead" memberImage={teamLead} memberName="MALHAR PATIL" isBorder isPositionBlack />
                <MemberCard memberPosition="Team Co-Lead" memberImage={teamCoLead} memberName="SHIVANI TELI" isBorder isPositionBlack />
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 lg:gap-5 px-2 items-center justify-center pt-20 md:pt-56 lg:pt-40">
            <MemberCard memberPosition="Marketing Lead" memberImage={marketingLead} memberName="AISHWARYA MORE" isBorder isNameOrange />
            <MemberCard memberPosition="Chassis Lead" memberImage={chassisLead} memberName="YASH WAVHAL" isBorder isNameOrange classNameImage="w-[188px]" className="h-[240px]" />
            <MemberCard memberPosition="Testing & Planning Lead" memberImage={testPlanLead} memberName="MIHIR PAWSKAR" isBorder isNameOrange />
            <MemberCard memberPosition="Low Voltage & DAQ Lead" memberImage={lowVoltLead} memberName="VEDANT JOSHI" isBorder isNameOrange className="lg:hidden h-[240px]" />
           </div>
           <div className="grid grid-cols-2 gap-4 md:gap-12 lg:gap-4 px-2 items-center justify-center pt-20 md:pt-56 lg:pt-44">
            <MemberCard memberPosition="Low Voltage & DAQ Lead" memberImage={lowVoltLead} memberName="VEDANT JOSHI" isBorder className="hidden lg:inline-flex" />
            <MemberCard memberPosition="Aerodynamics Lead" memberImage={aeroLead} memberName="ADITI SALUNKHE" isBorder />
            <MemberCard memberPosition="Aerodynamics Engg" memberImage={aeroEngg} memberName="VISHWAS DEVADIGA" isBorder className="lg:hidden" />
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 lg:gap-5 px-2 items-center justify-center pt-20 md:pt-56 lg:pt-44">
            <MemberCard memberPosition="Aerodynamics Engg" memberImage={aeroEngg} memberName="VISHWAS DEVADIGA" isBorder isNameOrange className="hidden lg:inline-flex" />
            <MemberCard memberPosition="Structural & Composites Engg" memberImage={structEngg} memberName="DARSHAN SHENKAR" isBorder isNameOrange />
            <MemberCard memberPosition="Suspension Engg" memberImage={suspensionEngg} memberName="OM VISHNU" isBorder isNameOrange className="h-[268px]" />
            <MemberCard memberPosition="Suspension Engg" memberImage={suspensionEngg2} memberName="RAJ DHANJODE" isBorder isNameOrange className="lg:hidden h-[240px]" />
            <MemberCard memberPosition="Steering Engg" memberImage={steeringEngg} memberName="ARYAN JADHAV" isBorder isNameOrange className="lg:hidden h-[240px]" classNamePosition="pb-[26px]" />
           </div>
           <div className="grid grid-cols-2 gap-4 px-2 items-center justify-center pt-20 md:pt-56 lg:pt-44">
            <MemberCard memberPosition="Suspension Engg" memberImage={suspensionEngg2} memberName="RAJ DHANJODE" isBorder className="hidden lg:inline-flex" />
            <MemberCard memberPosition="Steering Engg" memberImage={steeringEngg} memberName="ARYAN JADHAV" isBorder className="hidden lg:inline-flex" />
            <MemberCard memberPosition="Solar Engg" memberImage={solarEngg} memberName="ADWAIT KULKARNI" isBorder className="lg:hidden h-[240px]" classNamePosition="pb-[26px]" />
            <MemberCard memberPosition="Autonomous Engg" memberImage={autoEngg} memberName="SANIKA BHALGE" isBorder className="lg:hidden h-[240px]" />
           </div>
           <div className="grid grid-cols-2 gap-4 px-2 items-center justify-center pt-20 md:pt-56 lg:pt-44">
            <MemberCard memberPosition="Solar Engg" memberImage={solarEngg} memberName="ADWAIT KULKARNI" isBorder className="hidden lg:inline-flex" />
            <MemberCard memberPosition="Autonomous Engg" memberImage={autoEngg} memberName="SANIKA BHALGE" isBorder className="hidden lg:inline-flex" />
            <MemberCard memberPosition="Brakes Engg" memberImage={brakesEngg} memberName="AMEY TAMBE" isBorder className="lg:hidden h-[240px]" />
            <MemberCard memberPosition="Brakes Engg" memberImage={brakesEngg2} memberName="SHRUTI JADHAV" isBorder className="lg:hidden h-[240px]" />
           </div>
           <div className="grid grid-col-1 lg:hidden items-center justify-center pt-20 md:pt-56">
            <MemberCard memberPosition="High Voltage Engg" memberImage={voltEngg} memberName="ROHAN PATIL" isBorder className="h-[240px]" classNameImage="h-[165px]" />
           </div>
           <div className="lg:grid grid-cols-3 hidden gap-5 px-2 items-center justify-center pt-20 md:pt-24 lg:pt-44">
           <MemberCard memberPosition="Brakes Engg" memberImage={brakesEngg} memberName="AMEY TAMBE" isBorder isNameOrange />
            <MemberCard memberPosition="Brakes Engg" memberImage={brakesEngg2} memberName="SHRUTI JADHAV" isBorder isNameOrange />
            <MemberCard memberPosition="High Voltage Engg" memberImage={voltEngg} memberName="ROHAN PATIL" isBorder isNameOrange />
           </div>
           </div>
        </div>
      </div>
      <div className="z-50">
      <Footer />
      </div>
    </>
  );
}
