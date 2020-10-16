import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamesContextProvider from '../../contexts/GamesContext';
import CartContextProvider from '../../contexts/CartContext';
import GameDetails from '../pages/GameDetails';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';

const RouteList = () => {
    return (
        <div>
            <Router>
                <Switch>

                    <GamesContextProvider>
                        <CartContextProvider>
                            <Route path="/" exact>
                                <Homepage /> 
                            </Route>

                            <Route path="/login">
                                <Login />
                            </Route>

                            <Route path="/signup">
                                <Signup />
                            </Route>

                            <Route path="/game/:id">
                                <GameDetails /> 
                            </Route>

                            <Route path="/cart">
                                <Cart />
                            </Route>
                        </CartContextProvider>
                    </GamesContextProvider>
                    
                </Switch>
            </Router>
        </div>
    );
}

export default RouteList;