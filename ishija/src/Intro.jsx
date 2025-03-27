import React from 'react'

export default function Intro() {
  return (
    <div className="h-screen bg-red-600 flex flex-col items-center justify-center">
         <div className="intro-lines text-center">
        <p className='text-8xl text-white'>Hello, I am Ishija.</p>
        <p className='text-7xl text-white'>I am a full stack web developer.</p>
        {/* <p className='text-gray-50 text-7xl'>Know more about me below</p> */}
        <button className=" bg-white mt-10 px-6 py-3 text-5xl text-red-600 border-solid border-2 border-red-600">
      Know more about me 
    </button>
        </div>
    </div>
  )
}
