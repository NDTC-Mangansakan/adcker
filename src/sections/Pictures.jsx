import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const imgs = [
    'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768639204/pexels-photo-10836116_z9kbbn.jpg',
    'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768639248/pexels-photo-28900185_bplmlc.jpg',
    'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768639270/pexels-photo-712392_brbxcb.jpg',
    'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768639306/pexels-photo-7042926_iiws7s.jpg',
    'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768639376/pexels-photo-1456291_e4fvvj.jpg'
]
const Pictures = () => {

    useGSAP(() => {
        gsap.from('.picture-container', {
            y: 30,
            autoAlpha: 0,
            ease: 'expo.inOut',
            duration: 1,
            scrollTrigger: {
                trigger: '.picture-container',
                start: 'top 80%',
            }
        })
    }, [])
    return (
        <div className='picture-container pb-30 px-10 flex flex-col lg:flex-row items-center justify-center gap-15 overflow-hidden'>
            {
                imgs.map((img, i) => (
                    <div key={img} className='w-full max-w-60 lg:max-w-none lg:w-1/5 aspect-square flex flex-col'>
                        <span className="font-bold">( {i+1} )</span>
                        <img src={img} alt="" className="w-full aspect-square" />
                    </div>
                ))
            }
        </div>
    )
}

export default Pictures