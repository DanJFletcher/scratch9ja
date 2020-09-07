import React, {useState} from 'react'
import GameBox from '../objects/GameBox'
import game1 from '../../imgs/jackpot.png'
import game2 from '../../imgs/1banker.png'
import game3 from '../../imgs/2sure.png'
import game4 from '../../imgs/mega4.png'
import game5 from '../../imgs/lucky3.png'
import game6 from '../../imgs/jackpot.png'





const GamesByCategories = () => {
    
    const categories =[
        {id: 1, name: 'gadgets'},
        {id: 2, name: 'sports'},
        {id: 3, name: 'family'},
    ]

    const categoriesTab = categories.map(category => {
        return(
            <div key={category.id} className="tab-element">
                <span>{category.name}</span>
            </div>
        )
    })

     const [games] = useState([
        {id: 1, image: game1, title: 'fast cash', price: 500.00},
        {id: 2, image: game2, title: 'sharp win', price: 200.00},
        {id: 3, image: game3, title: 'beta plus', price: 500.00},
        {id: 4, image: game4, title: 'yafun yafun', price: 100.00},
        {id: 5, image: game5, title: 'scratch hammer', price: 1000.00},
        {id: 6, image: game6, title: 'win direct', price: 1000.00},
    ])

    const gamesList = games.map(game => {
        return (
            <GameBox id={game.id} image={game.image} title={game.title} price={game.price} /> 
        )
        
    })



    return (
        <div>
            <div className="custom-tabs flex justify-center mt-40 mb-8">
                <div className="tab-container pt-5 pb-5">
                    <div className="flex">
                        <div className="tab-element active">
                                <span>All</span>
                        </div>
                        
                        {categoriesTab}
                    </div>
                </div>
            </div>

            <div className="grid justify-center categories-games">
                <div className="flex flex-wrap categories-games-container">
                    { gamesList }
                </div> 
            </div>

            <div className="flex justify-center mb-8">
                <a href="#" className="custom-btn">
                        <span>load more games</span>
                    </a>
            </div>

            
        </div>
    )
}


export default GamesByCategories;