import React, {useContext} from 'react'
import { Tooltip } from '@trendmicro/react-tooltip'
import { FiShoppingCart } from 'react-icons/fi'
import { StickyCartContext } from '../../contexts/StickyCartContext'

const StickyCart = (props) => {

    const {isVisible} = useContext(StickyCartContext)
    const visibility = isVisible || props.isVisible ? "visible" : "invisible"

    return (
        <div>

            <div className={visibility}>
                <Tooltip placement="left" content="View Cart">
                    <div className="sticky-cart flex justify-center">
                        <div className="relative">
                            <FiShoppingCart />
                            <div className="flex justify-center cart-counter">
                                <span>0</span>
                            </div>
                        </div>
                        
                    </div>
                </Tooltip>
            </div>

        </div>
    );
}

export default StickyCart;  