'use client';
import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import { twMerge } from 'tailwind-merge';
import { Anton } from 'next/font/google';
import { AnimatePresence, motion, useInView } from 'motion/react';
import invFour from '@/assets/inv4.png';
import Image from 'next/image';
import { Red_Rose } from 'next/font/google';
import { CardCar } from '@/components/ui/Cardcar';
import invOne from '@/assets/IN1.1.png';
import invTwo from '@/assets/inv2.png';
import invThree from '@/assets/inv3.png';
import invThreeTwo from '@/assets/inv3.2.png';
import invFourLanding from '@/assets/Inv4Landing.png';
import invFive from '@/assets/Inv5.png';
import { PartnerGrid } from '@/components/ui/PartnerGrid';
import { Footer } from '@/components/sections/Footer';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
});
const redRose = Red_Rose({
  subsets: ['latin'],
});



export default function Landing() {
  const sectionRef = useRef<HTMLElement>(null);
  const invFourRef = useRef<HTMLDivElement>(null);
  const legacyRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  const isView = useInView(invFourRef, { once: true });
  const isInView = useInView(sectionRef, { once: true });
  const isLegacyView = useInView(legacyRef, { once: true });

  const [isMobile, setIsMobile] = useState(false);

  // Determine if the screen is mobile on component mount
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile(); // Initial check
    window.addEventListener('resize', updateIsMobile); // Listen for window resize

    return () => {
      window.removeEventListener('resize', updateIsMobile); // Cleanup on unmount
    };
  }, []);


  return (
    <>
      <Navbar partnersRef={partnersRef} supportRef={supportRef} />
      <div className='overflow-x-hidden'>
        <video
          src="https://res.cloudinary.com/dl4tccguh/video/upload/v1737023463/output_pickka.mp4"
          className="w-screen h-screen object-cover m-0 p-0"
          autoPlay
          loop
          muted
        />
        <div className="bg-orange-600 py-5"></div>
        <div className="flex flex-col text-white">
          <AnimatePresence>
            <motion.div
              className={twMerge(
                'pb-6 text-4xl md:text-6xl lg:text-8xl font-semibold pt-6 px-4',
                anton.className
              )}
            >
              <h1>
                WE AT
                <motion.span
                  ref={sectionRef}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block py-2"
                >
                  TEAM SOLARIUM
                </motion.span>
              </h1>
            </motion.div>
          </AnimatePresence>

          <motion.div
            ref={invFourRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-auto flex items-start px-2 "
          >
            <Image
              src={invFour}
              alt="Invictus 4.0"
              className="size-64 md:size-96 lg:size-[500px] object-cover relative z-30 -mt-10"
            />
          </motion.div>
          <div className="bg-[#252525] py-10 -mt-24 md:-mt-36 grid grid-rows-1 md:grid-cols-1 md:px-10 md:pt-16 md:pb-6">
            <div className={twMerge(redRose.className, 'flex flex-col px-2')}>
              <h2
                className={twMerge(
                  redRose.className,
                  'text-lg md:text-2xl lg:text-4xl tracking-wide md:tracking-wider'
                )}
              >
                At Team Solarium, we are fueled by a shared vision of promoting
                renewable energy and driving sustainable innovation.
              </h2>
              <a
                href="/about"
                className="flex items-end justify-end px-4 py-4 text-lg md:text-2xl"
              >
                <span
                  className={twMerge(
                    'border-b-4 border-orange-600',
                    redRose.className
                  )}
                >
                  More about us
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className="px-4 pt-6">
              <a href="/legacy" className="">
                <span
                  className={twMerge(
                    redRose.className,
                    'text-2xl md:text-4xl font-extrabold border-b-4 border-orange-600 pb-1'
                  )}
                >
                  Legacy
                </span>
              </a>
              <p className="font-medium text-lg md:text-xl md:py-6 py-4">Invictus Series</p>
            </div>
            {
              isMobile &&
                <motion.div
                ref={legacyRef}
                className="flex flex-col md:flex-row justify-start md:justify-end gap-2 px-4 py-6 overflow-hidden overflow-x-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              >
                <CardCar carName="Incivtus 1.0" bgImageUrl={invOne} />
                <CardCar carName="Invictus 2.0" bgImageUrl={invTwo} />
                <CardCar carName="Invictus 3.0" bgImageUrl={invThree} />
                <CardCar carName="Invictus 3.2" bgImageUrl={invThreeTwo} />
                <CardCar carName="Invictus 4.0" bgImageUrl={invFourLanding} />
                <CardCar carName="Invictus 5.0" bgImageUrl={invFive} />
              </motion.div>
            }
            <motion.div
              initial={{ x: '50%' }}
              animate={!isLegacyView ? {} : { x: 0 }} 
              transition={{
                duration: 3,
                ease: 'linear',
              }}
              ref={legacyRef}
              className="hidden md:flex flex-col md:flex-row justify-start md:justify-end gap-2 px-4 py-6 overflow-hidden overflow-x-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
              <CardCar carName="Incivtus 1.0" bgImageUrl={invOne} />
              <CardCar carName="Invictus 2.0" bgImageUrl={invTwo} />
              <CardCar carName="Invictus 3.0" bgImageUrl={invThree} />
              <CardCar carName="Invictus 3.2" bgImageUrl={invThreeTwo} />
              <CardCar carName="Invictus 4.0" bgImageUrl={invFourLanding} />
              <CardCar carName="Invictus 5.0" bgImageUrl={invFive} />
            </motion.div>
          </div>
          <div className="bg-orange-600 py-5"></div>
          <div className='bg-[#1e1e1e] px-4 pt-6' ref={partnersRef}>
          <div className='flex flex-col'>
            <a href='/partners' className={twMerge(redRose.className, 'text-2xl md:text-4xl font-extrabold')}>Our Partners</a>
          </div>
          <PartnerGrid />
          </div>
          <div className='pt-6 px-4 flex flex-col gap-6 pb-20' ref={supportRef}>
            <span className={twMerge('text-2xl md:text-4xl font-extrabold',redRose.className)}>Support Us</span>
            <div className='border border-white/40 rounded-2xl py-48 px-20 md:p-64'></div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
