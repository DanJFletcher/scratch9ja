import React from 'react';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'

const routes = {
    "/": () => <Homepage />,
    "/login": () => <Login />, 
}

export default routes;