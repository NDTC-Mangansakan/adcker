import React from 'react'
import LoadingScreen from './components/LoadingPage'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import AccordionPart from './sections/AccordionPart'
import Message from './sections/Message'
import Pictures from './sections/Pictures'
import Footer from './sections/Footer'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother)

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: '#smooth-wrapper',
      smooth: 2,
      smoothTouch: .1
    })
  })
  return (
    <div id='smooth-wrapper'>
      <div id="smooth-content">
        <Navbar />
        <Home />
        <AccordionPart />
        <Message bgColor='white' />
        <Pictures />
        <Message bgColor='black' />
        <Footer />
      </div>
    </div>
  )
}

export default App