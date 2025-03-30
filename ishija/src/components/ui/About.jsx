"use client";
import React from "react";
import image from '../../assets/avatar2.jpg'
import { TypewriterEffect } from "./TypewriterEffect";

const About = () => {
  const words = [
    { text: "ABOUT" },
    // { text: "specialiSze" },
    // { text: "in webd" },
  ];

  return (
    <div className="bg-gray-800">  <section id="about" className="flex flex-col md:flex-row pt-10 gap-6 px-8 py-12">
      <div className="w-full md:w-1/2">
        <img src={image} alt="Profile" width={400} height={400} className="rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 flex ">
        <TypewriterEffect words={words} className="!text-4xl text-gray-300 font-mono" />
      </div>
    </section>
    </div>  
  );
};

export default About;
