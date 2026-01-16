import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"

const menuLinks = [
    { name: 'index', subName: 'home' },
    { name: 'services', subName: 'what we do' },
    { name: 'our work', subName: 'projects' },
    {},
    { name: 'about', subName: 'who we are' },
    { name: 'contact', subName: 'get in touch' }
]

const vidSrc = 'https://res.cloudinary.com/dwwy3zuqg/video/upload/v1768186002/4460336_wubcto.mp4'

const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const navRef = useRef()
    const linksRef = useRef([])
    const tl = useRef()
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    useGSAP(() => {
        gsap.set(navRef.current, { yPercent: -100 })
        gsap.set([linksRef.current], { yPercent: 100 })

        tl.current = gsap
            .timeline({ paused: true })
            .to(navRef.current, { yPercent: 0, duration: 1, ease: 'expo.inOut' })
            .to(linksRef.current, { yPercent: 0, stagger: .05, ease: 'expo.inOut' })
    }, [])

    const toggleMenu = () => {
        if (isOpenMenu) {
            tl.current.reverse()
        }
        else {
            tl.current.play()
        }

        setIsOpenMenu(prev => !prev)
    }

    useEffect(() => {
        if (isOpenMenu) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [isOpenMenu])
    return (
        <>
            <div ref={navRef} className='fixed z-99 h-screen w-full bg-black'>
                <div className="flex flex-col py-10 h-screen items-center justify-center gap-y-5 lg:gap-y-0">
                    {
                        menuLinks.map((link, i) => {
                            if (i === 3) {
                                return (
                                    <div key={i} className="overflow-hidden text-white">
                                        <div ref={e => linksRef.current[i] = e} className="flex justify-center text-white overflow-hidden">
                                            <div className="w-1/4 text-end text-[calc(.75em+10vw)] font-extrabold leading-[.86]">
                                                *
                                            </div>

                                            <div className="w-1/2 flex items-center">
                                                <div className="w-1/4 text-[calc(.75em+10vw)] font-extrabold leading-[.86] text-center -translate-y-[15%]">
                                                    (
                                                </div>
                                                <div className="w-1/2 flex justify-center">
                                                    <video src={vidSrc}
                                                        className="w-[calc(.75em+10vw)] aspect-square"
                                                        autoPlay loop muted></video>
                                                </div>

                                                <div className="w-1/4 text-[calc(.75em+10vw)] font-extrabold leading-[.86] text-center -translate-y-[15%]">
                                                    )
                                                </div>
                                            </div>
                                            <div className="w-1/4 flex items-center text-[calc(.5em+1vw)] font-bold">
                                                Showreel
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <a key={i} href="" className="text-white text-[calc(.75em+7vw)] leading-[90%] uppercase font-bold overflow-hidden">
                                        <div ref={e => linksRef.current[i] = e} className="relative group overflow-hidden">
                                            <span className="transition-transform block group-hover:-translate-y-full duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]">
                                                {link.name}
                                            </span>

                                            <span className="absolute -bottom-full left-0 transition-transform group-hover:-translate-y-full duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]">
                                                {link.name}
                                            </span>
                                        </div>
                                    </a>
                                )
                            }
                        })
                    }
                </div>
            </div>


            <a href="" className={`fixed left-10 top-5 overflow-hidden cursor-pointer z-99 ${isOpenMenu ? 'text-white' : 'text-black'}`}>
                <div className="group relative">
                    <h1 className={`text-xl transition-transform lg:group-hover:-translate-y-full duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]`}>adcker</h1>
                    <h1 className={`text-xl absolute transition-transform lg:group-hover:-translate-y-full duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]`}>adcker</h1>
                </div>
            </a>

            <div className={`fixed right-10 top-5 overflow-hidden cursor-pointer z-99 ${isOpenMenu ? 'text-white' : 'text-black'}`} onClick={toggleMenu}>
                <div className="group relative">
                    <h1 className={`text-xl font-bold transition-transform lg:group-hover:-translate-y-full duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]`}>Menu</h1>
                    <h1 className={`text-xl font-bold absolute transition-transform lg:group-hover:-translate-y-full duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]`}>Menu</h1>
                </div>
            </div>
        </>
    )
}

export default Navbar