import React, { useState, useContext}   from 'react';
import LoginBanner from '../../imgs/scratch9ja.png';
import Logo from '../../imgs/logo.png';
import {useForm} from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../../contexts/UserContext";
import Axios from "axios";
import ErrorNotice from '../auth/ErrorNotice';


const Login = () => {

    const [ email, setEmail ] = useState();
    const [ password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    //background image
    const loginBg = "url(" + LoginBanner + ") center/cover"

    // handle submit
    const { register, handleSubmit, errors} = useForm({});

    const onSubmit =  async () => {
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                "http://localhost:8000/api/user/login",
                loginUser
            ); 
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            setError(err.response.data); 
        }
    };

    // Password visibility toggle
    const [passwordShown, setPasswordShown] = useState(false);
    const passwordToggleIcon = passwordShown ? <FaEyeSlash /> : <FaEye />;
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    
    return (
        <div className="form-bg flex justify-center page-header" style={{ background:  loginBg }} >
            <div className="text-content container mx-auto p-2 ">
                <div className="max-w-sm mx-auto justify-center px-5 py-10 rounded shadow-xl">
                    <div className="flex mx-40 logo justify-between mb-8">
                        <img src={Logo} alt=""/>
                    </div>
                
                    <form onSubmit={handleSubmit(onSubmit)}>
                                { error &&( <ErrorNotice message={error} clearError={() => setError(undefined) } />)}
                        <div className="mt-5 form-group">
                            <label  htmlFor="email">Email Address</label>
                            <input className="block w-full custom-input p-2  rounded  " name="email" id="email" type="email" placeholder="Your valid email address"
                            ref={register({
                            required: "Required",
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                            }})} 
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            {errors.email && errors.email.type === "required" 
                            &&  (<span className="error-message">Email field is required</span>)}

                            {errors.email && errors.email.type === "pattern" 
                            &&  (<span className="error-message">invalid email address</span>)}
                        </div>
                        
                        <div className="mt-5 form-group">
                            <label htmlFor="password">Password</label>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password"
                            className="block w-full custom-input p-2  rounded "
                            onChange={(e) => setPassword(e.target.value)}
                            ref={register({ required: true, minLength: 8,  })} />
                            <i className="password-view" onClick={ () => togglePasswordVisiblity() }>{passwordToggleIcon}</i>
                        

                            {errors.password && errors.password.type === "required" 
                            &&  (<span className="error-message">Fill in your password</span>)}

                            {errors.password && errors.password.type === "maxLength" 
                            &&  (<span className="error-message">Password has exceeded eight characters</span>)}

                            {errors.password && errors.password.type === "minLength" 
                            &&  (<span className="error-message">Password is lesser than 8 characters</span>)}
                        </div>
                        
                        <div className="mt-8 form-group">
                            <input type="submit" value="Login" className="py-3 rounded custom-btn text-center w-full" name="submit" />
                            <Link to="#"><span>Forgot password?</span></Link>
                        </div>

                        <br/>

                        <div>
                            <span>Don't have an account? <Link to="/signup"><strong>Create Account</strong></Link> </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
