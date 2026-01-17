import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'

const Message = () => {

    const messageRef = useRef()

    useGSAP(() => {
        const textSplit = SplitText.create(messageRef.current, { type: 'lines', mask: 'lines' })

        gsap.from(textSplit.lines, {
            scrollTrigger: {
                trigger: messageRef.current,
                start: 'top center'
            },
            yPercent: 100,
            autoAlpha: 0,
            stagger: .05,
            ease: 'expo.inOut'
        })
    }, [])
    return (
        <div className='py-30 px-20 flex items-center justify-center'>
            <div ref={messageRef} className="text-center tracking-tighter font-bold text-[calc(.75em+2vw)] font-mono leading-[150%]">
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet corporis, mollitia numquam quas aliquam officiis eos minima? Quidem recusandae nisi ratione architecto quod suscipit quisquam?
                </span><br />
                <a href='#readMore' className="font-normal underline text-[calc(.1em+1vw)]">Read More!</a>
            </div>
        </div>
    )
}

export default Message