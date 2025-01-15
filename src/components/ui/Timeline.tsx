"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Sun } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const updateContentHeight = () => {
    if (contentRef.current) {
      const newHeight = contentRef.current.offsetHeight;
      setContentHeight(newHeight);
    }
  };

  useEffect(() => {
    updateContentHeight(); // Set initial content height

    // Update height on window resize for responsive design
    const handleResize = () => {
      updateContentHeight();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Track entire container
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, contentHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full flex flex-col bg-black font-sans md:px-10 justify-end"
      ref={containerRef}
    >
      <div
        ref={contentRef}
        className="relative flex flex-col justify-end max-w-7xl mx-auto pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Fixed Icon and Title */}
            <div className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <Sun className="text-orange-600" />
              </div>
              <h3 className="hidden md:block md:absolute md:left-14 text-xl md:text-2xl font-semibold text-white">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative flex flex-col pl-20 pr-4 md:pl-4 w-full text-white">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              <span>{item.content}</span>
            </div>
          </div>
        ))}
        {/* Timeline Vertical Line */}
        <div
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
          style={{
            height: `${contentHeight}px`, // Set height dynamically
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-300 via-orange-600 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};


