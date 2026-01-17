import React from 'react'
import LoadingScreen from './components/LoadingPage'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all'
import AccordionPart from './sections/AccordionPart'
import Message from './sections/Message'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother)

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <AccordionPart/>
      <Message/>
    </>
  )
}

export default App