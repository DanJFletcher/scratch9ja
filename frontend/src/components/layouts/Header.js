import React from 'react'
import {A} from 'hookrouter'
import logo from '../../imgs/logo.png'
import * as Icon from 'react-feather';

const Header = () => {


    return (
        <div class="flex justify-between w-full page-header">
            <div className=" logo justify-between ">
                <img src={logo} alt="logo"/>
            </div>

            <div className="preferred-items">
                <input type="text" placeholder="What will you love to win?"/>
                <span> <Icon.Search /> </span>
            </div>

            <div className="flex justify-between ctas">
                <span> <Icon.ShoppingCart /> </span>
                <A href="/login" className="custom-btn header-btn">
                    <span> login </span>
                </A>
            </div>
        </div>
    );

}

export default Header;