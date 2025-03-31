"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function BackgroundBoxesDemo() {
  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center px-4 text-center"
    >
      <Boxes />

      {/* Heading from Left */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }} // Starts off-screen left
        animate={{ opacity: 1, x: 0 }} // Moves to center
        transition={{ duration: 1, ease: "easeOut" }}
        className={cn(
          "text-4xl md:text-6xl text-white relative font-mono z-20 mt-8 sm:mt-12"
        )}
      >
        Hello, I am Ishija.
      </motion.h1>

      {/* Subtext from Right */}
      <motion.p
        initial={{ opacity: 0, x: 100 }} // Starts off-screen right
        animate={{ opacity: 1, x: 0 }} // Moves to center
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-lg sm:text-2xl md:text-3xl mt-2 text-neutral-300 relative z-10"
      >
        I am a full-stack web developer.
      </motion.p>

      {/* Button with Fade-in Effect */}
      <motion.button
  onClick={handleClick}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
  className="relative font-mono mt-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-4
  before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-full before:bg-white/20 before:transition-none hover:before:bg-white/20"
>
  <span className="relative px-5 py-2.5 transition-all ease-in duration-1200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
    Know more about me!
  </span>
</motion.button>

    </div>
  );
}
