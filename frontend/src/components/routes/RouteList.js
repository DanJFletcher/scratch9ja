import React from 'react';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup';
import HeaderViewContextProvider from '../../contexts/HeaderViewContext';

const routes = {
    "/": () =>  <Homepage />,
    "/login": () => <Login />, 
    "/Signup": () => <Signup />, 
}

export default routes;