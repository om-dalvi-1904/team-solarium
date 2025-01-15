'use client';
import aboutUsImage from '@/assets/aboutUs.png';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import { NavbarCommon } from '@/components/sections/NavbarCommon';
import { Red_Rose } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import fiveImage from '@/assets/five.png';

const redRose = Red_Rose({
  variable: '--font-red-rose',
  subsets: ['latin'],
});

export default function About() {
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

            <div className="relative">
            <Image
                src={aboutUsImage}
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
            </div>
            <div className='bg-[#1E1E1E] text-white py-6 flex flex-col'>
                <div className={twMerge(redRose.className, 'text-4xl md:text-7xl px-4 font-semibold')}>
                    <h1 className='block'>SUN TO LEAD,{" "}</h1>
                    <span className='block'><span className='text-orange-600'>ENGINEERING</span> TO</span>
                    <span>SUCCEED.</span>
                </div>
                <div className='md:grid md:grid-cols-2'>
                <div className={twMerge(redRose.className, 'text-sm md:text-lg px-4 py-8')}>
                    <span className='block py-2'>At Team Solarium, we are fueled by a shared vision of promoting renewable energy and driving sustainable innovation.</span>

                    <span className='block py-2'>Established in 2016, our journey began with the mission of designing and building solar-powered vehicles that exemplify the
                    transformative potential of clean energy.</span>

                    <span className='block py-2'>Our work is focused on more than just engineering; it&apos;s about creating a movement toward a greener and more sustainable
                    future. By participating in prestigious national and international solar car competitions, we aim to push the boundaries of
                    solar technology, proving its efficiency and inspiring others to embrace renewable solutions.</span>

                    <span className='block py-2'>Sustainability lies at the core of everything we do. Each vehicle we design is a step forward in showcasing how clean energy
                    can be integrated into everyday transportation. Our projects are a testament to the idea that innovation, when aligned with
                    environmental consciousness, can lead to a better world.</span>

                    <span className='block py-2'>Collaboration and creativity are key to our success. By bringing together individuals with diverse skills and perspectives, we
                    strive to solve complex challenges and turn bold ideas into reality. Our vehicles are not just machines—they are symbols of
                    progress, representing a future where technology and sustainability work hand in hand.</span>

                    <span className='block py-2'>Through our work, we aim to inspire communities, raise awareness about the potential of renewable energy, and contribute to
                    the global effort to combat climate change.</span>
                </div>
                <div className='hidden md:flex md:relative'>
                <Image
                src={fiveImage}
                alt="Inv 5.0"
                className="object-cover w-auto h-auto pt-8"
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
            <div className='z-50 absolute flex inset-0 left-[27%] top-[95%]'>
                <div className='absolute'>
                    <a href='/team'>
                    <Button className='bg-orange-600 max-w-px px-24 rounded-xl flex items-center ' size='sm'>MEET THE TEAM</Button>
                    </a>
                </div>
            </div>
                </div>
                </div>
                <div className='flex justify-center md:hidden'>
                    <a href='/team'>
                    <Button className='bg-orange-600 max-w-px px-24 rounded-xl flex items-center ' size='sm'>MEET THE TEAM</Button>
                    </a>
                </div>
            </div>
        </>
    );
}