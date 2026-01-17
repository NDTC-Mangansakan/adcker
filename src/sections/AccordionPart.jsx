import { RiArrowLeftLongLine, RiArrowRightLongLine } from "@remixicon/react"
import PhotoOnly from "../components/PhotoOnly"
import WordOnly from "../components/WordOnly"
import WordWithPhoto from "../components/WordWithPhoto"


const accordionImg1 = 'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768458914/pexels-photo-792381_e1o84d.jpg'
const accordionImg2 = 'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768458944/kitty-cat-kitten-pet-45201_smohsf.jpg'
const accordionImg3 = 'https://res.cloudinary.com/dwwy3zuqg/image/upload/v1768458987/pexels-photo-326900_khpx6q.jpg'

const PARTS = 6

const AccordionPart = () => {

  function wordGiven(i) {
    return i === 0 ? 'for' : i === 2 ? 'nature' : i === 1 ? 'beuty' : i === 3 ? 'and' : 'wellness'
  }

  return (
    <div className="py-30">
      {
        Array.from({ length: PARTS }).map((_, i) => {
          if (i % 2 === 0) {
            return <WordOnly key={i} word={wordGiven(i)} />
          }
          else if (i === PARTS - 1) {
            return <PhotoOnly
              key={i}
              img={accordionImg3} />
          }
          else {
            return <WordWithPhoto
              key={i}
              word={wordGiven(i)}
              img={i === 1 ? accordionImg1 : accordionImg2}
              imgAndWordDirection={i !== 1 && 'flex-row-reverse'}
              titleAndContentDirection={i !== 1 && 'flex-col-reverse'}
              toolTipPosition={i === 1 ? 'right-[-10%] sm:right-[-5%] lg:right-[-14%]' : 'left-[-10%] sm:left-[-5%] lg:left-[-20%]'}
              directionIcon={i === 1 ? <RiArrowLeftLongLine /> : <RiArrowRightLongLine  />}
              toolTipOrder={i === 1 && 'flex-row-reverse'} />
          }
        })
      }
    </div>
  )
}

export default AccordionPart