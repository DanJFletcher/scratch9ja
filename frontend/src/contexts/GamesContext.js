import React, {createContext} from 'react'
import game1 from '../imgs/goldenjackpot.png'
import game2 from '../imgs/football1.jpg'
import game3 from '../imgs/football2.jpg'
import game4 from '../imgs/wazojackpot.jpg'
import game5 from '../imgs/birthday1.png'
import game6 from '../imgs/dettydecember1.png'


export const GamesContext = createContext()

const GamesContextProvider = (props) => {

    const games = [
        {id: 1, image: game1, title: 'golden jackpot', price: 500.00, category: 1, isNew: true, topPrize: "N50,000", isHoriz: false,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000"},

        {id: 2, image: game2, title: 'find the ball', price: 200.00, category: 2, isNew: true, topPrize: "N50,000", isHoriz: false,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000"},

        {id: 3, image: game3, title: 'find the ball', price: 500.00, category: 2, isNew: false, topPrize: "N50,000", isHoriz: false,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000"},

        {id: 4, image: game4, title: 'wazo jackpot', price: 100.00, category: 1, isNew: false, topPrize: "N50,000", isHoriz: false,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000"},

        {id: 5, image: game5, title: 'birthday', price: 1000.00, category: 3, isNew: true, topPrize: "N50,000", isHoriz: false,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000"},
        
        {id: 6, image: game6, title: 'detty december', price: 1000.00, category: 3, isNew: false, topPrize: "N50,000", isHoriz: false,
        desc: "Scratch only 4 cards, if you find the jackpot card, you win N5,000,000. If you match 4 identical cards you win N50,000"},
    ]


    return (
        <GamesContext.Provider value={{ games }}>
            { props.children }
        </GamesContext.Provider>
    );
}

export default GamesContextProvider;