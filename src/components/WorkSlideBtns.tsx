'use client'

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

interface WorkSlideBtnsProps {
  containerStyles?: string; // Tailwind classes for container
  btnStyles?: string;       // Tailwind classes for button
}

const WorkSlideBtns:React.FC<WorkSlideBtnsProps> = ({containerStyles, btnStyles}) => {

    const swiper = useSwiper()

  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretLeftBold/>
        </button>
        <button className={btnStyles} onClick={()=>swiper.slideNext()}>
            <PiCaretRightBold/>
        </button>

    </div>
  )
}

export default WorkSlideBtns