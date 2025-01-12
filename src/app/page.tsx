'use client';
import React, { useRef } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { twMerge } from 'tailwind-merge';
import { Anton } from 'next/font/google';
import { AnimatePresence, motion, useInView} from 'motion/react';
import invFour from '@/assets/inv4.png';
import Image from 'next/image';
import { Red_Rose } from 'next/font/google';

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const redRose = Red_Rose({
  subsets: ["latin"],
});

const cardContent = [
  {title:'', src:''},
  {}
]
export default function Landing (){
  const sectionRef = useRef<HTMLElement>(null);
  const invFourRef = useRef<HTMLDivElement>(null);
  const isView = useInView(invFourRef, {once: true});
  const isInView = useInView(sectionRef, {once: true});
  return(
    <>  
    <Navbar />
    <div>
      <video src='/testing_compressed.mp4' className="w-screen h-screen object-cover m-0 p-0" autoPlay loop muted/>
      <div className='bg-orange-600 py-5'></div>
      <div className='flex flex-col text-white'>
        <AnimatePresence>
        <motion.div className={twMerge('pb-6 text-4xl md:text-6xl font-semibold pt-6 px-4',anton.className)}>
          <h1>WE AT
          <motion.span
          ref={sectionRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          className='block py-2'>TEAM SOLARIUM</motion.span>
          </h1>
        </motion.div>
        </AnimatePresence>
        
        <motion.div
          ref={invFourRef}
          initial={{ opacity: 0, x:-100 }}
          animate={isView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        className='max-w-auto flex items-start px-2 '>
          <Image src={invFour} alt='Invictus 4.0' className='size-64 md:size-96 object-cover relative z-30 -mt-10' />
        </motion.div>
        <div className='bg-[#252525] py-10 -mt-24 md:-mt-36 grid grid-rows-2 md:grid-cols-2 md:pt-28 md:pb-6'>
          <span className=''></span>
          <div className={twMerge(redRose.className,'flex flex-col px-2')}>
          <h2 className={twMerge(redRose.className,'text-lg md:text-2xl tracking-wide md:tracking-wider')}>At Team Solarium, we are fueled by a shared vision of promoting renewable energy and driving sustainable innovation.</h2>
          <a href='/about' className='flex items-end justify-end px-4 py-4 text-lg md:text-2xl'><span className={twMerge('border-b-4 border-orange-600',redRose.className)}>More about us</span></a>
          </div>
        </div>
        <div>
          <div className='px-4 py-6'>
            <a href='/legacy' className=''><span className={twMerge(redRose.className,'text-2xl font-extrabold border-b-4 border-orange-600 pb-1')}>Legacy</span></a>
          </div>
          <div className='grid grid-rows-2 md:grid-cols-2'>
            <p className='px-4 font-medium text-lg py-2'>Vehicle Description</p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}