import React from 'react'
import banner from '../../imgs/banner.png'
import Header from '../layouts/Header'
import GamesByCategories from '../layouts/GamesByCategories'


const Homepage = () => {

    const bannerBg = " linear-gradient(rgba(0,0,0, .8), rgba(0,0,0, .8)), url(" + banner + ") center/cover"

    return (
        <div>
            <Header />

            <div className="page-banner flex justify-center" style={{ background:  bannerBg }}> 
                <div class="text-content">
                    <h1>Start winning now, <br/> it is your time.</h1>
                    <p>With the Scratch9ja scratch games your winning is sure. <br/>
                        Play now with as low as N200 and win up to N1,000,000 instantly.</p>

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