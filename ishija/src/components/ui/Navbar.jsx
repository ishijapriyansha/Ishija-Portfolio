import React from "react";
import githubLogo from "../../assets/github-brands.jpg";
import linkedinLogo from "../../assets/linkedin-in-brands.jpg"

export default function Navbar() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-white font-bold text-lg border-b border-black fixed top-0 left-0 w-full text-black p-4 flex justify-end gap-x-8 items-center z-20 shadow-md">
        <div className="text-2xl mr-auto font-mono text-black flex gap-x-6 ml-2">
          <a className="hover:text-gray-500 transition text-black" href="https://github.com/ishijapriyansha" target="_blank" rel="noopener noreferrer" ><img src={githubLogo}  className="h-8 hover:opacity-70" alt="GitHub" /></a>
          <a className="hover:text-gray-500 transition text-black"  href="https://www.linkedin.com/in/ishija-priyansha-7900782a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} className="h-8 hover:opacity-70" /></a>
          </div>
        <nav className="flex gap-x-6">
          <a className="text-black hover:text-gray-500 hover:underline transition " href="#home">home</a>
          <a className="text-black hover:text-gray-500 transition hover:underline " href="#about">about</a>
          <a className="text-black hover:text-gray-500 transition hover:underline" href="#skills">skills</a>
          <a className="text-black hover:text-gray-500 transition hover:underline" href="#projects">projects</a>
          <a className="text-black hover:text-gray-500 transition hover:underline" href="#contact">contact</a>
          {/* <a className="text-black hover:text-gray-500 transition" href="#contact">Contact</a>
          <a className="text-black hover:text-gray-500 transition" href="#newsletter">Newsletter</a> */}
        </nav>
      </header>
      {/* <div className="h-[64px] w-full"></div> */}

      {/* {/* 
      <nav className="sticky top-16 w-full font-mono flex justify-start gap-x-8 p-4 bg-gray-100 border-b border-gray-300 z-10">
        <a className="text-black hover:text-gray-500 transition" href="#about">About</a>
        <a className="text-black hover:text-gray-500 transition" href="#jobs">Jobs</a>
        <a className="text-black hover:text-gray-500 transition" href="#apprenticeship">Apprenticeship</a>
      </nav>
      <img className='h-1/2 w-screen p-5' src={fillerImage} alt="filler" /> */}
    </div>
  );
}