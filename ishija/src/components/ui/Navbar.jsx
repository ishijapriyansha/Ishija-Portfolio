import React from "react";
import fillerImage from "../../assets/pexels.jpg"
export default function Navbar() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-white font-bold text-lg border-b border-black fixed top-0 left-0 w-full text-black p-4 flex justify-end gap-x-8 items-center z-20 shadow-md">
        <a className="text-2xl mr-auto font-mono text-black">Frontend Practice</a>
        <nav className="flex gap-x-6">
          <a className="text-black hover:text-gray-500 transition" href="#home">Home</a>
          <a className="text-black hover:text-gray-500 transition" href="#projects">Projects</a>
          <a className="text-black hover:text-gray-500 transition" href="#blog">Blog</a>
          <a className="text-black hover:text-gray-500 transition" href="#faq">FAQ</a>
          <a className="text-black hover:text-gray-500 transition" href="#contact">Contact</a>
          <a className="text-black hover:text-gray-500 transition" href="#newsletter">Newsletter</a>
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