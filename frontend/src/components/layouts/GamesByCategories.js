import React, {useState} from 'react'
import GameBox from './GameBox'
import game1 from '../../imgs/jackpot.png'
import game2 from '../../imgs/1banker.png'
import game3 from '../../imgs/2sure.png'
import game4 from '../../imgs/mega4.png'





const GamesByCategories = () => {
    
    
   
    const Tabs = [
       'Gadgets', 'Sports', 'Family'
    ]

     const [games] = useState([
        {id: 1, image: game1, title: 'fast cash', price: 300.00},
        {id: 2, image: game2, title: 'sharp win', price: 200.00},
        {id: 3, image: game3, title: 'beta plus', price: 500.00},
        {id: 4, image: game4, title: 'yafun yafun', price: 100.00},
    ])

    

    const gamesList = games.map(game => {
        return (
            <GameBox id={game.id} image={game.image} title={game.title} price={game.price} /> 
        )
        
    })



    return (
        <div>
            <div className="custom-tabs flex justify-center mt-8 mb-8">
                <div className="tab-container pt-5 pb-5">
                    <div className="flex">

                    <div className="tab-element active">
                            <span>All</span>
                    </div>
                        {
                            Tabs.map(categories =>
                                <div className="tab-element">
                            <span>{categories}</span>
                        </div>
                           
                     )}

                      
                    </div>
                </div>
            </div>

            <div className="grid justify-center categories-games">
                <div className="flex flex-wrap categories-games-container">
                    { gamesList }
                </div> 
            </div>

            
        </div>
    )
}


export default GamesByCategories;