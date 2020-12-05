import React, { useContext } from "react";
import { Link, useHistory } from 'react-router-dom'
import UserContext from "../../contexts/UserContext";


authOptions = () => {

    const  { userData, setUserdata }  = useContext(UserContext);

    const history = useHistory();

    const login = () => history.push("/login")


    return (
        <div>
        <Link to="/login" className="custom-btn header-btn">
             <span> login </span>
         </Link>
        </div>
    )
}

export default authOptions
