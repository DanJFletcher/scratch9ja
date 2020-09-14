import React, {createContext, useState} from 'react'

export const HeaderViewContext = createContext()

const HeaderViewContextProvider = (props) => {

    const [showHeader, setShowHeader] = useState(false)

    const toggleHeaderView = (condition) => {
        setShowHeader(condition)
    }

    return (
        <HeaderViewContext.Provider value={{showHeader, toggleHeaderView }}>
            {props.children}
        </HeaderViewContext.Provider>
    );
}

export default HeaderViewContextProvider;