import { useGSAP } from "@gsap/react"
import { RiArrowLeftLongLine, RiArrowUpLongLine } from "@remixicon/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef, useState } from "react"

const PhotoOnly = ({ img }) => {

    const [isOpenAcc, setIsOpenAcc] = useState(false)
    const paraAccRef = useRef()
    const accIcon = useRef()
    const tl = useRef()
    const photoOnlyRef = useRef()

    useGSAP(() => {
        
        const paraHeight = paraAccRef.current.offsetHeight
        gsap.set(paraAccRef.current, { maxHeight: 0, autoAlpha: 0 })
        tl.current = gsap.timeline({ paused: true })
            .to(paraAccRef.current, { maxHeight: paraHeight + 20, autoAlpha: 1, ease: 'expo.inOut' })
            .to(accIcon.current, { rotateZ: 180, ease: 'expo.inOut' }, '<')
        gsap.from(photoOnlyRef.current, {
            scrollTrigger: {
                trigger: photoOnlyRef.current,
                start: 'top 90%'
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
        <div className="flex flex-col-reverse items-center justify-center font-bold text-[calc(.75em+12vw)] leading-[1.1] overflow-hidden">
            <div ref={photoOnlyRef} className="relative">
                <div className="flex items-center cursor-pointer " onClick={toggleAcc}>
                    <span className="-translate-y-1 lg:-translate-y-3">(</span>
                    <img src={img} alt="" className="w-[calc(.75em+1vw)] aspect-square" />
                    <span className="-translate-y-1 lg:-translate-y-3">)</span>
                </div>

                <div className={`absolute top-1/2 -translate-y-1/2 right-[-15%] lg:right-[-34%]`}>
                    <div className={`hidden lg:flex flex-row-reverse gap-x-3 items-center`}>
                        <p className="text-[calc(.1em+.1vw)] font-normal">
                            Click Me
                        </p>
                        <span>
                            <RiArrowLeftLongLine />
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

export default PhotoOnly