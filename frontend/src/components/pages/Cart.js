import React, { useContext } from 'react'
import BackArrow from '../objects/BackArrow'
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io'
import { VscTrash } from 'react-icons/vsc'
import { GamesContext } from '../../contexts/GamesContext'
import { CartContext } from '../../contexts/CartContext'
import image from '../../imgs/findtheball1.jpg'



const Cart = () => {

    const { items, increaseItemAmount, decreaseItemAmount } = useContext(CartContext)
    const { games } = useContext(GamesContext)

    const totalGames = items.length
    const totalCards = () =>{
        var total = 0
        items.map(item => {
            total = total + item.amount
        })
        return total
    }
    const totalPrice = () =>{
        var total = 0
        items.map(item => {
            var gamePrice = games.find(game => game.id === item.gameId).price
            total = total + (gamePrice * item.amount)
        })
        return total
    }

    const itemsList = items.map(item => {
        const game = games.find(game => game.id == item.gameId)
        return(
            <div className="flex justify-between cart-item-box">

                <div className="content-container">
                    <div className="text-content">
                        <h1>{game.title}</h1>
                        <span className="winning-prize">top prize: <b> {game.topPrize} </b> </span>
                        <span className="price">Total : ₦{(game.price * item.amount).toLocaleString()} </span>
                    </div>
                    
                    <div className="flex justify-between amount-control">
                        <div onClick={() => decreaseItemAmount(game.id)}> <IoIosRemoveCircleOutline /> </div>
                        <span> {item.amount} </span> 
                        <div onClick={() => increaseItemAmount(game.id)}> <IoIosAddCircleOutline /> </div>
                    </div>
                </div>

                <div className="image" style={{ background: 'url('+game.image+') no-repeat scroll 0% 0% / cover' }}></div>

            </div>
        )
    })

    return (
        <div>

            <div className="flex justify-between cart-header">
                <BackArrow />
                <div className="section-heading">
                    <span>My Cart </span>
                </div>
                
                <div className="flex justify-between clear-cart">
                    <VscTrash />
                    <span>clear</span>
                </div>
            </div>

            <div className="flex justify-between cart-body">
                <div>
                    <div className="flex flex-wrap justify-between cart-items-container">
                        {itemsList}
                    </div>
                </div>

                <div className="cart-summary-container">
                    <div className="cart-summary">
                        <span className="heading">summary</span>
                        <div className="flex justify-between content">
                            <div className="flex details">
                                <h1> {totalGames} </h1>
                                <span>games</span>
                            </div>

                            <div className="flex details">
                                <h1> {totalCards()} </h1>
                                <span>cards</span>
                            </div>
                        </div>

                        <div className="pricing">
                            
                            <div className="price">
                                <span>total price</span>
                                <h1>₦ {totalPrice().toLocaleString()} </h1>
                                <h3>Delivery fee not included yet</h3>
                            </div>

                            <div className="flex justify-center">
                                <div className="custom-btn">
                                    <span>checkout</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-footer">
                <div className="flex justify-center">
                    <div className="resize-bar"></div>
                </div>

                <div className="flex justify-between pricing">
                            
                    <div className="price">
                        {/* <span>total price</span> */}
                        <h1>₦ {totalPrice().toLocaleString()} </h1>
                        <h3>Delivery fee not included yet</h3>
                    </div>

                    <div className="flex justify-center">
                        <div className="custom-btn">
                            <span>checkout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Cart;