"use client";
import React from "react";
import { AnimatedTestimonials } from "./Animated-Projects";
import portfolioSnap from "../../assets/portfolioSnap.png";
import { TypewriterEffect } from "./TypewriterEffect";
import webscraperSnap from "../../assets/webscraperSnap.png"
import passwordmanagerSnap from '../../assets/PasswordManagerSnap.png'
import librarySnap from '../../assets/LibrarySnap.png'
import translatorSnap from '../../assets/TranslatorSnap.png'
import bingoSnap from '../../assets/BingoSnap.png'
import newsmanSnap from '../../assets/NewsmanSnap.png'
export default function Projects() {
    
  const projects = [
    {
      name: "Portfolio Website",
      designation: "React, Tailwind, Framer Motion",
      quote: "A personal portfolio website showcasing my work, skills, projects and contact details with smooth animations.",
      src: portfolioSnap, 
    },
    // {
    //   name: "Blogger",
    //   designation: "MongoDB, Django",
    //   quote: "Web application that allows users to create, update, and delete blog posts.",
    //   src: portfolioSnap,
    // },
    {
      name: "NewsMan",
      designation: "React, Node, Bootstrap",
      quote: "Your go-to website for staying updated on global events, featuring news displayed interactively across various categories.",
      src: newsmanSnap,
    },
    {
      name: "My Bingo",
      designation: "HTML, CSS, JavaScript",
      quote: "A fun 2-player game made using html, css and javascript.",
      src: bingoSnap,
    },
    {
        name: "Password Manager",
        designation: "MongoDB, Django, Jinja templates",
        quote: "Web app designed to securely store, manage, and evaluate the strength of passwords. Features a user-friendly interface and provides dynamic password strength feedback while maintaining the ability to view or hide stored passwords securely.",
        src: passwordmanagerSnap,
      },
      {
        name: "Library Management System",
        designation: "FastAPI, MongoDB, Jinja templates",
        quote: "A platform that manages and simplifies library operations.",
        src: librarySnap,
      },
      {
        name: "Web-Scraper",
        designation: "Beautiful Soup",
        quote: "Description",
        src: webscraperSnap,
      },
      {
        name: "Translator",
        designation: "Django, googleTrans",
        quote: "Web app designed to make language translation quick and convenient. This platform lets users easily translate text between multiple languages, including Japanese, Spanish, French, and more.",
        src: translatorSnap,
      },
      // {
      //   name: "Memos",
      //   designation: "React, MongoDB, ExpressJS",
      //   quote: "web application for managing personal memos in the cloud. Uses bcrypt and web tokens.",
      //   src: portfolioSnap,
      // },
  ];

 
  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-gray-50 dark:bg-gray-800">
         <TypewriterEffect words={[{text:"PROJECTS"}]} className="!text-4xl text-gray-300 text-left font-mono h-12 w-full sm:text-4xl pl-24" />
      <AnimatedTestimonials testimonials={projects} autoplay={false} />
    </section>
  );
}
