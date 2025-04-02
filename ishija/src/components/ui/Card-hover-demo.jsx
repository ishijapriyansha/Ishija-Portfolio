"use client";
import React from "react";
import { HoverEffect } from "./Card-hover";
import { TypewriterEffect } from "./TypewriterEffect";
import fillerImage from "../../assets/pexels.jpg";
import jsLogo from "../../assets/jslogo.png";
import reactLogo from "../../assets/reactlogo1.png";
import mongoLogo from "../../assets/mongologo.png";
import expressLogo from "../../assets/expresslogo1.png";
import tailwindLogo from "../../assets/tailwindlogo1.png";
import gitLogo from "../../assets/gitlogo.png";
import fastapiLogo from "../../assets/fastapilogo.png";
import cppLogo from "../../assets/cpplogo.png";
import pythonLogo from "../../assets/pythonlogo.png";
import djangoLogo from "../../assets/djangologo.png";
import flaskLogo from "../../assets/flasklogo1.png";
import sqlLogo from "../../assets/sqlLogo.png";
import dockerLogo from "../../assets/dockerlogo.png";
import { BackgroundLines } from "./Background-Lines";

const items = [
  { title: "Javascript", image: jsLogo },
  { title: "React", image: reactLogo },
  { title: "MongoDB", image: mongoLogo },
  { title: "ExpressJS", image: expressLogo },
  { title: "TailwindCSS", image: tailwindLogo },
  { title: "Git", image: gitLogo },
  { title: "Fast Api", image: fastapiLogo },
  // { title: "C++", image: cppLogo },
  { title: "Python", image: pythonLogo },
  { title: "Django", image: djangoLogo },
  { title: "Flask", image: flaskLogo },
  { title: "SQL", image: sqlLogo },
  { title: "Docker", image: dockerLogo },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gray-900 flex flex-col items-center py-20 sm:pt-36 sm:pb-32"
    >
       <TypewriterEffect words={[{text:"SKILLS"}]} className="!text-4xl text-gray-300 text-left font-mono h-12 w-full sm:text-4xl pl-24" />
      <div className="w-full px-4 sm:px-8">
        <HoverEffect
          items={items}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:p-12" 
        />
      </div>
    </section>
  );
};

export default Skills;
