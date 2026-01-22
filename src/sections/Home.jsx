import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"

const vidSrc = 'https://res.cloudinary.com/dwwy3zuqg/video/upload/v1768186002/4460336_wubcto.mp4'
const Home = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    useGSAP(() => {
        function videoAnimation() {
            gsap.set(".video", {
                scale: 0
            })

            gsap.to('.video', {
                scrollTrigger: {
                    trigger: '.vid-con',
                    start: 'top bottom',
                    end: `bottom bottom`,
                    scrub: true,
                },
                scale: 1
            })
        }

        gsap.from('.home-title', {
            delay: .5,
            stagger: .03,
            y: 170,
            duration: 1,
            ease: 'expo.inOut'
        })

        if(isDesktopOrLaptop)videoAnimation()
    }, [isDesktopOrLaptop])
    return (
        <>
            <div className="h-screen flex flex-col justify-center">
                <div className="w-full overflow-hidden flex justify-center">
                    <div className="home-title text-[calc(.75em+12vw)] font-extrabold leading-[.86]">THE ART</div>
                </div>

                <div className="w-[calc(.75em+45vw)] overflow-hidden mx-auto mt-5 flex justify-center">
                    <div className="home-title w-1/4 text-end text-[calc(.75em+10vw)] font-extrabold leading-[.86]">
                        *
                    </div>

                    <div className="home-title w-1/2 flex items-center">
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
                    <div className="home-title w-1/4 flex items-center text-[calc(.5em+1vw)] font-bold">
                        Showreel
                    </div>
                </div>

                {
                    ['of', 'nature'].map(word => (
                        <div key={word} className="w-full overflow-hidden flex justify-center">
                            <div className="home-title text-[calc(.75em+12vw)] font-extrabold leading-[.86] uppercase">
                                {word}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="vid-con h-screen w-screen">
                <video src={vidSrc} className="video h-full w-full object-cover" autoPlay muted loop></video>
            </div>

        </>
    )
}

export default Home