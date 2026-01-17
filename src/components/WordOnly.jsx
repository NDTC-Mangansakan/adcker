import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"

const WordOnly = ({ word }) => {

    const wordRef = useRef()
    useGSAP(() => {
        const wordSplit = SplitText.create(wordRef.current, {type: 'words', mask: 'words'})

        gsap.from(wordSplit.words, {
            scrollTrigger: {
                trigger: wordRef.current,
                start: 'top 70%',
            },
            yPercent: 100,
            ease: 'expo.inOut'
        })
    }, [])
    return (
        <div ref={wordRef} className="text-center text-[calc(.75em+12vw)] uppercase font-bold leading-[.8] relative bg-white">
            {word}
        </div>
    )
}

export default WordOnly