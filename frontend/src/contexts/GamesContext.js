import React, {createContext} from 'react'
import game1 from '../imgs/goldenjackpot.png'
import game2 from '../imgs/findtheball1.jpg'
import game3 from '../imgs/footballedition2.png'
import game4 from '../imgs/wazojackpot.jpg'
import game5 from '../imgs/birthday1.png'
import game6 from '../imgs/dettydecember1.png'
import game7 from '../imgs/findtheball2.png'
import game8 from '../imgs/findtheball3.jpg'
import game9 from '../imgs/findtheball4.jpg'



export const GamesContext = createContext()

const GamesContextProvider = (props) => {

    const games = [
        {id: 1, image: game1, title: 'golden jackpot', price: 1000.00, category: 1, isNew: true, topPrize: "N5,000,000", isVerOrient: true,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000 instantly!"},

        {id: 2, image: game2, title: 'find the ball', price: 1000.00, category: 2, isNew: true, topPrize: "N50,000", isVerOrient: false,
        desc: "Scratch only 1 box to reveal the ball, if you find the ball, you win N50,000 instantly!"},

        {id: 3, image: game3, title: 'football club search', price: 200.00, category: 2, isNew: false, topPrize: "N100,000", isVerOrient: false,
        desc: "Scratch only 3 balls to reveal the football clubs. If the clubs are the same, you win N100,000 instantly!"},

        {id: 4, image: game4, title: 'wazo jackpot', price: 1000.00, category: 1, isNew: false, topPrize: "N500,000", isVerOrient: true,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N500,000. If you match 4 identical cards you win N20,000 instantly!"},

        {id: 5, image: game5, title: 'birthday', price: 1000.00, category: 3, isNew: true, topPrize: "Car, Cash, Phones, Laptops, etc...", isVerOrient: true,
        desc: "Scratch only 3 gift boxes, what you find is what you win. Scratch the cupcake to reveal the surprise gift."},
        
        {id: 6, image: game6, title: 'detty december', price: 1000.00, category: 3, isNew: false, topPrize: "Car, Cash, Phones, Laptops, etc...", isVerOrient: true,
        desc: "Scratch only 3 gift boxes, what you find is what you win."},

        {id: 7, image: game7, title: 'find the ball', isVersion: true, price: 1000.00, category: 2, isNew: true, topPrize: "N50,000", isVerOrient: false,
        desc: "Scratch only 1 box to reveal the ball, if you find the ball, you win N50,000 instantly!"},

        {id: 8, image: game8, title: 'find the ball', isVersion: true, price: 1000.00, category: 2, isNew: true, topPrize: "N50,000", isVerOrient: false,
        desc: "Scratch only 1 box to reveal the ball, if you find the ball, you win N50,000 instantly!"},

        {id: 9, image: game9, title: 'find the ball', isVersion: true, price: 1000.00, category: 2, isNew: true, topPrize: "N50,000", isVerOrient: false,
        desc: "Scratch only 1 box to reveal the ball, if you find the ball, you win N50,000 instantly!"},
    ]


    return (
        <GamesContext.Provider value={{ games }}>
            { props.children }
        </GamesContext.Provider>
    );
}

export default GamesContextProvider;