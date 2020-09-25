import React,{ useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GamesContext } from '../../contexts/GamesContext'
import BackArrow from '../objects/BackArrow';
import GameTag from '../objects/GameTag';


const GameDetails = () => {

    const { id } = useParams()
    const { games } = useContext(GamesContext)

    const game = games.find(game =>  game.id == id)
    const gameBg = 'url('+game.image+') center/cover'
    

    return (
        <div>

            <div className="game-datails-bg-container">

                <BackArrow for="game-details" />

                <div className="game-datails-bg" style={{ background: gameBg }}></div>

                <div className="flex game-details-content">
                    <div className="text-content-container">
                        <div className="text-content">
                            <GameTag text="new" />
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
                            <img className="" src={game.image} alt={game.title}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GameDetails;