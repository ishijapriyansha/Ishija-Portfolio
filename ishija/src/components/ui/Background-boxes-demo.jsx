"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { cn } from "../../lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div> */}

      <Boxes />
      <h1 className={cn(" text-6xl text-white relative font-mono z-20")}>
        Hello, I am Ishija.
      </h1>
      <p className="text-center text-4xl mt-2 text-neutral-300 relative z-20">
        I am a full-stack web developer.
      </p>
      <button className="relative font-mono mt-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
    Know more about me!
  </span>
</button>





    </div>
  );
}
