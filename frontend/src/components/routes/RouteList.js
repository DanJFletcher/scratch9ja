import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamesContextProvider from '../../contexts/GamesContext';
import CartContextProvider from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import GameDetails from '../pages/GameDetails';
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Axios from 'axios';



const RouteList = () => {

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    });

    useEffect(() => {
      const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-token");
          if(token === null) {
              localStorage.setItem("auth-token", "");
              token = "";
          }

          const tokenRes = await Axios.post(
              "http://localhost:8000/api/users/tokenisvalid",
               null,
             
               { headers: {"auth-token": token}}
               );



          if (tokenRes.data) {
         const userRes = await Axios.get("http://localhost:8000/api/users/",
         {
             headers: {"auth-token": token},
        
        });

        setUserData({
            token,
            user: userRes.data,
        });
    }
}
checkLoggedIn();
    }, []);
    return (
        <div>
            <Router>
                <Switch>
                <UserContext.Provider value={{ userData, setUserData}}>
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
                    </UserContext.Provider>
                    
                </Switch>
            </Router>
        </div>
    );
}

export default RouteList;