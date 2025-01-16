'use client';
import aboutUsImage from '@/assets/aboutUs.png';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { NavbarCommon } from '@/components/sections/NavbarCommon';
import { Red_Rose } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import fiveImage from '@/assets/five.png';
import sasolImage from '@/assets/sasol-solar-challenge.png';
import invFourImage from '@/assets/Invictus photo (91) 1.png';
import { Footer } from '@/components/sections/Footer';
import { motion, useInView } from 'framer-motion';

const redRose = Red_Rose({
  variable: '--font-red-rose',
  subsets: ['latin'],
});

export default function About() {
      const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
      const headingRef = useRef<HTMLDivElement>(null);
      const headingTwoRef = useRef<HTMLDivElement>(null);
      const isHeadingTwo = useInView(headingTwoRef, { once: true });
      const isHeadingRef = useInView(headingRef, { once: true });
    
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
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "linear" }}
                className='relative'>
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
                </motion.div>
            </div>
            <div className='bg-[#1E1E1E] text-white py-6 flex flex-col'>
                <motion.div 
                    initial={{ x: '-60%' }}
                    animate={isHeadingRef ? { x:0 } : {}}
                    transition={{ duration: 0.5, ease: 'linear' }}
                    ref={headingRef}
                className={twMerge(redRose.className, 'text-4xl md:text-7xl px-4 font-semibold')}>
                    <h1 className='block'>SUN TO LEAD,{" "}</h1>
                    <span className='block'><span className='text-orange-600'>ENGINEERING</span> TO</span>
                    <span>SUCCEED.</span>
                </motion.div>
                <div className='md:grid md:grid-cols-2 lg:gap-36'>
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
                <div className='hidden md:flex md:relative lg:justify-center '>
                <Image
                src={fiveImage}
                alt="Inv 5.0"
                className="object-cover w-auto h-auto pt-8"
                height={
                dimensions.width < 768
                    ? (dimensions.width * 9) / 16  
                    : dimensions.width < 1024
                    ? Math.min(dimensions.height, 400)
                    : Math.min(dimensions.height, 500)
                }
                priority
            />
            <div className='z-50 absolute flex inset-0 justify-center top-[95%]'>
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
            <div className='text-white py-4'>
            <motion.div 
                initial={{ x:'100%' }}
                animate={isHeadingTwo? { x:0 } : {}}
                transition={{ duration: 0.5, ease: 'linear' }}
                ref={headingTwoRef}
            className={twMerge(redRose.className, 'text-3xl md:text-7xl text-right px-4 font-semibold')}>
                <p>REV UP THE ACTION</p>
                <p>WITH <span className='text-orange-600'>ELECTRIFYING</span> EVENTS</p>
            </motion.div>   
            </div>
            <div className='bg-[#1E1E1E] flex flex-col pb-16'>
                <div className='px-4 py-4 text-orange-600'>
                    <span className='text-xl md:text-4xl font-semibold'>SASOL SOLAR <span className='block'>CHALLENGE</span></span>
                </div>
                <div className='md:grid md:grid-cols-2 md:gap-4 lg:gap-13 md:py-4 text-white'>
                    <div className='hidden md:flex md:relative'>
                        <Image
                        src={sasolImage}
                        alt="sasol image"
                        className="object-cover w-full h-auto pt-8"
                        height={
                        dimensions.width < 768
                            ? (dimensions.width * 9) / 16  
                            : dimensions.width < 1024
                            ? Math.min(dimensions.height, 400)
                            : Math.min(dimensions.height, 500)
                        }
                        priority
                    />
                    <div className='z-50 absolute flex inset-0 justify-center top-[90%]'>
                        <div className='absolute'>
                            <a href='https://www.solarchallenge.org.za/' target='__blank'>
                                <Button className='bg-orange-600 max-w-px px-16 rounded-xl flex items-center font-semibold ' size='sm'>MORE INFO</Button>
                            </a>
                        </div>
                    </div>
                    
                    </div>
                    <div className={twMerge('pt-8 px-4 md:px-0')}>
                    <span className='block pb-3 md:pb-4'>The Sasol Solar Challenge, a biennial South African endurance event for solar-powered vehicles, has evolved since 2008 to foster innovation in solar technology.</span> 
                    <span className='block py-3 md:py-4'>A major milestone in 2014 introduced daily loops, enabling teams to log extra kilometers, with the Dutch Brunel Solar Team securing its first victory under this rule.</span> 
                    <span className='block py-3 md:py-4'>The 2016 edition saw diverse participation, including a fierce rivalry between Japan&apos;s Tokai University and Brunel, with Brunel claiming its second win. South African teams also made strides, with North West University achieving fourth place and qualifying for the Bridgestone World Solar Challenge.</span>
                    <span className='block py-3 md:py-4'>In 2018, celebrating its 10th anniversary, the event featured a scenic stop at Cape Agulhas and showcased inspiring teams like Sonke Siyakude. Brunel maintained dominance, securing a third consecutive title. Held on public roads, the challenge tests solar car technologies in varied terrains, driving advancements in solar cells, batteries, and materials science, and fostering collaborations among global innovators in renewable energy.</span>
                    </div>
                    <div className='flex justify-center md:hidden'>
                        <a href='https://www.solarchallenge.org.za/' target='__blank'>
                            <Button className='bg-orange-600 max-w-px px-16 rounded-xl flex items-center font-semibold ' size='sm'>MORE INFO</Button>
                        </a>
                    </div>
                </div>
                <div className='pt-16 flex flex-col'>
                    <p className='text-orange-600 text-xl md:text-4xl font-semibold px-4 text-right'>ELECTRIC SOLAR VEHICLE <span className='block'>CHALLENGE 3000</span></p>
                    <div className='relative'>
                    <Image
                        src={invFourImage}
                        alt="Inv 4.0"
                        className="object-cover w-full h-auto pt-8 px-4"
                        height={
                        dimensions.width < 768
                            ? (dimensions.width * 9) / 16  
                            : dimensions.width < 1024
                            ? Math.min(dimensions.height, 400)
                            : Math.min(dimensions.height, 500)
                        }
                        priority
                    />
                        <div className='flex absolute inset-0 top-[76%] md:top-[85%] lg:top-[90%] justify-end px-6 lg:px-10'>
                        <a href='/legacy'>
                            <Button className='bg-orange-600 max-w-px px-14 md:px-16 rounded-xl flex items-center font-semibold ' size='sm'>MORE INFO</Button>
                        </a>
                    </div>
                    </div>
                    <div className={twMerge('text-white py-6 px-4 font-medium text-sm', redRose.className)}>
                        <p>
                        The Electric Solar Vehicle Championship (ESVC) 3000, organized by ISIEIndia in collaboration with ARAI, is Asia&apos;s largest solar vehicle competition, attracting teams from across the continent. The event challenges participants to design and construct solar-powered vehicles that are not only energy-efficient but also capable of navigating real-world conditions and public roads. ESVC serves as a platform for engineering students and professionals to push the boundaries of innovation in electric mobility and renewable energy.
                        <span className='block pt-5'>Since its inception, the championship has played a pivotal role in advancing solar technology, promoting sustainability, and encouraging the use of clean energy in transportation. By fostering competition and collaboration, it accelerates developments in energy efficiency, vehicle design, and the integration of solar power into everyday mobility. Teams are encouraged to incorporate cutting-edge solutions, which often lead to breakthrough innovations in electric vehicle technology. Ultimately, ESVC is driving the future of sustainable transportation while inspiring the next generation of engineers and innovators.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="z-50">
                <Footer />
            </div>
        </>
    );
}