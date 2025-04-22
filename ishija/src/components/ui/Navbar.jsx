import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import githubLogo from "../../assets/github-brands.jpg";
import linkedinLogo from "../../assets/linkedin-in-brands.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <header className="bg-white font-bold text-lg border-b border-black fixed top-0 left-0 w-full text-black p-4 flex justify-between items-center z-30 shadow-md">
        

        <div className="flex items-center gap-x-4 ml-2">
          <a href="https://github.com/ishijapriyansha" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} className="h-8 hover:opacity-70" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ishija-priyansha" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} className="h-8 hover:opacity-70" alt="LinkedIn" />
          </a>
        </div>

  
        <nav className="hidden md:flex gap-x-6">
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#home">home</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#about">about</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#skills">skills</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#projects">projects</a>
        </nav>

  
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-40"
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div 
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-16 right-0 w-32 bg-white rounded-xl shadow-lg flex flex-col items-start gap-3 p-4 md:hidden z-30 border border-gray-200"
    >
      <a className="text-black font-medium hover:text-gray-600 transition" href="#home" >Home</a>
      <a className="text-black font-medium hover:text-gray-600 transition" href="#about" >About</a>
      <a className="text-black font-medium hover:text-gray-600 transition" href="#skills" >Skills</a>
      <a className="text-black font-medium hover:text-gray-600 transition" href="#projects" >Projects</a>
      {/* <a className="text-black font-medium hover:text-gray-600 transition" href="#contact" >Contact</a> */}
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
