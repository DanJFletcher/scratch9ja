import React from 'react'
import banner from '../../imgs/banner.png'
import Header from '../layouts/Header'
import GamesByCategories from '../layouts/GamesByCategories'
import perspective from '../../imgs/perspective.png'
import global from '../../imgs/linesa.png'
import footballVideo from '../../vids/video-football.mp4'
import { FaChevronRight } from "react-icons/fa"
import Faqs from '../layouts/Faqs'
import GamesContextProvider from '../../contexts/GamesContext'
import StickyCart from '../objects/StickyCart'
import PageDivider from '../objects/PageDivider'
import StickyCartToggleIndicator from '../objects/StickyCartToggleIndicator'


const Homepage = () => {

    const bannerBg = " linear-gradient(rgba(0,0,0, .75), rgba(0,0,0, .75)), url(" + banner + ") center/cover"

    return (
        <div>
            
            <StickyCart />
        
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
               
            <StickyCartToggleIndicator />
            

            <div className="flex justify-around game-highlight">
                <div className="text-content">
                    <h1>Where do you think <br/> the ball is... Lets play!</h1>
                    <p>Scratch the box where you think the ball should be, if you find the ball you win <b> &#8358; 50,000 </b>instantly</p>
                </div>
                <div className="media-content flex justify-center">
                    <video autoplay="autoplay" loop>
                        <source src={footballVideo} type="video/mp4" />
                    </video>
                </div>
            </div>

            <PageDivider />


            <div className="flex justify-around game-highlight reversed">
                
                <div className="media-content flex justify-center">
                    <img src={perspective} alt="birthday"/>
                </div>

                <div className="text-content">
                    <h1>Bring back the <br/> fun in cards.</h1>
                    <p>Play with family and friends. We have a series of options available just for you.</p>
                    
                </div>
            </div>

            <PageDivider />


            <div className="flex justify-around game-highlight">
                <div className="text-content">
                    <h1>Play now, from anywhere, on any device</h1>
                    <p>Get your cards delivered to your preferred address. Order can be made from any device.</p>
                </div>
                <div className="media-content flex justify-center">
                    <img src={global} alt="football"/>
                </div>
            </div>

            <PageDivider />

            <GamesContextProvider>
                <GamesByCategories/>
            </GamesContextProvider>


            <Faqs/>

            

        </div>
    );
}

export default Homepage;