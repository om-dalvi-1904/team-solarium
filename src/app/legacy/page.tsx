'use client';

import { NavbarCommon } from "@/components/sections/NavbarCommon";
import { Timeline } from "@/components/ui/Timeline";
import { useState, useEffect } from "react";
import Image from "next/image";
import legacyTeam from '@/assets/teamPhotoLegacy.png'
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Russo_One, Red_Rose } from "next/font/google";
import bgDiv from '@/assets/team_mem/legacyImage.png';
import invFive from  '@/assets/Invictus_Five.png';
import { Footer } from "@/components/sections/Footer";
import invOne from '@/assets/IN1.1.png';
import invOne2 from '@/assets/inv1.2.png';
import invTwo from '@/assets/inv2.png';
import invTwo2 from '@/assets/inv2Two.png';
import invThree from '@/assets/inv3.png';
import inv3Two from '@/assets/inv3Two.png';
import inv3One from '@/assets/inv3.Two.png'
import invThree2 from '@/assets/inv3.2.png';
import inv3Dot from '@/assets/invThree2.png';
import inv4 from '@/assets/Inv4Landing.png';
import inv42 from '@/assets/invFour.png';
import inv5 from '@/assets/Inv5.png';
import inv52 from '@/assets/inv5A.png';
import inv6 from '@/assets/inv6.png';
import inv62 from '@/assets/inv62.png';

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

