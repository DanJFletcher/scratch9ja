import React, {useState, useRef} from 'react'
import banner from '../../imgs/banner.png'
import Header from '../layouts/Header'
import GamesByCategories from '../layouts/GamesByCategories'
import footballgame from '../../imgs/football.jpg'
import birthday from '../../imgs/birthday1.png'
import { FaChevronRight } from "react-icons/fa"
import PageDivider from '../objects/PageDivider'


const Homepage = () => {

    const bannerBg = " linear-gradient(rgba(0,0,0, .75), rgba(0,0,0, .75)), url(" + banner + ") center/cover"

    return (
        <div>

            <Header/>

            <div className="page-banner flex justify-center" style={{ background:  bannerBg }}> 
                <div class="text-content">
                    <h1>Experience The Fun</h1>
                    <p>All games, All seasons, We've got you! <br/> Scratch & Win Card Games.</p>

                    <a href="#game-categories-tab" className="custom-btn with-icon">
                        <span>get started</span>
                        <i className="ml-3"><FaChevronRight /></i> 
                    </a>
                </div>
            </div>

            <PageDivider />
            

            <div className="flex justify-around game-highlight">
                <div className="text-content">
                    <h1>Where do you think <br/> the ball is... Lets play!</h1>
                    <p>Scratch the box where you think the ball should be, if you find the ball you win <b> &#8358; 50,000 </b>instantly</p>
                    <a href="#" className="custom-btn">
                        <span>Add To Cart</span>
                    </a>
                </div>
                <div className="img-content flex justify-center">
                    <img src={footballgame} alt="football"/>
                </div>
            </div>

            <PageDivider />


            <div className="flex justify-around game-highlight reversed">
                
                <div className="img-content img-content-ver flex justify-center">
                    <img src={birthday} alt="birthday"/>
                </div>

                <div className="text-content">
                    <h1>Gift something special to your friends and family</h1>
                    <p>Scratch only one of the gift boxes what you find is what is you win.</p>
                    <a href="#" className="custom-btn">
                        <span>Add To Cart</span>
                    </a>
                </div>
            </div>

            <PageDivider />

            <GamesByCategories/>
            <Faqs/>

            

        </div>
    );
}

export default Homepage;