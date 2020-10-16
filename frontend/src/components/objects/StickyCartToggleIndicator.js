import React,{useContext, createRef} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { CartContext } from '../../contexts/CartContext'


const StickyCartToggleIndicator = () => {

    const stickyCartToggleRef = createRef(null)

    const { setStickyCartVisibility } = useContext(CartContext)
    useScrollPosition( ({currPos}) =>{
        if(-(currPos.y) >= stickyCartToggleRef.current.offsetTop){
            setStickyCartVisibility(true)
        }else{
            setStickyCartVisibility(false)
        }
    })

    return (
        <div>
            <div ref={stickyCartToggleRef} className="page-divider"></div>
        </div>
    );
}

export default StickyCartToggleIndicator;