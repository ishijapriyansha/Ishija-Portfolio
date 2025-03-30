import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from '../src/components/ui/Navbar'
// import Intro from './Intro'
import BackgroundBoxesDemo from "./components/ui/Background-boxes-demo";
import About from './components/ui/About';
function App() {
  

  return (
    <>
    
  <Navbar/>
  {/* <Intro/> */}
  <BackgroundBoxesDemo />
  <About/>
    </>
  )
}

export default App
