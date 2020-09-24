import React, {createContext, useState} from 'react'

export const StickyCartContext = createContext()

const StickyCartContextProvider = (props) => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = (condition) => {
        setIsVisible(condition)
        console.log('works')
    }

    return (
        <StickyCartContext.Provider value={{ isVisible, setIsVisible }}>
            { props.children }
        </StickyCartContext.Provider>
    );
}

export default StickyCartContextProvider;
