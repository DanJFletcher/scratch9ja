import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamesContextProvider from '../../contexts/GamesContext';
import StickyCartContextProvider from '../../contexts/StickyCartContext';
import GameDetails from '../pages/GameDetails';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup';

const RouteList = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <StickyCartContextProvider> <Homepage /> </StickyCartContextProvider>
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/signup">
                        <Signup />
                    </Route>

                    <Route path="/game/:id">
                        <GamesContextProvider> <GameDetails /> </GamesContextProvider>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default RouteList;