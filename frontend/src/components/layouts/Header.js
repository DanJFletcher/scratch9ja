import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imgs/logo.png'
import { FiShoppingCart } from "react-icons/fi"
import { Tooltip} from '@trendmicro/react-tooltip';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {

    const { cartTotal } = useContext(CartContext)

    return (
        <div>
            <div className="flex justify-between w-full page-header">
                <div className=" logo justify-between ">
                    <img src={logo} alt="logo"/>
                </div>

                {/* <div className="preferred-items">
                    <input type="text" placeholder="What will you love to win?"/>
                    <span> <Icon.Search /> </span>
                </div> */}
           
                <div className="flex justify-between ctas">
            <Link to="/cart" >
                    <div className="cart-container">
                        <Tooltip placement="top" content="View Cart">
                            <FiShoppingCart />
                        </Tooltip>
                        <div className="flex justify-center cart-counter">
                            <span>{cartTotal()}</span>
                        </div>
                    </div>
                 </Link>

                    <Link to="/login" className="custom-btn header-btn">
                        <span> login </span>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Header;