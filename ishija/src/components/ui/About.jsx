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
            <div id="about" className=" pt-10 pb-12 md:pt-36 px-8 bg-gray-800 h-screen sm:flex-col sm:items-center md:items-center sm:gap-8 md:gap-8" >
                <div className="flex float-left w-full md:w-1/2">
                    <img src={image} alt="Profile" className=" w-1/3 h-1/3 rounded-lg sm:w-80 sm:h-80 md:w-96 md:h-96 pb-6" />
                </div>
                <div className="aboutPlusdesc ">
                <div className="w-full md:w-1/2 flex ">
                    <TypewriterEffect words={words} className="!text-4xl text-gray-300 font-mono h-12 w-screen flex  sm:text-4xl" />
                </div>
                <div className="intro-text text-gray-300 mt-4 !text-lg font-mono max-h-screen text-left">Hi! I’m Ishija Priyansha, a third-year student at DSCE, Bangalore, passionate about web development, especially the MERN stack. I’ve also explored Python frameworks like FastAPI and Django, and I’m diving into AI and ML. Outside of coding, I love reading (Murakami fans, say hi!), playing badminton, and getting lost in quirky subreddits like r/AskHistorians, r/ChairsUnderWater, and r/CatsWithJobs (because cats being more productive than us is hilarious). Long story short, I build web solutions. </div>
                </div>
            </div>

        </>

    );
};

export default About;
