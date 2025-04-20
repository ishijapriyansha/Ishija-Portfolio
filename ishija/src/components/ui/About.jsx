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
        <>
            <div id="about" className=" xs:pt-12  md:pt-36 px-8 pb-12 bg-gray-800 h-screen sm:flex-col sm:items-center md:items-center sm:gap-8 md:gap-8" >
                <div className="flex float-left w-full md:w-1/2">
                    <img src={image} alt="Profile" className=" w-1/3 h-1/3 rounded-lg sm:w-80 sm:h-80 md:w-96 md:h-96" />
                </div>
                <div className="aboutPlusdesc ">
                <div className="w-full md:w-1/2 flex ">
                    <TypewriterEffect words={words} className="!text-4xl text-gray-300 font-mono h-12 w-screen flex  sm:text-4xl" />
                </div>
                <div className="intro-text text-gray-300 mt-4 !text-lg font-mono max-h-screen text-left">Hola! I'm Ishija Priyansha, a third-year student at DSCE, Bangalore. I'm passionate about all things web development, especially the MERN stack. I've also explored Python frameworks like FastAPI and Django. My fascination with AI has led me to study ML as well. Beyond coding, I love reading (fellow Murakami geeks, say hi!), and when I feel like touching grass, you’ll find me playing badminton. I also enjoy diving into interesting subreddits-whether it's the creative r/AskHistorians, the wacky r/ChairsUnderWater, or r/CatsWithJobs (because, honestly, what’s more amusing than cats being more productive than us? :P).I digress, but long story short-I love building web solutions.</div>
                </div>
            </div>

        </>

    );
};

export default About;
