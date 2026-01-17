import { useGSAP } from "@gsap/react"
import { RiArrowUpLongLine } from "@remixicon/react"
import gsap from "gsap"
import { useRef, useState } from "react"

const WordWithPhoto = ({ word, img, imgAndWordDirection, titleAndContentDirection, toolTipPosition, directionIcon, toolTipOrder }) => {

    const [isOpenAcc, setIsOpenAcc] = useState(false)
    const paraAccRef = useRef()
    const accIcon = useRef()
    const tl = useRef()
    const wordWithPhotoRef = useRef()

    useGSAP(() => {
        const paraHeight = paraAccRef.current.offsetHeight
        gsap.set(paraAccRef.current, { maxHeight: 0, autoAlpha: 0 })
        tl.current = gsap.timeline({ paused: true })
            .to(paraAccRef.current, { maxHeight: paraHeight + 20, autoAlpha: 1, ease: 'expo.inOut' })
            .to(accIcon.current, { rotateZ: 180, ease: 'expo.inOut' }, '<')

        gsap.from(wordWithPhotoRef.current, {
            scrollTrigger: {
                trigger: wordWithPhotoRef.current,
                start: 'top 70%',
            },
            yPercent: 100,
            ease: 'expo.inOut'
        })    
    }, [])

    const toggleAcc = () => {
        if (isOpenAcc) {
            tl.current.reverse()
        } else {
            tl.current.play()
        }

        setIsOpenAcc(prev => !prev)
    }


    return (
        <div className={`flex flex-col ${titleAndContentDirection} justify-center items-center font-bold text-[calc(.75em+12vw)] uppercase leading-[1.1] overflow-hidden`}>
            <div ref={wordWithPhotoRef} className={`flex ${imgAndWordDirection} gap-x-3 items-center justify-center cursor-pointer relative`} onClick={toggleAcc}>
                <span>{word}</span>
                <div className='flex items-center'>
                    <span className="-translate-y-1 lg:-translate-y-3">(</span>
                    <img src={img} alt="" className="w-[calc(.75em+1vw)] aspect-square" />
                    <span className="-translate-y-1 lg:-translate-y-3">)</span>
                </div>

                <div className={`absolute top-1/2 -translate-y-1/2 ${toolTipPosition}`}>
                    <div className={`hidden lg:flex gap-x-3 items-center ${toolTipOrder}`}>
                        <p className="text-[calc(.1em+.1vw)] font-normal">
                            Click Me
                        </p>
                        <span>
                            {directionIcon}
                        </span>
                    </div>
                    <span ref={accIcon} className="lg:hidden block">
                        <RiArrowUpLongLine />
                    </span>
                </div>
            </div>

            <div ref={paraAccRef} className="text-[calc(.15em+1vw)] font-normal leading-none text-center px-[10%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus ullam eum, optio reprehenderit neque, quod repellat rem provident excepturi odio officiis, vero soluta similique.
            </div>
        </div>
    )
}

export default WordWithPhoto