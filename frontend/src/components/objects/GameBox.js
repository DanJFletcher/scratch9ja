import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { Tooltip} from '@trendmicro/react-tooltip';
import { Link } from 'react-router-dom'
import GameTag from './GameTag';

const GameBox = (props) => {
    const gameImage = 'url('+props.image+')'

    return (
        <div>

            <Link to={"/game/"+ props.id} key={props.id} className="game-box">
                <div className="image flex justify-center">
                    <span className="img-box" style={{ background: gameImage, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></span>
                </div>

                <div className="content flex justify-between">
                    <div className="text">
                        <h1>{props.title}</h1>
                        <span>₦{props.price.toLocaleString()}</span>
                    </div>
                    <div className="cta flex justify-center">
                        <Tooltip placement="top" content="Add To Cart">
                            <FiShoppingCart />
                        </Tooltip>
                    </div>
                </div>

                { props.isNew&& ( <GameTag text="new" placement="top-left" /> )}

                {/* <div className="flex winning-price">
                    <span>top prize: &#8358;50,000</span>
                </div> */}
            </Link>
            
        </div>
    );
}

export default GameBox;