const redRose = Red_Rose({
  variable: "--font-red-rose",
  subsets: ["latin"],
});
export default function Legacy () {
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
        <Image
          src={legacyTeam}
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
            <motion.div className="absolute inset-0 flex flex-col items-start justify-end px-4">
                <h1 className={twMerge(
                "text-5xl md:text-8xl font-bold text-center tracking-wider text-white drop-shadow-2xl",
                russoOne.className
              )}>
                    THE LEGACY
                </h1>
            </motion.div>
        </AnimatePresence>
        </div>
        <div className="relative md:flex md:flex-row justify-end items-end">
            <Image
                src={bgDiv}
                alt="Legacy Image"
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
            <Image 
                src={invFive}
                alt="Inv Five"
                className="size-80 md:size-[680px] object-cover absolute inset-0 z-30 -mt-20 md:-mt-44"
            />
            <div className={twMerge("md:absolute md:inset-y-96 md:pl-52 lg:pl-72 lg:inset-y-[430px] flex flex-col gap-6 -mt-20 md:-mt-40 lg:-mt-20 z-50 items-end justify-end md:justify-start text-white text-md md:text-xl font-medium px-4", redRose.className)}>
            <span>
            Our team was established in 2016 by Calvin Rohan Raj, whose vision was to create an innovative platform for advancing solar technology
            and promoting sustainability.
            </span>
            <span>
            This journey began under the insightful mentorship of Dr. Anandita Roy, whose guidance played a crucial
            role in shaping the team&apos;s foundation and direction.
            Their combined efforts laid the groundwork for a collaborative environment where creativity, engineering excellence, and a commitment
            to clean energy could thrive. Over the years, this vision has evolved into a dedicated team that continues to push the boundaries of solar-
            powered innovation, contributing meaningfully to the global movement toward renewable energy and sustainability.
            </span>
            </div>
        </div>
        <div className={twMerge("text-orange-600 bg-neutral-500/30 text-2xl flex justify-center py-4 mt-10 md:mt-32 lg:mt-10 tracking-wide font-semibold", russoOne.className)}>
            Our Legacy
        </div>
        <Timeline data={[
            {title:'Invictus 1.0', content: <div>
                <span>Team Solarium&apos;s debut EV dominated ESVC with 1st place in Pre-Virtual, Technical Inspection, Autocross, and Acceleration, earning the Best Design Award and an Overall 3rd Rank. The 144 kg vehicle featured a 3-wheel tadpole configuration, a 40 km/h top speed, and a 300W polycrystalline solar panel with 15% efficiency.</span>
                <div className="md:grid grid-cols-2">
                    <Image
                    src={invOne}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                    src={invOne2}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
            </div>
            </div>,},
            {title:'Invictus 2.0', content:<div>
                <span>India&apos;s second-ever carbon fiber monocoque chassis solar EV. It won 1st place in Pre-Virtual, Technical Inspection, and Best Design, ranking 7th overall at ESVC. The 134 kg vehicle reached 63 km/h with a 48V Brushless DC motor, a 610W monocrystalline solar panel (22.3% efficiency), and a 4-speed DAQ system with semi-automatic gear shifting.</span>
                <div className="md:grid grid-cols-2">
                    <Image
                    src={invTwo}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    priority
                    draggable="false"
                    />
                    <Image
                    src={invTwo2}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    priority
                    draggable="false"
                    />
            </div>
            </div>},
            {title: 'Invictus 3.0', content:<div>
                <span>A performance-driven solar EV, winning 1st in Pre-Virtual, Technical Inspection & Hill Climb, 2nd in Autocross, and the Best Design Award, ranking 4th overall. Featuring electronic gear shifting and IoT integration, it reached 70 km/h, with a 404W solar panel (24.2% efficiency) and a semi-flexible solar array.</span>
                <div className="md:grid grid-cols-2">
                    <Image
                    src={invThree}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                    src={inv3Two}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
            </div>
            </div>},
            {
                title: 'Invictus 3.1' , content: <div>
                    <span>An autonomous solar EV that excelled in ESVC&apos;s virtual event during COVID-19. It won 1st in Pre-Virtual & Team Video, 2nd in Innovation Presentation & Autonomous Concept, and 3rd in Design, ranking 2nd overall. Key features included IBM Watson cloud monitoring, image processing for navigation, and a 2-speed automatic gear reduction system.</span>
                    <div className="md:grid grid-cols-2">
                    <Image
                    src={inv3One}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
                </div>
            },
            {
                title: 'Invictus 3.2' , content: <div>
                    <span>The Overall Champion of SUVC 5.0, winning 1st in Engineering Design, Rulebook, Marketing Report, DVP & DFMEA, 2nd in Business Plan, and 3rd in Innovations. This SAE Level 3 autonomous vehicle weighed 180 kg, featured a 2.1m² solar panel (24.2% efficiency) and was integrated with IBM Watson cloud monitoring.</span>
                    <div className="md:grid grid-cols-2">
                    <Image
                    src={invThree2}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                    src={inv3Dot}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
                </div>
            },
            {
                title: 'Invictus 4.0' , content: <div>
                   <span>A breakthrough closed-cockpit, single-seater SEV, designed for Indian roads and the ESVC3000+ rally, covering 2200 km from Chandigarh to Pune. It ranked 2nd Runner-Up, won Best Solar Performance, and Best Engineering Design Report, and placed 2nd in Business & Cost Plan. Featuring SAE Level 4 autonomy, radio telemetry, and an electronic differential system, the 217 kg vehicle showcased unmatched endurance and efficiency.</span>
                   <div className="md:grid grid-cols-2">
                    <Image
                    src={inv4}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                    src={inv42}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
                </div>
            },
            {
                title: 'Invictus 5.0' , content: <div>
                    <span>A game-changer at NSVC 2023, crowned Overall Champions and winning Best Solar Endurance. It placed 2nd in Endurance, Best Crosspad-B, and won Best Business Plan. This 3-wheeled tadpole-configured solar EV solidified Team Solarium&apos;s dominance in sustainable mobility and reinforced its vision for the future of solar-powered transportation.</span>
                    <div className="md:grid grid-cols-2">
                    <Image
                    src={inv5}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                    src={inv52}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
                </div>
            },
            {
                title: 'Invictus 6.0' , content: <div>
                    <span>Crowned Overall Champion at ESVC3000, Invictus 6.0 dominated the competition by securing top honors in endurance, lightweight design, and electrical systems. Also voted People&apos;s Choice, this vehicle exemplified Team Solarium&apos;s engineering excellence and solidified its leadership in the future of sustainable mobility.</span>
                    <div className="md:grid grid-cols-2">
                    <Image
                    src={inv6}
                    alt="startup template"
                    className="rounded-lg object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                    src={inv62}
                    alt="startup template"
                    className="rounded-lg hidden md:flex object-cover size-80 mt-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
                </div>
            }
        ]} />
        <Footer />
        </>
    );
}