import React from 'react';
import StickyCartContextProvider from '../../contexts/StickyCartContext';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup';

const routes = {
    "/": () => <StickyCartContextProvider> <Homepage /> </StickyCartContextProvider>,
    "/login": () => <Login />, 
    "/signup": () => <Signup />, 
}

export default routes;