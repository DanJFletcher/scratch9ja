import React from 'react'
import banner from '../../imgs/banner.png'
import Header from '../layouts/Header'
import GamesByCategories from '../layouts/GamesByCategories'
import footballgame from '../../imgs/football.png'


const Homepage = () => {

    const bannerBg = " linear-gradient(rgba(0,0,0, .85), rgba(0,0,0, .85)), url(" + banner + ") center/cover"

    return (
        <div>
            <Header />

            <div className="page-banner flex justify-center" style={{ background:  bannerBg }}> 
                <div class="text-content">
                    <h1>Start winning now, <br/> it is your time.</h1>
                    <p>With the <b>Scratch9ja</b> scratch games, <br/> your winning is <b>sure</b>.
                        Play now with as low  <br/> as &#8358; 200 and win up to <b>&#8358; 1,000,000</b> instantly.</p>

                    <a href="#" className="custom-btn">
                        <span>See all scratchers</span>
                    </a>
                </div>
            </div>

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

            <GamesByCategories />

        </div>
    );
}

export default Homepage;