import React, {useState, useRef, useContext} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import GameBox from '../objects/GameBox'
import { GamesContext } from '../../contexts/GamesContext'




const GamesByCategories = () => {

    const { games } = useContext(GamesContext)
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


    //filter and populate the games list by current category
    const gamesList = games.filter(game => (game.category === (currentCategory) || currentCategory === 0))
    .map(game => {
        return (
            <GameBox id={game.id} image={game.image} title={game.title} price={game.price} isNew={game.isNew} /> 
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

            <div id="game-categories-tab" ref={categoriesTabRef} className={"flex justify-center mt-10 mb-8 custom-tabs " + stickyStyles}>
                <div className="tab-container">
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