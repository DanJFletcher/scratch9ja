import React from 'react'
import {A} from 'hookrouter'
import logo from '../../imgs/logo.png'
import { FiShoppingCart } from "react-icons/fi"
import { Tooltip} from '@trendmicro/react-tooltip';

const Header = () => {

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
                    <div className="cart-container">
                        <Tooltip placement="top" content="View Cart">
                            <FiShoppingCart />
                        </Tooltip>
                        <div className="flex justify-center cart-counter">
                            <span>0</span>
                        </div>
                    </div> 

                    <A href="/login" className="custom-btn header-btn">
                        <span> login </span>
                    </A>
                </div>
            </div>
        </div>
    );

}

export default Header;