'use client';
import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Red_Rose } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import solariumLogo from '@/assets/solarium_logo_new.png';
import { AnimatePresence, motion } from 'motion/react';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "700",
});
const redRose = Red_Rose({
  variable: "--font-red-rose",
  subsets: ["latin"],
});

const navLinks = [
  { text: "EVENTS", href:'/events', id: 1 },
  { text: "ABOUT", href:'/about', id: 2 },
  { text: "SUPPORT US", href:'/support', id: 3 },
  { text: "LEGACY", href:'/legacy', id: 4 },
  { text: "PARTNERS", href:'/partners', id:5 },
  { text: "TEAM", href:'/team', id: 6 },
];

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={twMerge(
        'flex flex-col max-w-auto bg-white text-black z-10 justify-between'
      )}
    >

      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-start gap-2 py-2 px-2">
          <Image className="size-16 items-center" src={solariumLogo} alt="solarium logo" />
          <span
            className={twMerge(
              poppins.className,
              'font-extrabold text-lg'
            )}
          >
            Team Solarium
          </span>
        </div>
        <div className='md:flex items-center hidden px-12'>
          <nav className='flex gap-6 px-7 font-medium'>
            {navLinks.map((link, cross) => (
              <a href={link.href} key={`${link.text}-${cross}-${link.id}`} className={twMerge(redRose.className,)}><span className='border-b-4 border-orange-600'>{link.text}</span></a>
            ))}
          </nav>
        </div>
        <div className="flex items-center px-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
            onClick={() => {setIsOpen(!isOpen)}}
          >
            <line x1="3" y1="12" x2="21" y2="12" className={twMerge(isOpen && 'opacity-0')}></line>
            <line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-left transition',isOpen && 'rotate-45 -translate-y-1')}></line>
            <line x1="3" y1="18" x2="21" y2="18" className={twMerge('origin-left transition',isOpen && '-rotate-45 translate-y-1')}></line>
          </svg>
        </div>
      </div>
      <div className='flex flex-col'>
        {/* <Image src={traingleLeft} alt='left traingle' className='hidden md:absolute md:block size-10 -mt-[20px] ml-2' /> */}
        <div className={twMerge('md:bg-orange-600 md:pb-5 md:z-10','bg-orange-600 pb-5 z-10')}>
        <AnimatePresence>
      {
        isOpen && (
          <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0}}
          
          className='flex flex-col items-center bg-orange-600 overflow-hidden'>
          {navLinks.map((link, index) => (
            <a href={link.href} key={`${link.text}-${index}`} className={twMerge('py-2')}>{link.text}</a>
          ))}
        </motion.div>
        )
      }
      </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
