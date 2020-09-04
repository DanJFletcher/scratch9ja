import React from 'react'
import banner from '../../imgs/banner.png'
import Header from '../layouts/Header'
import GamesByCategories from '../layouts/GamesByCategories'


const Homepage = () => {

    const bannerBg = " linear-gradient(rgba(0,0,0, .85), rgba(0,0,0, .85)), url(" + banner + ") center/cover"

    return (
        <div>
            <Header />

            <div className="page-banner flex justify-center" style={{ background:  bannerBg }}> 
                <div class="text-content self-auto">
                    <h1>Start winning now, <br/> it is your time.</h1>
                    <p>With the <b>Scratch9ja</b> scratch games, <br/> your winning is <b>sure</b>.
                        Play now with as low  <br/> as N200 and win up to <b>N1,000,000</b> instantly.</p>

                    <a href="#" className="custom-btn">
                        <span>See all scratchers</span>
                    </a>
                </div>
            </div>

            <GamesByCategories />

        </div>
    );
}

export default Homepage;