"use client";
import React from "react";
import { HoverEffect } from "./Card-hover";
import { TypewriterEffect } from "./TypewriterEffect";
import fillerImage from "../../assets/pexels.jpg"
import jsLogo from "../../assets/jslogo.png"
import reactLogo from "../../assets/react.svg"
const items = [
    { title: "Javascript", image: jsLogo },
    { title: "React", image: reactLogo},
    { title: "MongoDB", image:fillerImage },
    { title: "ExpressJS", image:fillerImage },
    { title: "TailwindCSS", image:fillerImage},
    { title: "Git", image:fillerImage },
    { title: "Fast Api", image:fillerImage },
    { title: "C++", image:fillerImage },
    { title: "Python", image:fillerImage},
    { title: "Django", image:fillerImage },
    { title: "Flask", image:fillerImage },
    { title: "SQL", image:fillerImage },
  ];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-8 py-32 bg-gray-800">
      {/* <h2 className="text-3xl font-bold text-white text-center mb-8">  */}
        <TypewriterEffect words={[{text:"SKILLS"}]} className="!text-4xl text-gray-300 text-center font-mono h-12 w-full " />
        {/* </h2> */}
      <HoverEffect items={items} />
    </section>
  );
};

export default Projects;
