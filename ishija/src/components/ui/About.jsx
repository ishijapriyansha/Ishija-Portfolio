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
            <div id="about" className=" pt-36 px-8 py-12 bg-gray-800 h-screen" >
                <div className="flex float-left w-full md:w-1/2">
                    <img src={image} alt="Profile" width={400} height={400} className="rounded-lg" />
                </div>
                <div className="aboutPlusdesc ">
                <div className="w-full md:w-1/2 flex ">
                    <TypewriterEffect words={words} className="!text-4xl text-gray-300 font-mono h-12 w-screen flex float-left" />
                </div>
                <div className="intro-text text-cyan-100 mt-4 text-xl font-thin">Hola, I am Ishija Priyansha. I am a third-year student at DSCE, Blr. I like all things web development and am passionate for the MERN stack. I have also tried my hands on python and its frameworks like fast-api and Django. My fascination with the wonders of AI has lead me to study Machine Learning as well. I like to spend my free time reading (fellow Murakami geeks say hi), and playing badminton when I feel like touching grass. I also like to entertain myself with some interesting subreddits (r/askHistorians) and some wacky ones (ahem r/chairsUnderWater), and r/catsWithJobs because what can be more amusing than cats being a better functioning member of society than you :P. I digress, so tldr: I love making web solutions.</div>
                </div>
            </div>

        </>

    );
};

export default About;
