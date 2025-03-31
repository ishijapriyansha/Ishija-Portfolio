import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from '../src/components/ui/Navbar'
// import Intro from './Intro'
import BackgroundBoxesDemo from '../src/components/ui/Background-boxes-demo';
import About from './components/ui/About';
import Projects from './components/ui/Card-hover-demo';
import { BrowserRouter } from 'react-router-dom';
import Projects1 from './components/ui/Projects';
function App() {
  

  return (
    <BrowserRouter>
    
  
  {/* <Intro/> */}
  <Navbar/>
  <BackgroundBoxesDemo />
  <About/>
  <Projects/>
  <Projects1/>
    </BrowserRouter>
  )
}

export default App
