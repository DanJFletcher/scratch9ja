import React, {useContext} from 'react'
import {A} from 'hookrouter'
import logo from '../../imgs/logo.png'
import * as Icon from 'react-feather';
import { Tooltip} from '@trendmicro/react-tooltip';
import { HeaderViewContext } from '../../contexts/HeaderViewContext';

const Header = (props) => {

    //const showHeader = useContext(HeaderViewContext)
    const headerStyleClass = props.headerView ? "stay_on_top" : ""
    return (
        <div>
            <div className={"flex justify-between w-full page-header " + headerStyleClass }>
                <div className=" logo justify-between ">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="preferred-items">
                    <input type="text" placeholder="What will you love to win?"/>
                    <span> <Icon.Search /> </span>
                </div>

                <div className="flex justify-between ctas">
                    <div className="cart-container">
                        <Tooltip placement="top" content="View Cart">
                            <Icon.ShoppingCart />
                        </Tooltip>
                        <div className="flex justify-center cart-counter">
                            <span>5</span>
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