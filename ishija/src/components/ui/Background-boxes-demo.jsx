"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { cn } from "../../lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      {/* <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div> */}

      <Boxes />
      <h1 className={cn(" text-6xl text-white relative z-20 font-mono")}>
        Hello I am Ishija.
      </h1>
      <p className="text-center text-4xl mt-2 text-neutral-300 relative z-20">
        I am a full-stack web developer.
      </p>
      <button className="mt-4 h-1/8 z-50 w-auto border-2 border-s-black" > Know more about me!</button>
    </div>
  );
}
