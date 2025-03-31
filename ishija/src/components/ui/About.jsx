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
                <div className="intro-text text-cyan-100 mt-4 text-xl font-thin">Hola! I'm Ishija Priyansha, a third-year student at DSCE, Bangalore. I'm passionate about all things web development, especially the MERN stack. I've also explored Python and its frameworks, like FastAPI and Django. My fascination with AI has led me to study Machine Learning as well. Beyond coding, I love reading (fellow Murakami geeks, say hi!), and when I feel like touching grass, you’ll find me playing badminton. I also enjoy diving into interesting subreddits-whether it's the informative r/AskHistorians, the bizarre r/ChairsUnderWater, or r/CatsWithJobs (because, honestly, what’s more amusing than cats being more productive than us? :P).I digress, but long story short-I love building web solutions.</div>
                </div>
            </div>

        </>

    );
};

export default About;
