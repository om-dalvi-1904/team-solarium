'use client';
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const navLinks = [
  { text: "HOME", href: '/', id:3 },
  { text: "EVENTS", href: '/events', id: 1 },
  { text: "ABOUT", href: '/about', id: 2 },
  { text: "LEGACY", href: '/legacy', id: 4 },
  { text: "TEAM", href: '/team', id: 6 },
];

export const NavbarCommon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="fixed text-white z-50 top-[22px] right-3 md:right-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="focus:outline-none"
        >
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
          >
            <line x1="3" y1="12" x2="21" y2="12" className={twMerge(isOpen && 'opacity-0')}></line>
            <line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-left transition', isOpen && 'rotate-45 -translate-y-1')}></line>
            <line x1="3" y1="18" x2="21" y2="18" className={twMerge('origin-left transition', isOpen && '-rotate-45 translate-y-1')}></line>
          </svg>
        </button>
    </div>

    {
        isOpen && <motion.div
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 border border-orange-600/15  bg-orange-600/50 backdrop-blur shadow-lg rounded-full px-6 py-2 flex items-center justify-between">

        {/* Desktop Links */}
        <div className="flex space-x-4">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className="text-sm font-medium text-black"
            >
              {link.text}
            </a>
          ))}
        </div>
      </motion.div>     
    }
      
    </>
  );
};