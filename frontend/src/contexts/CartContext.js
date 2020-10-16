import React,{ createContext, useContext, useState } from 'react'
import { FaSmileWink } from 'react-icons/fa'
import { GamesContext } from './GamesContext'

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const {games} = useContext(GamesContext)

    //for sticky cart
    const [stickyCartVisibility, setStickyCartVisibility] = useState(false)


    //cart items
    const [items, setItems] = useState([
        {gameId: 1, amount: 2},
        {gameId: 2, amount: 5},
        {gameId: 3, amount: 3}
    ])

    
    const addItem = (gameId, quantity) =>{
        const newItem = {}
        newItem.gameId = gameId
        newItem.amount = quantity
        setItems([...items, newItem])
    }

    let removeItem = (gameId) =>{
        const updatedItems = items.filter(item => item.gameId != gameId)
        setItems(updatedItems)
    }

    const increaseItemAmount = (gameId) =>{
        const updatedItems = items.map(item => {
            if(gameId == item.gameId){
                item.amount = ++item.amount
            }
            return item
        })

        setItems(updatedItems)
    }

    const decreaseItemAmount = (gameId) =>{
        var removeItemFromCart = false 

        const updatedItems = items.map(item => {
            if(gameId == item.gameId){
                if(item.amount == 1){
                    removeItem(item.gameId)
                    removeItemFromCart = true
                }else{
                    item.amount = --item.amount
                }
            }
            return item
        })
        
        if(removeItemFromCart == false){
            setItems(updatedItems)    
        }
    }

    const addItemToCart = (gameId, quantity) =>{
        const isItemInCart = items.some(item => item.gameId === gameId)
        if(isItemInCart){
            const updatedItems = items.map(item => {
                if(item.gameId === gameId){
                    item.amount = quantity
                }
                return item
            })
            setItems(updatedItems)
        }else{
            addItem(gameId, quantity)
        }
        
    }
    
    const cartTotal = () =>{
        var total = 0
        for(let item of items){    
            total = total +  item.amount
        }

        return total;
    }

    return (
        <CartContext.Provider value={{ stickyCartVisibility, setStickyCartVisibility, items, increaseItemAmount, decreaseItemAmount,  addItemToCart, cartTotal}}>
            { props.children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;