import React,{ useState ,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GamesContext } from '../../contexts/GamesContext'
import BackArrow from '../objects/BackArrow';
import GameTag from '../objects/GameTag';
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { Tooltip} from '@trendmicro/react-tooltip';
import GameBox from '../objects/GameBox';
import StickyCart from '../objects/StickyCart';
import { CartContext } from '../../contexts/CartContext';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'



const GameDetails = () => {

    const { id } = useParams()
    const { games } = useContext(GamesContext)
    const { items, addItemToCart } = useContext(CartContext)


    const game = games.find(game =>  game.id == id)
    const gameBg = 'url('+game.image+') center/cover'
    const verCardImgClass = game.isVerOrient ? 'ver' : ""


    const amountInCart = () => {
        const gameInCart = items.find(item => item.gameId == game.id)
        return gameInCart ? gameInCart.amount : 1
    }
    const countAmountInCart = amountInCart()
    const [itemQuantity, setItemQuantity] = useState(countAmountInCart)

    const isItemInCart = items.some(item => item.gameId === game.id)
    const [exactInCart, setExactInCart] = useState(isItemInCart)



    const moreVersion = games.filter(game => game.title == "find the ball")
                                .filter(filteredGames => filteredGames.id != game.id)
                                    .map(game => {
        return (
            <Link to={"/game/"+ game.id} className="game-version-box">
                <div className="image" style={{ background: 'url('+game.image+') right/cover' }} ></div>
                <Tooltip placement="bottom" content="Add To Cart">
                    <div className="flex justify-center cta">
                        <FiShoppingCart />
                    </div>
                </Tooltip>
            </Link>
        )
    })


    const gamesList = games.filter(game => !game.isVersion )
                            .filter(filteredGame => filteredGame.id != game.id )
                                .map(game => {
                                    return (
                                        <GameBox id={game.id} image={game.image} title={game.title} price={game.price} isNew={game.isNew} /> 
                                    )
                                })


    const increaseQuantity = () =>{
        setItemQuantity(itemQuantity + 1)
        setExactInCart(false)
    }

    const decreaseQuantity = () =>{
        if(itemQuantity > 1){
            setItemQuantity(itemQuantity - 1)
            setExactInCart(false)
        }
    }

    const addToCartBtnClass = exactInCart ? "disabled" : ""

    return (
        <div>

           <StickyCart isVisible={true} />

            <div className="game-datails-bg-container">

                <div className="flex justify-between game-details-header">
                    <BackArrow to="/" hash="#game-categories-tab" />
                    {/* {  game.isNew&& (<GameTag text="new" />) } */}
                </div>

                

                <div className="game-datails-bg" style={{ background: gameBg }}></div>

                <div className="flex game-details-content">
                    <div className="flex text-content-container">
                        <div className="text-content">
                            
                            <h1> {game.title} </h1>
                            <span class="prize">top prize : <b>{game.topPrize}</b> </span>
                            <div className="description">
                                <span>{game.desc}</span>
                            </div>

                            <div className="flex justify-between price-section">
                                <div className="price">
                                    <span>total</span>
                                    <h2>₦{(game.price * itemQuantity).toLocaleString()}</h2>
                                </div>

                                <div className="quantity-control">
                                    <div className="title">
                                       <span>quantity</span> 
                                    </div>
                                    <div className="flex justify-between controls">
                                        <div onClick={() => decreaseQuantity()}> <IoIosRemoveCircleOutline /> </div>
                                        <span> {itemQuantity} </span> 
                                        <div onClick={() => increaseQuantity()}> <IoIosAddCircleOutline /> </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="flex justify-between cta">
                                {/* <span className="price">₦{game.price}</span> */}

                                <div onClick={ exactInCart ? null : (() => {addItemToCart(game.id, itemQuantity); setExactInCart(true)}) } className={"custom-btn " + addToCartBtnClass}>
                                    <span> add to cart </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-content p-5">
                        <div className="flex justify-center">
                            <img className={verCardImgClass} src={game.image} alt={game.title}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-details-body">

                { game.title == "find the ball"&& (
                    <div className="mb-24">
                        
                        <div className="section-sub-heading">   
                            <span>More Versions</span>
                        </div>

                        <div className="flex pt-5 game-version-container">
                            { moreVersion }
                        </div>

                    </div> ) }

                    <div className="mb-32">
                        <div className="section-sub-heading">   
                            <span>People are also playing</span>
                        </div>

                        <div className="flex pt-5 game-version-container">
                            { gamesList }
                        </div>
                    </div>
            </div> 
            

        </div>
    );
}

export default GameDetails;