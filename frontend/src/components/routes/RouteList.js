import React from 'react';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup';

const routes = {
    "/": () => <Homepage />,
    "/login": () => <Login />, 
    "/Signup": () => <Signup />, 
}

export default routes;