import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import githubLogo from "../../assets/github-brands.jpg";
import linkedinLogo from "../../assets/linkedin-in-brands.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <header className="bg-white font-bold text-lg border-b border-black fixed top-0 left-0 w-full text-black p-4 flex justify-between items-center z-20 shadow-md">
        
        {/* Left Side (Logo & Icons) */}
        <div className="flex items-center gap-x-4 ml-2">
          <a href="https://github.com/ishijapriyansha" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} className="h-8 hover:opacity-70" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ishija-priyansha" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} className="h-8 hover:opacity-70" alt="LinkedIn" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-6">
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#home">home</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#about">about</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#skills">skills</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#projects">projects</a>
          <a className="text-black hover:text-gray-500 hover:underline transition" href="#contact">contact</a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 p-4 md:hidden"
          >
            <a className="text-black hover:text-gray-500 transition" href="#home" onClick={() => setIsOpen(false)}>home</a>
            <a className="text-black hover:text-gray-500 transition" href="#about" onClick={() => setIsOpen(false)}>about</a>
            <a className="text-black hover:text-gray-500 transition" href="#skills" onClick={() => setIsOpen(false)}>skills</a>
            <a className="text-black hover:text-gray-500 transition" href="#projects" onClick={() => setIsOpen(false)}>projects</a>
            <a className="text-black hover:text-gray-500 transition" href="#contact" onClick={() => setIsOpen(false)}>contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
