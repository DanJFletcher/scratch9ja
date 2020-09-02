import React from 'react'
import banner from '../../imgs/banner.jpg'
import Header from '../layouts/Header'


const Homepage = () => {

    const bannerBg = " linear-gradient(rgba(0,0,0, .8), rgba(0,0,0, .8)), url(" + banner + ") center/cover"

    return (
        <div>
            <Header />
            <div className="page-banner flex justify-center" style={{ background:  bannerBg }}> 
                <div class="text-content">
                    <h1>It is time for you to <br/> win big, everyday.</h1>
                    <p>With the Scratch9ja scratch games your winning is sure. <br/>
                        Play now with as low as N100 and win up to N1,000,000 instantly.</p>

                    <a href="#" className="custom-btn">
                        <span>See all scratch games</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Homepage;