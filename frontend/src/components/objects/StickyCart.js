import React, {useContext} from 'react'
import { Tooltip } from '@trendmicro/react-tooltip'
import { FiShoppingCart } from 'react-icons/fi'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

const StickyCart = (props) => {

    const { cartTotal } = useContext(CartContext)
    const {stickyCartVisibility} = useContext(CartContext)
    const visibility = stickyCartVisibility || props.isVisible ? "visible" : "invisible"

    //const totalItemsIncart = cartTotal()

    return (
        <div>

            <Link to="/cart" className={visibility}>
                <Tooltip placement="left" content="View Cart">
                    <div className="sticky-cart flex justify-center">
                        <div className="relative">
                            <FiShoppingCart />
                            <div className="flex justify-center cart-counter">
                                <span> { cartTotal() } </span>
                            </div>
                        </div>
                    </div>
                </Tooltip>
            </Link>

        </div>
    );
}

export default StickyCart;  