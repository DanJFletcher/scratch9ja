import React, {useState, useRef} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import banner from '../../imgs/banner.png'
import Header from '../layouts/Header'
import GamesByCategories from '../layouts/GamesByCategories'
import footballgame from '../../imgs/football.jpg'
import birthday from '../../imgs/birthday1.png'


const Homepage = () => {

    const [showHeader, setShowHeader] = useState(false)

    const toggleHeaderView = (condition) => {
        setShowHeader(condition)
    }

    const firstSectionRef = useRef(null)
    useScrollPosition( ({currPos}) =>{
        if(-(currPos.y) >= firstSectionRef.current.offsetTop){
            toggleHeaderView(true)
        }else{
            toggleHeaderView(false)
        }
    })

    const bannerBg = " linear-gradient(rgba(0,0,0, .85), rgba(0,0,0, .85)), url(" + banner + ") center/cover"

    return (
        <div>
            
            <Header headerView={showHeader}/>

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

            <div ref={firstSectionRef} className="flex justify-around game-highlight">
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

            <GamesByCategories toggleHeaderView={(condition) => toggleHeaderView(condition)}/>

            <div className="flex justify-around game-highlight">
                
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

        </div>
    );
}

export default Homepage;