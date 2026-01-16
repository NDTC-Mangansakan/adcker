import { useGSAP } from "@gsap/react"
import { RiArrowLeftLongLine, RiArrowRightLongLine, RiArrowUpLongLine } from "@remixicon/react"
import gsap from "gsap"
import { useRef, useState } from "react"

const accordionImg1 = 'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768458914/pexels-photo-792381_e1o84d.jpg'
const accordionImg2 = 'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768458944/kitty-cat-kitten-pet-45201_smohsf.jpg'
const accordionImg3 = 'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768458987/pexels-photo-326900_khpx6q.jpg'

const AccordionPart = () => {

  const [isAcc1Open, setIsAcc1Open] = useState(false)
  const [isAcc2Open, setIsAcc2Open] = useState(false)
  const [isAcc3Open, setIsAcc3Open] = useState(false)
  const para1Ref = useRef()
  const para2Ref = useRef()
  const para3Ref = useRef()
  const tl1 = useRef()
  const tl2 = useRef()
  const tl3 = useRef()
  useGSAP(() => {
    const para1Height = para1Ref.current.offsetHeight
    const para2Height = para2Ref.current.offsetHeight
    const para3Height = para3Ref.current.offsetHeight

    gsap.set(para1Ref.current, { maxHeight: 0 })
    gsap.set(para2Ref.current, { maxHeight: 0 })
    gsap.set(para3Ref.current, { maxHeight: 0 })

    tl1.current = gsap.timeline({ paused: true })
      .to(para1Ref.current, { maxHeight: `${para1Height}px`, ease: 'expo.inOut' })
    tl2.current = gsap.timeline({ paused: true })
      .to(para2Ref.current, { maxHeight: `${para2Height}px`, ease: 'expo.inOut' })
    tl3.current = gsap.timeline({ paused: true })
      .to(para3Ref.current, { maxHeight: `${para3Height}px`, ease: 'expo.inOut' })
  }, [])
  const toggleAcc1 = () => {
    if (isAcc1Open) {
      tl1.current.reverse()
    }
    else {
      tl1.current.play()
    }

    setIsAcc1Open(prev => !prev)
  }
  const toggleAcc2 = () => {
    if (isAcc2Open) {
      tl2.current.reverse()
    }
    else {
      tl2.current.play()
    }

    setIsAcc2Open(prev => !prev)
  }

  const toggleAcc3 = () => {
    if (isAcc3Open) {
      tl3.current.reverse()
    }
    else {
      tl3.current.play()
    }

    setIsAcc3Open(prev => !prev)
  }

  return (
    <div className='py-30 flex flex-col gap-y-3 text-[calc(.75em+12vw)] font-extrabold text-center uppercase'>

      {
        ['for', 'beuty', 'natural', 'and', 'wellness', ''].map((word, i) => {
          if (i % 2 === 0) {
            return (
              <div key={i} className="flex justify-center overflow-hidden leading-[.8] z-10 bg-white">
                <div className="relative">
                  {word}
                </div>
              </div>
            )
          }
          else if (i === 5) {
            return (
              <div key={i} className="flex flex-col-reverse gap-y-3">
                <div className="flex justify-center leading-[.8] z-10 bg-white">
                  <div className="flex gap-x-2 sm:gap-x-5 cursor-pointer relative" onClick={toggleAcc3}>
                    <span className="-translate-y-[10%]">(</span>
                    <img src={accordionImg3} alt="" className="w-[calc(.75em+1vw)] aspect-square" />
                    <span className="-translate-y-[10%]">)</span>
                    <div className={`absolute top-1/2 -right-[20%] sm:-right-[10%] lg:-right-[30%] -translate-y-1/2 text-[calc(.02em+1vw)] font-normal cursor-auto pointer-events-none`}>
                      <div className="hidden lg:flex lg:items-center lg:gap-x-3">
                        <RiArrowLeftLongLine />
                        <span>Click Me</span>
                      </div>
                      <div className="lg:hidden">
                        <RiArrowUpLongLine />
                      </div>
                    </div>

                  </div>
                </div>
                <p ref={para3Ref} className="relative text-[calc(.10em+1vw)] font-normal px-[10%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolores eaque aperiam hic culpa velit officia similique, sunt in quis!</p>
              </div>
            )
          }
          else {
            return (
              <div key={i} className={`flex items-center ${i === 1 ? 'flex-col' : 'flex-col-reverse'}`}>
                <div className="w-full z-10 bg-white flex justify-center">
                  <div className={`flex ${i === 3 && 'flex-row-reverse'} border relative justify-center gap-x-2 sm:gap-x-5 lg:gap-x-10 leading-[.8] cursor-pointer`} onClick={i === 1 ? toggleAcc1 : toggleAcc2}>
                    <span>{word}</span>
                    <div className="flex gap-x-2 sm:gap-x-5">
                      <span className="-translate-y-[10%]">(</span>
                      <img src={i === 1 ? accordionImg1 : accordionImg2} alt="" className="w-[calc(.75em+1vw)] aspect-square" />
                      <span className="-translate-y-[10%]">)</span>
                    </div>

                    <div className={`absolute top-1/2 ${i === 1 ? '-right-[10%] sm:-right-[5%] lg:-right-[12%]' : '-left-[10%] sm:-left-[5%] lg:-left-[15%]'} -translate-y-1/2 text-[calc(.02em+1vw)] font-normal cursor-auto pointer-events-none `}>
                      <div className={`hidden lg:flex lg:items-center lg:gap-x-3 ${i === 3 && 'flex-row-reverse'}`}>
                        {i === 1 ? <RiArrowLeftLongLine /> : <RiArrowRightLongLine />}
                        <span>Click Me</span>
                      </div>
                      <div className="lg:hidden">
                        <RiArrowUpLongLine />
                      </div>
                    </div>
                  </div>
                </div>
                <p ref={i === 1 ? para1Ref : para2Ref} className="border relative text-[calc(.10em+1vw)] font-normal px-[10%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus ipsum cum fugiat vero consequatur ea voluptates neque nulla quidem!
                </p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default AccordionPart