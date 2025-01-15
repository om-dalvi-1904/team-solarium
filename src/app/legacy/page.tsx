'use client';

import { NavbarCommon } from "@/components/sections/NavbarCommon";
import { Timeline } from "@/components/ui/Timeline";
import { useState, useEffect } from "react";
import Image from "next/image";
import legacyTeam from '@/assets/teamPhotoLegacy.png'
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Russo_One, Red_Rose } from "next/font/google";
import bgDiv from '@/assets/legacyImage.png';
import invFive from  '@/assets/Invictus_Five.png';
import { Footer } from "@/components/sections/Footer";

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
            <div className={twMerge("md:absolute md:inset-y-96 md:pl-52 lg:pl-72 lg:inset-y-[430px] flex flex-col gap-6 -mt-20 items-end justify-end md:justify-start text-white text-md md:text-lg font-medium px-4", redRose.className)}>
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
        <div className={twMerge("text-orange-600 bg-neutral-500/30 text-2xl flex justify-center py-4 mt-10 md:mt-20 tracking-wide font-semibold", russoOne.className)}>
            Our Legacy
        </div>
        <Timeline data={[
            {title:'Invictus 1.0', content: <div>
                Adventure Class Solar Electric Vehicle (2016-17)
                Faculty Mentor: Dr. Anindita Roy
                Team Members: 25 dedicated students
                Key Highlights:
                Weight: 144 kg | Dimensions: 2100mm x 1410mm x 863mm
                3-wheel tadpole configuration | Max Speed: 40 km/h
                Brushless DC Motor (48V, 3000 rpm) | Lead-acid battery with 98% charging
                efficiency
                Solar Panel: Polycrystalline, 300W, 15% efficiency
                Achievements:
                🏆 1st in Pre-virtual, Technical Inspection, Autocross, and Acceleration
                🏆 Best Design Award
                🥉 Overall Ranking: 3rd
                Invictus 1.0 marked Team Solarium&apos;s debut, setting a high standard in solar
                electric vehicle innovation.
            </div>,},
            {title:'Invictus 2.0', content:<div>
                Solar Electric Vehicle with Carbon Fiber Monocoque Chassis 
                Highlights
                Faculty Mentor: Dr. Anindita Roy
                Team Members: 37
                About:
                Team Solarium&apos;s first ESVC entry, featuring a carbon fiber monocoque
                chassis—only the second in India to achieve this innovation.
                Specifications:
                Weight: 134 kg | Speed: 63 km/h
                Motor: Brushless DC, 48V, 3000 rpm, 30 Nm torque
                Battery: Li-ion, 98%-99% efficiency
                Solar Panel: Monocrystalline, 610W, 22.3% efficiency
                Unique Features: 4-speed DAQ system, semi-automatic gear shifting with
                Arduino
                Achievements:
                🏆 1st in Pre-virtual and Technical Inspection
                🏆 Best Design Award
                🏅 Overall: 7th
                Invictus 2.0 pushed boundaries in solar electric vehicle design and
                innovation.
            </div>},
            {title: 'Invictus 3.0', content:<div>
                Solar Vehicle with Semi-Automatic Gear Shifting 
                Faculty Mentor: Dr. Anindita Roy
                Team Members: 37
                Overview:
                Competing in ESVC, Invictus 3.0 features a carbon fiber monocoque chassis,
                semi-automatic gear shifting, and advanced solar components.
                Specifications:
                Weight: 180 kg | Speed: 70 km/h
                Motor: Brushless DC, 48V, 3200 rpm, 36 Nm torque
                Battery: Li-ion
                Solar Panel: 404W, 24.2% efficiency, 2.6m2
                Features: Electronic gear shifting, IoT integration, semi-flexible solar array
                Achievements:
                🏆 1st in Pre-virtual, Technical Inspection & Hill Climb
                🏆 2nd in Autocross
                🏆 Best Design Award
                🥈 Overall Rank: 4th
                Invictus 3.0 pushed the limits in solar vehicle design and performance.
            </div>},
            {
                title: 'Invictus 3.1' , content: <div>
                    Solar Electric Vehicle with Autonomous Abilities and Automatic Gear Shifting 
                    Faculty Mentor: Dr. Anindita Roy
                    Team Members: 37
                    Overview:
                    Invictus 3.1 is an upgraded, autonomous solar vehicle with automatic gear
                    shifting and a carbon fiber battery box. Although the COVID-19 lockdown
                    prevented physical participation in ESVC 2020, the team excelled in the
                    virtual event.
                    Specifications:
                    Weight: 180 kg | Speed: 81 km/h
                    Motor: Brushless DC
                    Battery: Li-ion, 105 Ah
                    Solar Panel: 2.1m2, 24.2% efficiency
                    Features:
                    IBM Watson cloud platform for real-time data
                    Image processing & path planning for autonomous navigation
                    2-speed gear reduction, automatic shifting with Arduino & speed sensor
                    Achievements:
                    🏆 1st in Pre-virtual & Team Video
                    🥈 2nd in Innovation Presentation & Autonomous Concept
                    🥉 3rd in Design Presentation
                    🥈 Overall Rank: 2nd
                    Invictus 3.1 set new standards in autonomous solar vehicle design.
                </div>
            },
            {
                title: 'Invictus 3.2' , content: <div>
                    Aerodynamically Upgraded Version 
                    Faculty Mentor: Dr. Anindita Roy
                    Team Members: 37
                    Overview:
                    Invictus 3.2 features aerodynamic upgrades and additional luggage space.
                    Designed for the virtual Saur Urja Vehicle Championship 5.0, it highlights Team
                    Solarium's innovation.
                    Specifications:
                    Weight: 180 kg | Battery: Li-ion, 105 Ah
                    Motor: Brushless DC | Solar Panel: 2.1m2, 24.2% efficiency
                    Features: SAE Level 3 Autonomous | IBM Watson cloud monitoring | 2-speed
                    gear reduction
                    Achievements:
                    🏆 1st in Engineering Design, Rulebook, Marketing Report, DVP & DFMEA
                    🥈 2nd in Business Plan
                    🥉 3rd in Innovations
                    🏆 Overall Winner of SUVC 5.0 Championship
                    Invictus 3.2 dominated SUVC 5.0 with top ranks in multiple categories.
                </div>
            },
            {
                title: 'Invictus 4.0' , content: <div>
                    Aerodynamically Sound Closed Cockpit Single Seat SEV for Indian
                    Roads 
                    Faculty Mentor: Dr. Anindita Roy
                    Team Members: 30
                    Overview:
                    Invictus 4.0, designed for Indian roads, was built to compete in the
                    ESVC3000+ solar car rally from Chandigarh to Pune, covering 2200
                    km. It&apos;s one of Team Solarium&apos;s most advanced vehicles.
                    Specifications:
                    Weight: 217 kg | Battery: Li-ion, 90 Ah
                    Motor: Brushless DC Hub Motors | Solar Panel: 4m2, 20% efficiency
                    Features: SAE Level 4 Autonomous | Radio telemetry for real-time
                    data | Electronic differential system
                    Achievements:
                    🏅 2nd Runner Up | Best Engineering Design Report
                    🏆 Best Solar Performance | 2nd in Business Plan & Cost Plan
                    🥈 2nd in Solar Car Rally
                    Invictus 4.0 excelled with top rankings in engineering and
                    performance at the ESVC3000+.
                </div>
            },
            {
                title: 'Invictus 5.0' , content: <div>
                    Innovative Solar Vehicle for a Sustainable Future 
                    Event: National Solar Vehicle Challenge (NSVC), VNIT Nagpur
                    Overview:
                    Invictus 5.0, Team Solarium&apos;s sleek 3-wheeled, tadpole-configured
                    solar vehicle, showcased our commitment to innovation and clean
                    energy. At the NSVC 2023, we pushed the limits of solar-powered
                    mobility.
                    Achievements:
                    🏆 Overall Champions | Best Solar Endurance Award
                    🥈 Runner-Up in Endurance | Best Crosspad-B Award
                    📊 Best Business Plan
                    Invictus 5.0 is a testament to Team Solarium&apos;s dedication to building
                    sustainable, cutting-edge vehicles for a greener tomorrow.

                </div>
            }

        ]} />
        <Footer />
        </>
    );
}