import React, {useState, useRef, useContext} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import GameBox from '../objects/GameBox'
import game1 from '../../imgs/goldenjackpot.png'
import game2 from '../../imgs/football1.jpg'
import game3 from '../../imgs/football2.jpg'
import game4 from '../../imgs/wazojackpot.jpg'
import game5 from '../../imgs/birthday1.png'
import game6 from '../../imgs/dettydecember1.png'



const GamesByCategories = () => {

    const [currentCategory, setCurrentCategory] = useState(0)
    
    const [categories, setCategories] = useState([
        {id: 0, name: 'all', isActive: true},
        {id: 1, name: 'gadgets', isActive: false},
        {id: 2, name: 'sports', isActive: false},
        {id: 3, name: 'family', isActive: false},
    ])

    const categoriesTab = categories.map(category => {
        var active = category.isActive ? 'active' : ''
        return(
            <div key={category.id} onClick={() => filterCategory(category.id)} className={"tab-element " + active } >
                <span>{category.name}</span>
            </div>
        )
    })

    const games = [
        {id: 1, image: game1, title: 'golden jackpot', price: 500.00, category: 1},
        {id: 2, image: game2, title: 'find the ball', price: 200.00, category: 2},
        {id: 3, image: game3, title: 'find the ball', price: 500.00, category: 2},
        {id: 4, image: game4, title: 'wazo jackpot', price: 100.00, category: 1},
        {id: 5, image: game5, title: 'birthday', price: 1000.00, category: 3},
        {id: 6, image: game6, title: 'detty december', price: 1000.00, category: 3},
    ]

    //filter and populate the games list by current category
    const gamesList = games.filter(game => (game.category === (currentCategory) || currentCategory === 0))
    .map(game => {
        return (
            <GameBox id={game.id} image={game.image} title={game.title} price={game.price} /> 
        )
        
    }) 

    const filterCategory = (categoryId) => {

        //update the current category
        var updatedCategories = categories.map(category => {
            if(category.id === categoryId){
                category.isActive = true
                
            }else{
                category.isActive = false
            }

            return category
        })

        setCurrentCategory(categoryId)

        setCategories(updatedCategories)
        
    }

    //add some styles to sticky categories tab
    const [isCategoriesTabSticky, setIsCategoriesTabSticky] = useState(false)
    const categoriesTabRef = useRef(null)
    const stickyStyles = isCategoriesTabSticky ? "is-sticky" : ""

    useScrollPosition( ({currPos}) =>{
        if(-(currPos.y) >= categoriesTabRef.current.offsetTop){
            setIsCategoriesTabSticky(true)
        }else{
            setIsCategoriesTabSticky(false)
        }
    })

    return (
        <div>

            <div id="game-categories-tab" ref={categoriesTabRef} className={"flex justify-center mt-40 mb-8 custom-tabs " + stickyStyles}>
                <div className="tab-container pt-5 pb-5">
                    <div className="flex">
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


