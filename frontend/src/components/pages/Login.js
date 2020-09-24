import React, { useState }   from 'react';
import LoginBanner from '../../imgs/scratch9ja.png';
import Logo from '../../imgs/logo.png';
import {useForm} from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa"
import {A} from 'hookrouter'


const Login = () => {

    //background image
    const loginBg = "url(" + LoginBanner + ") center/cover"

    // handle submit
    const { register, handleSubmit, errors} = useForm({});
    const onSubmit =  (data, e) => {
        console.log(data);
        e.target.reset();
    };
    const onError = (errors, e) => console.log(errors, e);

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
                
                    <form onSubmit={handleSubmit(onSubmit, onError)}>

                        <div className="mt-5 form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" className="block w-full custom-input p-2  rounded "
                            ref={register({ required: true })} />
                            {errors.username && errors.username.type === "required" 
                            &&  (<span className="error-message">Fill in your Username</span>) }
                        </div>
                        
                        <div className="mt-5 form-group">
                            <label htmlFor="password">Password</label>
                            <input type={passwordShown ? "text" : "password"} id="password" name="password"
                            className="block w-full custom-input p-2  rounded "
                            ref={register({ required: true, maxLength: 8, minLength: 8,  })} />
                            <i className="password-view" onClick={ () => togglePasswordVisiblity() }>{passwordToggleIcon}</i>
                        

                            {errors.password && errors.password.type === "required" 
                            &&  (<span className="error-message">Fill in your Username password</span>)}

                            {errors.password && errors.password.type === "maxLength" 
                            &&  (<span className="error-message">Password has exceeded eight characters</span>)}

                            {errors.password && errors.password.type === "minLength" 
                            &&  (<span className="error-message">Password is lesser than 8 characters</span>)}
                        </div>
                        
                        <div className="mt-8 form-group">
                            <input type="submit" value="Login" className="py-3 rounded custom-btn text-center w-full" name="submit" />
                            <A href="#"><span>Forgot password?</span></A>
                        </div>

                        <br/>

                        <div>
                            <span>Don't have an account? <A href="/signup"><strong>Create Account</strong></A> </span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
