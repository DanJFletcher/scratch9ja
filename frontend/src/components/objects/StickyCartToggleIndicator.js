import React,{useContext, createRef} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { StickyCartContext } from '../../contexts/StickyCartContext'


const StickyCartToggleIndicator = () => {

    const stickyCartToggleRef = createRef(null)

    const { setIsVisible } = useContext(StickyCartContext)
    useScrollPosition( ({currPos}) =>{
        if(-(currPos.y) >= stickyCartToggleRef.current.offsetTop){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    })

    return (
        <div>
            <div ref={stickyCartToggleRef} className="page-divider"></div>
        </div>
    );
}

export default StickyCartToggleIndicator;