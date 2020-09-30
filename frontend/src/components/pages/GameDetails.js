import React,{ useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GamesContext } from '../../contexts/GamesContext'
import BackArrow from '../objects/BackArrow';
import GameTag from '../objects/GameTag';
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { Tooltip} from '@trendmicro/react-tooltip';
import GameBox from '../objects/GameBox';
import StickyCart from '../objects/StickyCart';
import StickyCartContextProvider from '../../contexts/StickyCartContext';


const GameDetails = () => {

    const { id } = useParams()
    const { games } = useContext(GamesContext)

    const game = games.find(game =>  game.id == id)
    const gameBg = 'url('+game.image+') center/cover'
    const verCardImgClass = game.isVerOrient ? 'ver' : ""

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

    return (
        <div>

           <StickyCartContextProvider> <StickyCart isVisible={true} /> </StickyCartContextProvider>

            <div className="game-datails-bg-container">

                <div className="flex justify-between game-details-header">
                    <BackArrow />
                    {  game.isNew&& (<GameTag text="new" />) }
                </div>

                

                <div className="game-datails-bg" style={{ background: gameBg }}></div>

                <div className="flex game-details-content">
                    <div className="flex text-content-container">
                        <div className="text-content">
                            
                            <h1> {game.title} </h1>
                            <span class="prize">top prize : &nbsp;<b>{game.topPrize}</b> </span>
                            <div className="description">
                                <span>{game.desc}</span>
                            </div>

                            <div className="flex justify-between cta">
                                <span className="price">&#8358; {game.price}</span>

                                <div className="custom-btn">
                                    <span>add to cart</span>
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
                        
                        <div className="sub-heading">   
                            <span>More Versions</span>
                        </div>

                        <div className="flex pt-5 game-version-container">
                            { moreVersion }
                        </div>

                    </div> ) }

                    <div className="mb-32">
                        <div className="sub-heading">   
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