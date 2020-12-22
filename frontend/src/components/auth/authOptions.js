import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";

 const AuthOptions = () => {

    const  {userData, setUserData}  = useContext(UserContext);

    const history = useHistory();

    const login = () => history.push("/login")

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "")
    }

    return (
        <div>
    {
        userData.user ? 
        <button onClick={logout} className="custom-btn header-btn">
             <span> Logout </span>
        </button> :
        <button onClick={login} className="custom-btn header-btn">
             <span> login </span>
         </button>
    }
        
        </div>
    )
}
export default AuthOptions
