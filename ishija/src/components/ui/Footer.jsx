import React from 'react'
export default function Footer() {
    return (
     <>
     <div id="contact" className='bg-gray-950 relative flex flex-col items-center'>
     <button 
    className="p-2 w-1/12 text-white bg-gray-900 writing-mode-vertical-rl absolute top-[-20px] font-mono 
               transition-transform duration-300 ease-in-out hover:-translate-y-2 "
    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: "smooth" })}
>
    ^
</button>

        <p className='text-xs p-9 text-gray-300 text-center font-thin'>ISHIJA PRIYANSHA @2025</p>
     </div>
     </>
    )
}

