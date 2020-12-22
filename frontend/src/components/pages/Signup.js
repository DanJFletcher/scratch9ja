import React, { useState, useContext }   from 'react';
import LoginBanner from '../../imgs/scratch9ja.png';
import Logo from '../../imgs/logo.png';
import UserContext from "../../contexts/UserContext";
import ErrorNotice from '../auth/ErrorNotice';
import {useForm} from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useHistory} from 'react-router-dom'
import Axios from "axios"


const SignUp = () => {

    // SET THE VALUE OF EACH INPUT FIELD
    const [name, setName] = useState();
    const [ email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    // ENABLE UserContext
    const { setUserData } = useContext(UserContext);

    const history = useHistory();

    // background image
    const loginBg = "url(" + LoginBanner + ") center/cover"

    // handle submit
    const { register, handleSubmit, errors, watch } = useForm();
    
    const onSubmit = async(e) => {
     

        try {
            const newUser = {name, email, password};
        await Axios.post(
            "http://localhost:8000/api/user/register",
            newUser
        )
        const loginRes  = await Axios.post("http://localhost:8000/api/user/login",
        {
            email,
            password,
          });
          setUserData({
              token: loginRes.data.token,
              user: loginRes.data.user,
          });

          localStorage.setItem("auth-token", loginRes.data.token);
          history.push("/");
        } catch (err) {
            setError(err.response.data) 
        }
        
    };

    // Password visibility toggle
    const [passwordShown, setPasswordShown] = useState(false);
    const passwordToggleIcon = passwordShown ? <FaEyeSlash /> : <FaEye />;
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false:  true );
    };

    

    return (
       
        <div className="form-bg flex justify-center page-header" style={{ background:  loginBg }} >
                
            <div className="text-content container mx-auto p-2 ">

                <li className="back">
                    {/* <A className="nav-link" href="/">
                        <ArrowLeftCircle className="back-icon" />
                        back
                    </A> */}
                </li>
            
                <div className="max-w-sm mx-auto justify-center px-5  rounded shadow-xl">
            
                    <div className="flex mx-40 logo justify-between mb-8">
                        <img src={Logo} alt=""/>
                    </div>
            
                    <form onSubmit={handleSubmit(onSubmit)}>
                    { error && (
                        <ErrorNotice message={error} clearError={() => setError(undefined)}/>
                    )}
                        <div className="mt-5 form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                             id="username" 
                             name="username" 
                             className="block 
                             w-full custom-input p-2  
                             rounded "  
                             ref={register({ required: true })}
                             onChange={(e) => setName(e.target.value)}
                              />

                            {errors.username && errors.username.type === "required" 
                                &&  (<span className="error-message">Fill in your Username</span>) } 
                        </div>
                
                            
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
                            ref={register({required: true, minLength: 8,  })}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="password-view" onClick={() => togglePasswordVisiblity()}>{passwordToggleIcon}</i>

                            {errors.password && errors.password.type === "required"     
                            &&  (<span className="error-message">Input your password</span>)}  

                            {errors.password && errors.password.type === "maxLength" 
                            &&  (<span className="error-message">Password must be at least eight characters long</span>)} 

                            {errors.password && errors.password.type === "minLength" 
                            &&  (<span className="error-message">Password must be 8 characters long</span>)} 
                        </div>
                
                        <div className="mt-5 form-group">
                            <label htmlFor="ConfirmPassword">Confirm Password</label>
                            <input type="password" id="ConfirmPassword" name="ConfirmPassword" className="block w-full custom-input p-2  rounded "  
                                ref={register({
                                validate: (value) => value === watch('password') })} />

                                {errors.ConfirmPassword && errors.ConfirmPassword.type === "validate" 
                                &&  (<span className="error-message">Passwords do not match</span>)}
                        </div>
                
                        <div className=" mt-8 ">
                            <input type="submit" value="Register" name="submit" className="py-3 rounded custom-btn text-center w-full" />        
                        </div>
                                
                        <br/>

                        <div>
                            <span>Already have an account? <Link to="/login"><strong>Login</strong></Link> </span>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default SignUp;
