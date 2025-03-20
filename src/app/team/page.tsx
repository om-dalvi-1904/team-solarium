'use client';
import teamPhoto from "@/assets/team.png";
import { Russo_One } from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { Red_Rose } from "next/font/google";
import Image from 'next/image';
import teamMembersData from '@/data/team-members.json';
import teamLeadData from '@/data/team-leads.json';
import { NavbarCommon } from "@/components/sections/NavbarCommon";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const redRose = Red_Rose({
    variable: "--color-red-rose",
    subsets: ["latin"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});




const TeamPage = () => {
  const teamLead = teamLeadData
  const filteredMembers = teamMembersData;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
      
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
    <div className="relative">
      <section className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto">
            <div className="mx-auto">
              <div className="relative mb-16">
                <div className="overflow-hidden">
                  <Image
                    src={teamPhoto}
                    alt="Team Solarium Group Photo"
                    className="object-cover w-full h-auto"
                    draggable="false"
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
                    <motion.div className="absolute inset-0 flex flex-col items-center justify-end px-4">
                        <h1 className={twMerge(
                        "text-4xl md:text-8xl font-bold text-center tracking-wider text-white drop-shadow-2xl",
                        russoOne.className
                      )}>
                            MEET THE TEAM
                        </h1>
                    </motion.div>
                </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl">
        <div className="container py-10 mx-auto px-4">
          <div
            className="grid grid-cols-2 md:flex md:justify-center gap-4"
            id="team-members-grid"
          >
            {teamLead.map((member, index) => (
              <div className="team-member group" key={index}>
                <div className="bg-white p-2 border-2 border-black transition-all duration-300 hover:bg-orange-500">
                  <div className="relative">
                    <Image
                      className="w-full aspect-square object-cover border-2 border-black"
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      draggable="false"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <h2 className={twMerge("text-base font-bold text-black truncate", redRose.className)}>
                      {member.name}
                    </h2>
                    <p className={twMerge("text-xs text-black uppercase mt-1 truncate", redRose.className)}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6"
            id="team-members-grid"
          >
            {filteredMembers.map((member, index) => (
              <div className="team-member group" key={index}>
                <div className="bg-white p-2 border-2 border-black transition-all duration-300 hover:bg-orange-500">
                  <div className="relative">
                    <Image
                      className="w-full aspect-square object-cover border-2 border-black"
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      draggable="false"
                      width={300}
                      height={300}
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <h2 className={twMerge("text-base font-bold text-black truncate", redRose.className)}>
                      {member.name}
                    </h2>
                    <p className={twMerge("text-xs text-black uppercase mt-1 truncate", redRose.className)}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="z-50">
      <Footer />
      </div>
    </div>
    </>
  );
};

export default TeamPage;
